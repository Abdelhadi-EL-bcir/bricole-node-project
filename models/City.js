import mongoose from "mongoose";
const CitySchema = new mongoose.Schema({
    name  :{
        type : String , 
        required :true
    } , 
    servics : {
        type : [String] , 
    }
}) 

export default mongoose.model("city" , CitySchema);