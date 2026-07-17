import User from "../models/User.js";
import hashPassword from "../utils/bcrypt.js" 
class UserControle {
    login = async(username, email, password) => {
      
    }
    regester = async(body) => {
        try{
            const userName = await User.findOne(body.username);
            if(userName) return false;
            const emailVa = await User.findOne(body.email);
            if(emailVa) return false;

            const passwordHa = await hashPassword(body.password);
            if(!passwordHa) return null;
            await User.create(body);
            return true;
        }catch(error){
            console.log(error);
            return false
        }
    }

}

export default new UserControle();