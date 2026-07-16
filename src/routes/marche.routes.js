import express from 'express';
import { createMarche, getAllMarches, getMarcheById, updateMarche, deleteMarche } from '../controllers/marche.controller.js';

const router = express.Router();

router.post('/', createMarche);
router.get('/', getAllMarches);
router.get('/:id', getMarcheById);
router.put('/:id', updateMarche);
router.delete('/:id', deleteMarche);

export default router;
