import sequelize from "../config/database";
import { DataTypes } from "sequelize";


const Parcelle = sequelize.define("Parcelle", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  superficie: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  agriculteurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "parcelles",
  timestamps: true,
});