import mongoose from "mongoose";
const ServicSchema = new mongoose.Schema({
    title  :{
        type : String , 
        required :true
    },
    price : {
      type : Number , 
      required : true 
    },
    descritption : {
      type : String , 
      required : true
    } , 
    tele : {
      type  : String , 
    } , 
    wts : {
      type : String , 
    } , 
    images : {
      type : [String]
    } , 
    reviews : {
      type : [String]
    }
} , {timestamps :true}) 

export default mongoose.model("Service" , ServicSchema);