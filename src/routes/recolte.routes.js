import express from 'express';
import { 
  createRecolte, 
  getAllRecoltes, 
  getRecolteById, 
  updateRecolte, 
  deleteRecolte 
} from '../controllers/recolte.controller.js';

const router = express.Router();

router.post('/', createRecolte);
router.get('/', getAllRecoltes);
router.get('/:id', getRecolteById);
router.put('/:id', updateRecolte);
router.delete('/:id', deleteRecolte);

export default router;
