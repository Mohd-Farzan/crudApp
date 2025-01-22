import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
       
    },
    mobile:{
        type:Number
    },
    Age:{
        type:Number
    },
    gander:{
        type:String
    },
    password:{
        type:String
    },
},{timestamps:true})

const signupModel=mongoose.model('signup',userSchema)

export default signupModel