import express from "express";
import MarcheControle from "../controllers/marche.controller.js";

const routerMarche = express.Router();

routerMarche.post("/", MarcheControle.setData);
routerMarche.get("/", MarcheControle.getAll);
routerMarche.get("/:id", MarcheControle.getById);
routerMarche.put("/:id", MarcheControle.update);
routerMarche.delete("/:id", MarcheControle.delete);

// Relation
// routerMarche.get("/:id/prix", getPrixMarche);

export default routerMarche;