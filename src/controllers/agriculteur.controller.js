import AgriculteurServers from "../services/agriculteur.service.js"


class AgriculteurControle{
    getAll = async(req, res) => {
        try{
            const data = await AgriculteurServers.selectProdiutAll();
            if(!data) return res.status(404).json({message: "data not fond"})
            res.status(201).json(data)
        }catch(error){
            return res.status(500).json({message : "server error"})
        }
    };

    setData = async(req, res) => {
        const result = await AgriculteurServers.addProduit(req.body);
        if(!result) return res.status(500).json({message :  "server error"})
        res.status(201).json({message : "data is sets"})
    };
    
    getById = async(req, res) => {
        const id = res.params.id;
        const data = AgriculteurServers.getProduitById(id);
        if(!data) return req.status(404).json({message : "data not fond"});
        req.status(201).json(data)
    };

    delete = async(req, res) =>{
        try{
            const id = req.params.id;
            const deleResult = await AgriculteurServers.deleteProduitById(id);
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
            const userData = await AgriculteurServers.updateProduitById(id, req.body);
            return res.status(userData.status).json({message : userData.message})
        }catch(error){
            return res.status(500).json({message : "Server Error"})
        }
    }
}

export default new AgriculteurControle();