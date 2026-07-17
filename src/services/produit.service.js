import Produit from "../models/Produit.js";

class ProduitService{
    selectProdiutAll = async() => {
        const data = await Produit.findAll()
        if(data.length === 0) return false;
        return data;
    }

    addProduit = async(data) => {
        try{
            await Produit.create(data);
            return true
        }catch(error){
            return false
        }
    }

    getProduitById = async(id) => {
        try{
            const data = await Produit.findByPk(id);
            if(!data) return false;
            return data
        }catch(error){
            return false
        }
    }

    deleteProduitById = async(id) => {
        try{
            const dataCheck = await Produit.findByPk(id);
            if(!dataCheck) return false
            await Produit.destroy({
                where : {id: id}
            })
            return true;
        }catch(erorr){
            return false;
        }
    }

    updateProduitById = async(id, newData) => {
        try{
            const resultDataUpdates = await Produit.findByPk(id);
            if(!resultDataUpdates) return false;
            await resultDataUpdates.update(newData)
            return true
        }catch(error){
            console.log(error)
            return false
        }
    }
}

export default new ProduitService();