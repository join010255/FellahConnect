import Marche from "../models/Marche.js ";

class MarcheServres{

    selectMarcheAll = async()=>{
        const data = await Marche.findAll();
        if(data.length===0) return false;
        return data;
    }

    addMarche = async(data)=>{
        try{
            await Marche.create(data);
            return true;
        }catch(error){
            return false;
        }
    }

    getMarcheById = async(id)=>{
        try{
            const data = await Marche.findByPk(id);
            if(!data) return false;
            return data;
        }catch(error){
            return false;
        }
    }

    updateMarcheById = async(id,newData)=>{
        try{
            const data = await Marche.findByPk(id);
            if(!data) return false;
            await data.update(newData);
            return true;
        }catch(error){
            return false;
        }
    }

    deleteMarcheById = async(id)=>{
        try{
            await Marche.destroy({
                where:{id}
            });
            return true;
        }catch(error){
            return false;
        }
    }

}

export default new MarcheServres();