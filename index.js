import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import serviceRoute from "./routes/service.js";
import cityRoute from "./routes/city.js";
import typeRoute from "./routes/type.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
const connection = async ()=>{
    try {
         mongoose.connect(process.env.MONGO);
         console.log('Connected to mongoDB');
    } catch (error) {
        throw error ; 
    }
}

mongoose.connection.on('disconnected' , ()=>{
    console.log('mongoDB disconnected !')
})

mongoose.connection.on('connected' , ()=>{
    console.log('mongoDB connected !')
})

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/user" , userRoute);
app.use("/api/service" , serviceRoute);
app.use("/api/city" , cityRoute);
app.use("/api/type" , typeRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500 ; 
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success : false , 
        status:errorStatus,
        message:errorMessage,
        stack : err.stack
    })
})

app.listen(8081, () => {
    connection();
    console.log('listen on port 8081...');
});


