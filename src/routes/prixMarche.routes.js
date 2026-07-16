import express from 'express';
import { createPrixMarche, getAllPrix, getPrixById, updatePrixMarche, deletePrixMarche, getMeilleurPrix } from '../controllers/prixMarche.controller.js';

const router = express.Router();

router.post('/', createPrixMarche);
router.get('/', getAllPrix);
router.get('/:id', getPrixById);
router.put('/:id', updatePrixMarche);
router.delete('/:id', deletePrixMarche);
router.get('/produit/:id/meilleur-prix', getMeilleurPrix);

export default router;
