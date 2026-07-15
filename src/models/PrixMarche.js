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
  marche: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
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
}, {
  tableName: "prix_marches",
  timestamps: true,
});

export default PrixMarche;