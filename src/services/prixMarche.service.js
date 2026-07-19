import PrixMarche from "../models/PrixMarche.js";

class PrixMarcheServes{

    selectPrixAll = async()=>{
        const data = await PrixMarche.findAll();
        if(data.length===0) return false;
        return data;
    }

    addPrix = async(data)=>{
        try{
            await PrixMarche.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getPrixById = async(id)=>{
        try{
            const data = await PrixMarche.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updatePrixById = async(id,newData)=>{
        try{
            const data = await PrixMarche.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deletePrixById = async(id)=>{
        try{
            await PrixMarche.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new PrixMarcheServes();