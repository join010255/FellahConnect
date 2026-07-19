// han radi i kon executor l ai tools


import express from "express";
import AgriculteurControle from "../controllers/agriculteur.controller.js";

const routesAgricul = express.Router();

routesAgricul.post("/", AgriculteurControle.setData);
routesAgricul.get("/", AgriculteurControle.getAll);
routesAgricul.get("/:id", AgriculteurControle.getById);
routesAgricul.put("/:id", AgriculteurControle.update);
routesAgricul.delete("/:id", AgriculteurControle.delete);

// Relation
// router.get("/:id/parcelles", getParcellesByAgriculteur);

export default routesAgricul;