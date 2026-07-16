import { PrixMarche, Marche, Produit } from '../models/index.js';

export const createPrixMarche = async (req, res, next) => {
  try {
    const { prix, dateReleve, produitId, marcheId } = req.body;
    if (!prix || !produitId || !marcheId) {
      return res.status(400).json({ message: "Le prix, produitId et marcheId sont requis." });
    }
    const newPrix = await PrixMarche.create({ prix, dateReleve, produitId, marcheId });
    return res.status(201).json(newPrix);
  } catch (error) {
    next(error);
  }
};

export const getAllPrix = async (req, res, next) => {
  try {
    const prixList = await PrixMarche.findAll({
      include: [Marche, Produit]
    });
    return res.status(200).json(prixList);
  } catch (error) {
    next(error);
  }
};

export const getPrixById = async (req, res, next) => {
  try {
    const prix = await PrixMarche.findByPk(req.params.id, { include: [Marche, Produit] });
    if (!prix) return res.status(404).json({ message: "Prix non trouvé." });
    return res.status(200).json(prix);
  } catch (error) {
    next(error);
  }
};

export const updatePrixMarche = async (req, res, next) => {
  try {
    const prix = await PrixMarche.findByPk(req.params.id);
    if (!prix) return res.status(404).json({ message: "Prix non trouvé." });
    await prix.update(req.body);
    return res.status(200).json(prix);
  } catch (error) {
    next(error);
  }
};

export const deletePrixMarche = async (req, res, next) => {
  try {
    const prix = await PrixMarche.findByPk(req.params.id);
    if (!prix) return res.status(404).json({ message: "Prix non trouvé." });
    await prix.destroy();
    return res.status(200).json({ message: "Prix supprimé." });
  } catch (error) {
    next(error);
  }
};


export const getMeilleurPrix = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const meilleursPrix = await PrixMarche.findAll({
      where: { produitId: id },
      include: [{ model: Marche, attributes: ['nom', 'region', 'ville'] }],
      order: [['prix', 'DESC']], 
      limit: 5
    });

    if (meilleursPrix.length === 0) {
      return res.status(404).json({ message: "Aucun prix trouvé pour ce produit." });
    }

    return res.status(200).json(meilleursPrix);
  } catch (error) {
    next(error);
  }
};