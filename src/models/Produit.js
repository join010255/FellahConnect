import Fournisseur from "./Fournisseur";

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
  fournisseurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "produits",
  timestamps: true,
});