import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Offre = sequelize.define("Offre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  recolteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  marcheId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  prixPropose: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  quantite: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  statut: {
    type: DataTypes.ENUM("Disponible", "Vendue", "Annulee"),
    defaultValue: "Disponible",
  },
});

export default Offre;