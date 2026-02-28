import express from 'express';
import userRouter from './routes/user.r.js'
import boardRouter from "./routes/board.r.js"
import commentRouter from "./routes/comment.r.js"
import pinRouter from "./routes/pin.r.js"
import connectDB from './utils/connectDB.js';
import cors from "cors"
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser()) 

app.use(cors({origin:process.env.CLIENT_URL,credentials: true}))

//users
app.use("/users" ,userRouter)
//boards
app.use("/board" ,boardRouter)
//comments
app.use("/comment" ,commentRouter)
//pin
app.use("/pin" ,pinRouter)

app.listen(3002, ()=>{
    connectDB();
    console.log("Listening")
})
console.log("CLIENT_URL =", process.env.CLIENT_URL);
