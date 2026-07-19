import User from "../models/User.js";


// check role
export const authorize = async(...roles) => {
    return async(req, res, next) => {
        try{
            const dataUserFromReq = req.body.user

            const resultUserData = await User.findByPk(dataUserFromReq.id);
            if(!resultUserData) return res.status(404).json({message : "user not found"});
            
            if(!roles.includes(resultUserData.role)){
                return res.status(403).json({message : "Access denied"})
            }
            next()
            
        }catch(error){
            console.log(error);
            res.status(500).json({message : "Server Erorr"})
        }
    }
    
}