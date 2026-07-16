import express from "express";
import sequelize from "./config/db.js";
import offreRoutes from "./routes/offre.routes.js";//import 

const app = express();

app.use(express.json());             
app.use("/api/offres", offreRoutes);   //add Offre CRUD API (model, controller, routes)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});