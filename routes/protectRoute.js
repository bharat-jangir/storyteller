const jwt=require('jsonwebtoken');
const User=require("../schema/user")
const protectUser=async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token=req.headers.authorization.split(" ")[1]


            // decode token
            const decoded= await jwt.verify(token,process.env.SECRET_KEY)
            req.user=await User.findById(decoded.id).select("-password");
            next()
        }catch(error){
            res.send(401);
            throw new Error("Not authorized, token faild")

        }

         if(!token){
        res.status(401)
        throw new Error("Token Not Present")
    }
    }
   
}

module.exports=protectUser