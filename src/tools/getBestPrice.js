import PrixMarche from "../models/PrixMarche.js";
import Marche from "../models/Marche.js";

export const getBestPrice = async(id) =>{
    try{
        const dataResult = await PrixMarche.findOne({
            where: { produitId: id },
            include : [
                {
                    model: Marche,
                    attributes: ["id", "nom", "ville"]
                }
            ],
            order : [["prix", "DESC"]],
            limit: 1
        });

        if(dataResult.length === 0) return null;

        return dataResult;
    }catch(error){
        console.log(error);
        return false
    }
}