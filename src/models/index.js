import Produit from "./Produit.js";
import Recolte from "./Recolte.js";
import PrixMarche from "./PrixMarche.js";
import Marche from "./Marche.js";
import OffreVente from "./OffreVente.js";
import Parcelle from "./Parcelle.js";
import Agriculteur from "./Agriculteur.js";
import User from "./User.js";

// User <-> Agriculteur
User.hasOne(Agriculteur, { foreignKey: "userId" });
Agriculteur.belongsTo(User, { foreignKey: "userId" });

// Agriculteur <-> Parcelle
Agriculteur.hasMany(Parcelle, { foreignKey: "agriculteurId" });
Parcelle.belongsTo(Agriculteur, { foreignKey: "agriculteurId" });

// Parcelle <-> Recolte
Parcelle.hasMany(Recolte, { foreignKey: "parcelleId" });
Recolte.belongsTo(Parcelle, { foreignKey: "parcelleId" });

// Produit <-> Recolte
Produit.hasMany(Recolte, { foreignKey: "produitId" });
Recolte.belongsTo(Produit, { foreignKey: "produitId" });

// Produit <-> PrixMarche
Produit.hasMany(PrixMarche, { foreignKey: "produitId" });
PrixMarche.belongsTo(Produit, { foreignKey: "produitId" });

// Marche <-> PrixMarche
Marche.hasMany(PrixMarche, { foreignKey: "marcheId" });
PrixMarche.belongsTo(Marche, { foreignKey: "marcheId" });

// Recolte <-> OffreVente
Recolte.hasMany(OffreVente, { foreignKey: "recolteId" });
OffreVente.belongsTo(Recolte, { foreignKey: "recolteId" });

// Marche <-> OffreVente
Marche.hasMany(OffreVente, { foreignKey: "marcheId" });
OffreVente.belongsTo(Marche, { foreignKey: "marcheId" });

export {
  User,
  Agriculteur,
  Parcelle,
  Produit,
  Recolte,
  Marche,
  PrixMarche,
  OffreVente,
};