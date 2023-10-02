import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema({
    comment  :{
        type : String , 
        required :true
    } , 
    ratting : {
        type : Number , 
    } , 

}) 

export default mongoose.model("Review" , ReviewSchema);