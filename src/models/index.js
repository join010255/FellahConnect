import User from "./User.js";
import Agriculteur from "./Agriculteur.js";
import Parcelle from "./Parcelle.js";
import Recolte from "./Recolte.js";
import PrixMarche from "./PrixMarche.js";
import OffreVente from "./Offre.js";
import Produit from "./Produit.js";


// =========================
// User <-> Agriculteur
// 1 : 1
// =========================
User.hasOne(Agriculteur, {
  foreignKey: "userId",
});

Agriculteur.belongsTo(User, {
  foreignKey: "userId",
});

// =========================
// Agriculteur <-> Parcelle
// 1 : N
// =========================
Agriculteur.hasMany(Parcelle, {
  foreignKey: "agriculteurId",
});

Parcelle.belongsTo(Agriculteur, {
  foreignKey: "agriculteurId",
});

// =========================
// Parcelle <-> Recolte
// 1 : N
// =========================
Parcelle.hasMany(Recolte, {
  foreignKey: "parcelleId",
});

Recolte.belongsTo(Parcelle, {
  foreignKey: "parcelleId",
});

// =========================
// Produit <-> Recolte
// 1 : N
// =========================
Produit.hasMany(Recolte, {
  foreignKey: "produitId",
});

Recolte.belongsTo(Produit, {
  foreignKey: "produitId",
});

// =========================
// Recolte <-> OffreVente
// 1 : N
// =========================
Recolte.hasMany(OffreVente, {
  foreignKey: "recolteId",
});

OffreVente.belongsTo(Recolte, {
  foreignKey: "recolteId",
});

// =========================
// Produit <-> PrixMarche
// 1 : N
// =========================
Produit.hasMany(PrixMarche, {
  foreignKey: "produitId",
});

PrixMarche.belongsTo(Produit, {
  foreignKey: "produitId",
});