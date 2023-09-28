import mongoose from "mongoose";
const TypeSchema = new mongoose.Schema({
    comment  :{
        type : String , 
        required :true
    } , 
    ratting : {
        type : number , 
    } , 

}) 

export default mongoose.model("Type" , TypeSchema);