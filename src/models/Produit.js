import sequelize from "../config/database";
import { DataTypes } from "sequelize";


const Produit = sequelize.define("Produit", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  unite: {
    type: DataTypes.ENUM("kg", "tonne", "litre"),
    allowNull: false,
  },
  categorie: {
    type: DataTypes.STRING,
  },
}, {
  tableName: "produits",
  timestamps: true,
});