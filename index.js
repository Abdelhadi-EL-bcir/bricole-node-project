import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import serviceRoute from "./routes/service.js";
const app = express();
dotenv.config();
const connection = async ()=>{
    try {
         mongoose.connect("mongodb://localhost:27017/bricoly");
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

app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/user" , userRoute);
app.use("/api/service" , serviceRoute);

app.listen(8081, () => {
    connection();
    console.log('listen on port 8081...');
});


