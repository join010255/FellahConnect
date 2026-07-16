import express from 'express';
import { getAgriculteurParcelles } from '../controllers/agriculteur.controller.js';

const router = express.Router();

router.get('/:id/parcelles', getAgriculteurParcelles);

export default router;
