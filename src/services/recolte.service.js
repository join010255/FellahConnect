import Recolte from "../models/Recolte.js";

class RecolteServes{

    selectRecolteAll = async()=>{
        const data = await Recolte.findAll({
            include: ""
        });
        if(data.length===0) return false;
        return data;
    }

    addRecolte = async(data)=>{
        try{
            await Recolte.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getRecolteById = async(id)=>{
        try{
            const data = await Recolte.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updateRecolteById = async(id,newData)=>{
        try{
            const data = await Recolte.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deleteRecolteById = async(id)=>{
        try{
            await Recolte.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new RecolteServes();