import express from "express";
import * as dotenv from "dotenv"
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoute from "./routes/postRoutes.js"
import dalleRoute from "./routes/dalle.route.js"
dotenv.config();
const app= express();
app.use(cors())
app.use(express.json({limit:'100mb'}))


app.get('/',async(req,res)=>{
    res.status(200).json({messege:"hello from DALL.E!"})
})



app.use('/api/v1/post',postRoute)
app.use('/api/v1/dalle',dalleRoute)

const serverStart=async()=>{

    try {
        connectDB(process.env.MONGO_URI)
        app.listen(8000,()=>{console.log(`server running on 8000 port`);})
    } catch (error) {
        console.log("failed to start server", err);
    }
}

serverStart()