import express from "express";

import routesUser from "./user.routes.js";
import agriculteurRoutes from "./agriculteur.routes.js";
import parcelleRoutes from "./parcelle.routes.js";
import produitRoutes from "./produit.routes.js";
import recolteRoutes from "./recolte.routes.js";
import marcheRoutes from "./marche.routes.js";
import prixMarcheRoutes from "./prixMarche.routes.js";
import offreRoutes from "./offre.routes.js";
import agentRoutes from "./agent.routes.js";

const allRouter = express.Router();

allRouter.use("/auth", routesUser);
allRouter.use("/agriculteurs", agriculteurRoutes);
allRouter.use("/parcelles", parcelleRoutes);
allRouter.use("/produits", produitRoutes);
allRouter.use("/recoltes", recolteRoutes);
allRouter.use("/marches", marcheRoutes);
allRouter.use("/prix-marche", prixMarcheRoutes);
allRouter.use("/offres", offreRoutes);
allRouter.use("/agent", agentRoutes);

export default allRouter;