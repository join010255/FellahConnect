import express from "express";
import ParcelleServes from "../controllers/parcelle.controller.js";

const routerParcelle = express.Router();

routerParcelle.post("/", ParcelleServes.setData);
routerParcelle.get("/", ParcelleServes.getAll);
routerParcelle.get("/:id", ParcelleServes.getById);
routerParcelle.put("/:id", ParcelleServes.update);
routerParcelle.delete("/:id", ParcelleServes.delete);

// Relation
// routerParcelle.get("/:id/recoltes", getRecoltesByParcelle);

export default routerParcelle;