import User from "../models/user.m.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;
export const userinfo = async (req,res)=>{
    const {username} = req.params;
    const user = await User.findOne({username: username});
    const {hashedPassword, ...details} = user.toObject();
    res.status(200).json(details);
}
export const registerUser = async (req,res)=>{
    const {formData} = req.body;
    const {displayname,username,email,password,date} = formData;
    if(!displayname || !email || !password || !username || !date){
        return res.status(400).json({message: "All fields are required!!"})
    }
    const existingUser = await User.findOne(
        {
            $or :[
                {username},
                {email}
            ]
        }
    )
    if(existingUser){
        return res.status(409).json({ message: "User already exists!" });
    }
    const newhashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        displayname,
        email,
        hashedPassword: newhashedPassword,
        date,
    })
    const payload = {userId: user};
    const token = jwt.sign(payload,process.env.SECRET_KEY);
    res.cookie("token", token , {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30*24*60*60*1000,
    })
    const {hashedPassword, ...details} = user.toObject();
    res.status(201).json(details)
}
export const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "All fields are required!!"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message: "User not Find"})
    }
    const isCorrect = await bcrypt.compare(password, user.hashedPassword);
    if(!isCorrect){
        return res.status(404).json({message: "Wrong Password"})
    }
    const payload = {userId: user};
    const token = jwt.sign(payload,process.env.SECRET_KEY);
    res.cookie("token", token , {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30*24*60*60*1000,
    })
    const {hashedPassword, ...details} = user.toObject();
    res.status(200).json(details); 
}
export const logoutUser = async (req,res)=>{
    res.clearCookie("token");
    res.status(200).json({message: "Logout Succesfull"});
}