import mongoose from "mongoose";

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB")
    }catch(e){
        console.log("Database connection error", e);
    }
}
export default connectDB;