import express from "express";
import OffreVenteServies from "../controllers/offre.controller.js";

const routerOffre = express.Router();

routerOffre.post("/", OffreVenteServies.setData);
routerOffre.get("/", OffreVenteServies.getAll);
routerOffre.get("/:id", OffreVenteServies.getById);
routerOffre.put("/:id", OffreVenteServies.update);
routerOffre.delete("/:id", OffreVenteServies.delete);

export default routerOffre;