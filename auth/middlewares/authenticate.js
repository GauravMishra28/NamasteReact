const jwt= require("jsonwebtoken")
require("dotenv").config()
const secret_key= process.env.SECRET_KEY

const authenticate=(req,res,next)=>{
    const token= req.headers.authorization
    if(token)
    {
        const decoded_token=jwt.verify(token,secret_key)
        if(decoded_token)
        { 
            // console.log(decoded_token);
            const userID= decoded_token.userID
            req.body.userID=userID
            next()
        }
        else{
            res.send("Please Login first")
        }
    }else{
        res.send("Please Login first")
    }
}

module.exports={
    authenticate
}