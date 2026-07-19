import express from "express";
import PrixMarcheControle from "../controllers/prixMarche.controller.js";

const routerPrix = express.Router();

routerPrix.post("/", PrixMarcheControle.setData);
routerPrix.get("/", PrixMarcheControle.getAll);
routerPrix.get("/:id", PrixMarcheControle.getById);
routerPrix.put("/:id", PrixMarcheControle.update);
routerPrix.delete("/:id", PrixMarcheControle.delete);

export default routerPrix;