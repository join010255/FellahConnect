import User from "../models/User.js";
import BcryptMethode from "../utils/bcrypt.js"
import ganerateToken from "../utils/jwt.js";
import { Op } from "sequelize";


class UserServies {
        login = async(login, password) => {
            try{
                const userData = await User.findOne({
                    where : {
                        [Op.or] : [{username : login}, {email: login}] 
                    }
                });
                
                if(!userData) return {
                    status: 401,
                    message: "Invalid username/email or password"
                }

                const validationPassword = await BcryptMethode.comparePassword(userData.password, password)
                if(!validationPassword) return {
                    status : 401,
                    message: "Invalid username or password"
                }

                const jsonWebToken = await ganerateToken()
                return jsonWebToken
                
            }catch(erorr){
                console.log(erorr);
                return {
                    status : 500,
                    message : "Server Error"
                }
            }
        }
    regester = async(username, email, password, role) => {
        try{
            const checkEmailAndUsername = await User.findOne({
                where : {
                    [Op.or] : [{username : username}, {email: email}] 
                }
            });

            if(checkEmailAndUsername) return {
                status : 409,
                message:  "Email Or Username already exists"
            }

            const passwordHa = await BcryptMethode.hashPassword(password);
            if(!passwordHa) return {
                status : 500,
                message : "Internal server error"
            }

            await User.create({
                username: username,
                email: email,
                password : passwordHa,
                role: role
            });

            return {
                status : 201,
                message : "User registered successfully"
            };
        }catch(error){
            console.log(error);
            return {
                status : 500,
                message : "Internal server error"
            };
        }
    }

}

export default new UserServies();