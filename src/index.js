//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB;










// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
//First approach
// import express from "express"

// ( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("erroror",(error)=>{
//             console.log("ERROR : ",error);
//             throw error
//         })
        
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.POST}`)
//         })
//     }catch (error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()