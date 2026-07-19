import express from "express";
import RecolteControle from "../controllers/recolte.controller.js";

const routerRecolt = express.Router();

routerRecolt.post("/", RecolteControle.setData);
routerRecolt.get("/", RecolteControle.getAll);
routerRecolt.get("/:id", RecolteControle.getById);
routerRecolt.put("/:id", RecolteControle.update);
routerRecolt.delete("/:id", RecolteControle.delete);

export default routerRecolt;