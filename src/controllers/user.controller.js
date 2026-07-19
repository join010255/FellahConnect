import UserServies from "../services/user.service.js";


class UserMethod{
    login = async(req, res) => {
        try{
            const {login, password} = req.body;
            const loginResult = await UserServies.login(login, password)
            res.status(loginResult.status).json({message : loginResult.message})
        }catch(error){
            return res.status(500).json({message : "Server Erorr"})
        }
    };
    register = async(req, res) => {
        try{
            const {username, email, password, role} = req.body;
            const registerResult = await UserServies.regester(username, email, password, role);
            res.status(registerResult.status).json({message : registerResult.message})
        }catch(error){
            return res.status(500).json({message : "Server Erorr"})
        }
    }
}

export default new UserMethod();