import Parcelle from "../models/Parcelle.js";

class ParcelleControle{

    selectParcelleAll = async()=>{
        const data = await Parcelle.findAll();
        if(data.length===0) return false;
        return data;
    }

    addParcelle = async(data)=>{
        try{
            await Parcelle.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getParcelleById = async(id)=>{
        try{
            const data = await Parcelle.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updateParcelleById = async(id,newData)=>{
        try{
            const data = await Parcelle.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deleteParcelleById = async(id)=>{
        try{
            await Parcelle.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new ParcelleControle();