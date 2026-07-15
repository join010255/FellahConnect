import sequelize from "../config/database";
import { DataTypes } from "sequelize";



const Agriculteur = sequelize.define("Agriculteur", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    unique: true,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  commune: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "agriculteurs",
  timestamps: true,
});