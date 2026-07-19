import dotenv from "dotenv";
import jwt from  "jsonwebtoken";

dotenv.config()

const authenticate = async(req, res, next) => {
    try{
        const token = req.headers.authorization
        if(!token) res.status(401).json({message: "Authentication token is missing"})
        const splitToken = token.split(" ")[1]
        const decode = await jwt.verify(splitToken, process.env.ACESS_TOKEN_SECRYT_KEY)
        req.user = decode
        next()
    }catch(error){
        console.log(error);
        // add refresh token 
    }
}