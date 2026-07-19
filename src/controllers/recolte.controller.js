import RecolteServes from "../services/recolte.service.js"


class RecolteControle{
    getAll = async(req, res) => {
        try{
            const data = await RecolteServes.selectProdiutAll();
            if(!data) return res.status(404).json({message: "data not fond"})
            res.status(201).json(data)
        }catch(error){
            return res.status(500).json({message : "server error"})
        }
    };

    setData = async(res, req) => {
        const result = await RecolteServes.addProduit();
        if(!result) return res.status(500).json({message :  "server error"})
        res.status(201).json({message : "data is sets"})
    };
    
    getById = async(res, req) => {
        const id = req.params.id;
        const data = RecolteServes.getProduitById(id);
        if(!data) return res.status(404).json({message : "data not fond"});
        res.status(201).json(data)
    };

    delete = async(req, res) =>{
        try{
            const id = req.params.id;
            const deleResult = await RecolteServes.deleteProduitById(id);
            if(!deleResult) return res.status(401).json({message :  "delete is not "})
            return res.status(201).json({message : `deleted ${id}`})
        }catch(erorr){
            console.log(erorr);
            return res.status(500).json({message : "server error"})
        }
    };

    update = async(req, res) => {
        try{
            const id = req.params.id;
            const userData = await RecolteServes.updateProduitById(id, req.body);
            return res.status(userData.status).json({message : userData.message})
        }catch(error){
            return res.status(500).json({message : "Server Error"})
        }
    }
}

export default new RecolteControle();