var mongoose=require("mongoose")

const postModel=mongoose.Schema(
    {
        heading:{type:String,require:true},
        subheading:{type:String},
        content:{type:String,require:true},
        language:{type:String,require:true},
        relatedpostes:{type:Array,default:[]},
        writer:{type:String,default:"Bharat Jangir"}
    },
    {
        timestamps:true
    }
)

const Post=mongoose.model("Post",postModel)
module.exports=Post