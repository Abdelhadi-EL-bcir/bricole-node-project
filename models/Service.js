import mongoose from "mongoose";
const ServicSchema = new mongoose.Schema({
    title  :{
        type : String , 
        required :true
    } 
}) 

export default mongoose.model("Service" , ServicSchema);