import Agriculteur from "../models/Agriculteur.js";

class AgriculteurControle{

    selectAgriculteurAll = async() =>{
        const data = await Agriculteur.findAll();
        if(data.length === 0) return false;
        return data;
    }

    addAgriculteur = async(data)=>{
        try{
            await Agriculteur.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getAgriculteurById = async(id)=>{
        try{
            const data = await Agriculteur.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updateAgriculteurById = async(id,newData)=>{
        try{
            const data = await Agriculteur.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deleteAgriculteurById = async(id)=>{
        try{
            await Agriculteur.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new AgriculteurControle();