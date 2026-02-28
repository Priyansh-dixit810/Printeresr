import Comment from "../models/comment.m.js"

export const commentinfo = (async (req,res)=>{
    const {postId} = req.params;
    const comments = await Comment.find({pin: postId}).populate("user","displayname username img").sort({createdAt: -1});
    res.status(200).json(comments);
})
export const addcomment = (async (req,res)=>{
    const {description,pinId} = req.body;
    const userId = req.userId;
    const comment = await Comment.create({description,pin: pinId,user: userId})
    res.status(201).json({message: comment});
})