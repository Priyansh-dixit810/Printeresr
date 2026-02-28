import mongoose, { Schema } from "mongoose";

const SaveSchema = new Schema({
    pin:{
        type: Schema.Types.ObjectId,
        ref: "Pin",
    },
    user:{
        type: [Schema.Types.ObjectId],
        ref: "User",
    },
    
})

const Save  = new mongoose.model("Save",SaveSchema);

export default Save;