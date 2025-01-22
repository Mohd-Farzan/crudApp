import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String
       
    },
    Age:{
        type:Number
    },
    email:{
        type:String
    },
    mbl:{
        type:Number
    },
},{timestamps:true})

const UserModel=mongoose.model('user',userSchema)

export default UserModel