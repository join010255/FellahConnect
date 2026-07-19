import OffreVente from "../models/OffreVente.js";

class OffreVenteServies{

    selectOffreAll = async()=>{
        const data = await OffreVente.findAll();
        if(data.length===0) return false;
        return data;
    }

    addOffre = async(data)=>{
        try{
            await OffreVente.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getOffreById = async(id)=>{
        try{
            const data = await OffreVente.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updateOffreById = async(id,newData)=>{
        try{
            const data = await OffreVente.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deleteOffreById = async(id)=>{
        try{
            await OffreVente.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new OffreVenteServies();