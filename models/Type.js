import mongoose from "mongoose";
const TypeSchema = new mongoose.Schema({
    name  :{
        type : String , 
        required :true
    } , 
    servics : {
        type : [String] , 
    }
}) 

export default mongoose.model("Type" , TypeSchema);