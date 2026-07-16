import { Marche } from '../models/index.js';

export const createMarche = async (req, res, next) => {
  try {
    const { nom, region, ville } = req.body;
    if (!nom || !region) {
      return res.status(400).json({ message: "Le nom et la région sont obligatoires." });
    }
    const marche = await Marche.create({ nom, region, ville });
    return res.status(201).json(marche);
  } catch (error) {
    next(error);
  }
};

export const getAllMarches = async (req, res, next) => {
  try {
    const marches = await Marche.findAll();
    return res.status(200).json(marches);
  } catch (error) {
    next(error);
  }
};

export const getMarcheById = async (req, res, next) => {
  try {
    const marche = await Marche.findByPk(req.params.id);
    if (!marche) return res.status(404).json({ message: "Marché non trouvé." });
    return res.status(200).json(marche);
  } catch (error) {
    next(error);
  }
};

export const updateMarche = async (req, res, next) => {
  try {
    const marche = await Marche.findByPk(req.params.id);
    if (!marche) return res.status(404).json({ message: "Marché non trouvé." });
    await marche.update(req.body);
    return res.status(200).json(marche);
  } catch (error) {
    next(error);
  }
};

export const deleteMarche = async (req, res, next) => {
  try {
    const marche = await Marche.findByPk(req.params.id);
    if (!marche) return res.status(404).json({ message: "Marché non trouvé." });
    await marche.destroy();
    return res.status(200).json({ message: "Marché supprimé." });
  } catch (error) {
    next(error);
  }
};