import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    displayname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    }
},{timestamps: true});

const User = mongoose.model('User',userSchema);
 
export default User;