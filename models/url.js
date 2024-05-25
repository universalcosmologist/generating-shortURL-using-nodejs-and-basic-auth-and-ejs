const mongoose=require('mongoose');

const UrlSchema =new mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    viewHistory:[
        {
            timeStamp:{
                type:Number,
            }
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
},
{ timestamps:true }
);

const Url=mongoose.model('URL',UrlSchema);

module.exports=Url;