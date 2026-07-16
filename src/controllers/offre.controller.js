import Offre from "../models/Offre.js";
export const createOffre = async (req ,res)=>{
    try {
        // const offre = await Offre .create(req.body);
        res.status(201).json({message:"Offre créée avec succès"

        });
    }catch (error){
        res.status(500).json({message:error.message})
    }
};

export const getAllOffres = async (req, res) => {
  try {
    // const offres = await Offre.findAll();

    res.status(200).json(offres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOffres = async (req, res) => {
  try {
    // const offres = await Offre.findAll();

    res.status(200).json(offres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOffreById = async (req, res) => {
  try {
    // const offre = await Offre.findByPk(req.params.id);

    if (!offre) {
      return res.status(404).json({
        message: "Offre introuvable",
      });
    }

    res.status(200).json(offre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOffre = async (req, res) => {
  try {
    // const offre = await Offre.findByPk(req.params.id);

    if (!offre) {
      return res.status(404).json({
        message: "Offre introuvable",
      });
    }

    await offre.update(req.body);

    res.status(200).json({
      message: "Offre mise à jour avec succès",
      offre,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteOffre = async (req, res) => {
  try {
    // const offre = await Offre.findByPk(req.params.id);

    if (!offre) {
      return res.status(404).json({
        message: "Offre introuvable",
      });
    }

    await offre.destroy();

    res.status(200).json({
      message: "Offre supprimée avec succès",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};