import { Recolte, Parcelle, Produit } from '../models/index.js';

export const createRecolte = async (req, res, next) => {
  try {
    const { quantite, dateRecolte, parcelleId, produitId } = req.body;
    
    if (!quantite || !parcelleId || !produitId) {
      return res.status(400).json({ message: "La quantité, parcelleId et produitId sont obligatoires." });
    }

    const newRecolte = await Recolte.create({
      quantite,
      dateRecolte: dateRecolte || new Date(),
      parcelleId,
      produitId
    });

    return res.status(201).json(newRecolte);
  } catch (error) {
    next(error);
  }
};

export const getAllRecoltes = async (req, res, next) => {
  try {
    const recoltes = await Recolte.findAll({
      include: [
        { model: Parcelle, attributes: ['nom', 'surface'] },
        { model: Produit, attributes: ['nom', 'categorie'] }
      ]
    });
    return res.status(200).json(recoltes);
  } catch (error) {
    next(error);
  }
};

export const getRecolteById = async (req, res, next) => {
  try {
    const recolte = await Recolte.findByPk(req.params.id, {
      include: [
        { model: Parcelle, attributes: ['nom', 'surface'] },
        { model: Produit, attributes: ['nom', 'categorie'] }
      ]
    });

    if (!recolte) {
      return res.status(404).json({ message: "Récolte non trouvée." });
    }

    return res.status(200).json(recolte);
  } catch (error) {
    next(error);
  }
};

export const updateRecolte = async (req, res, next) => {
  try {
    const recolte = await Recolte.findByPk(req.params.id);
    if (!recolte) {
      return res.status(404).json({ message: "Récolte non trouvée." });
    }

    await recolte.update(req.body);
    return res.status(200).json(recolte);
  } catch (error) {
    next(error);
  }
};

export const deleteRecolte = async (req, res, next) => {
  try {
    const recolte = await Recolte.findByPk(req.params.id);
    if (!recolte) {
      return res.status(404).json({ message: "Récolte non trouvée." });
    }

    await recolte.destroy();
    return res.status(200).json({ message: "Récolte supprimée avec succès." });
  } catch (error) {
    next(error);
  }
};
