const mongoose=require('mongoose');

const User_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const User=mongoose.model('user',User_schema);

module.exports=User;