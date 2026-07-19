import Offre from "../models/Offre.js";


export const createOffre = async(dataBody) => {
    try{
        await Offre.create(dataBody);
        if(!)
    }catch(erorr){
        console.log(erorr);
        return false
    }
}