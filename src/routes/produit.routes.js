import express from "express";
import ProduitControle from "../controllers/produit.controller.js";

const router = express.Router();

router.post("/", ProduitControle.setData);
router.get("/", ProduitControle.getAll);
router.get("/:id", ProduitControle.getById);
router.put("/:id", ProduitControle.update);
router.delete("/:id", ProduitControle.delete);

// Relations
// router.get("/:id/prix", getPrixProduit);
// router.get("/:id/meilleur-prix", getMeilleurPrix);

export default router;