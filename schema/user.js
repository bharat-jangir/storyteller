const mongoose=require("mongoose");


const userModel=mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},        
    },
    {
        timestamps:true
    }
)

const User=mongoose.model("User",userModel)
module.exports=User