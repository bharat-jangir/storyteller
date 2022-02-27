var express=require("express")
const User = require("../schema/user")
var router=express.Router()
var bcrypt=require("bcrypt")
var jwt=require("jsonwebtoken")
/////generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY)
}

router.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
    
        var user=await User.findOne({email:email})
        var comparedPassowrd=await bcrypt.compare(password,user.password)
    
        var token=await generateToken(user._id)
    
        if(user && comparedPassowrd){
            res.status(200).json(
                {
                    name:user.name,
                    token:token
                }
            )
        }
        
    } catch (error) {
        
    }




    
})

router.post("/signup",async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const user =await User.findOne({email:email})

        if (user) {
            res.status(500).send(
                "user already exeist"
            )
            
        } else {
            const encrypted = await bcrypt.hash(password, 10)
            console.log(encrypted);
    
            const user= await new User({
                name:name,
                email:email,
                password:encrypted
            })
            user.save()
            res.status(201).json(user)
            
        }
    
        
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router