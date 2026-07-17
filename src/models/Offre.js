import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const Recolte = sequelize.define(
  "Recolte",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantite: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dateRecolte: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    parcelleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    produitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "recoltes",
    timestamps: true,
  }
);

export default Recolte;