import ProduitControle from "../services/produit.service.js"


class ProduitControle{
    getAll = async(req, res) => {
        try{
            const data = await ProduitControle.selectProdiutAll();
            if(!data) return res.status(404).json({message: "data not fond"})
            res.status(201).json(data)
        }catch(error){
            return res.status(500).json({message : "server error"})
        }
    };

    setData = async(res, req) => {
        const result = await ProduitControle.addProduit();
        if(!result) return res.status(500).json({message :  "server error"})
        res.status(201).json({message : "data is sets"})
    };
    
    getById = async(res, req) => {
        const id = req.params.id;
        const data = ProduitControle.getProduitById(id);
        if(!data) return res.status(404).json({message : "data not fond"});
        res.status(201).json()
    }
}