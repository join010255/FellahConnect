import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const PrixMarche = sequelize.define("PrixMarche", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  produitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  marcheId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "marches",
      key: "id",
    },
  },

}, {
  tableName: "prix_marches",
  timestamps: true,
});

export default PrixMarche;