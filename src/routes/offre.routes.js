import express from "express";
import {
  createOffre,
  getAllOffres,
  getOffreById,
  updateOffre,
  deleteOffre,
} from "../controllers/offreController.js";

const router = express.Router();

router.post("/", createOffre);
router.get("/", getAllOffres);
router.get("/:id", getOffreById);
router.put("/:id", updateOffre);
router.delete("/:id", deleteOffre);

export default router;