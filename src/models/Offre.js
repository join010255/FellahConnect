const OffreVente = sequelize.define("OffreVente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantite: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM(
      "en_attente",
      "active",
      "vendue",
      "annulee"
    ),
    allowNull: false,
    defaultValue: "active",
  },
  recolteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "offres_vente",
  timestamps: true,
});

export default OffreVente;