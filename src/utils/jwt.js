import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ganerateToken = (userData) => {
    try{
        const acessToken = jwt.sign(
            {
                id: userData.id
            },
            process.env.ACESS_TOKEN_SECRYT_KEY,
            {
                expiresIn: '1h'
            }
        );

        const refreshToken = jwt.sign(
            {
                id :userData.id
            },
            process.env.REFREASH_TOKEN,
            {
                expiresIn: "7d"
            }
        );

        return {
            status : 201,
            message : {
                acess_token : acessToken,
                refresh_token : refreshToken
            } 
        }
    }catch(erorr){
        console.log(erorr);
        return {
            status : 500,
            message : "Server Error" 
        }
    }
}


export default ganerateToken;