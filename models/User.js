import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    
    username : {
        type : String , 
        required :true , 
        unique : true
    } ,
    email : {
        type : String , 
        required :true,
        unique : true
    },
    password : {
        type : String , 
        required : true
    },
    tele : {
        type : String , 
        required :true
    } ,
    address : {
        type : String , 
        required :true
    } ,
    about : {
        type : String , 
    } ,
    facebook : {
        type : String , 
    } ,
    linkedin : {
        type : String , 
    } ,
    website : {
        type : String , 
    } ,
    firstname  :{
        type : String , 
        required :true
    } , 
    lastname : {
        type : String , 
        required :true
    } , 
    isAdmin : {
        type : Boolean , 
        default : false
    },
    servics : {
       type : [String]
    } , 
    reviews  :{
        type : [String]
    }

} , {timestamps : true }) 

export default mongoose.model("User" , UserSchema);
