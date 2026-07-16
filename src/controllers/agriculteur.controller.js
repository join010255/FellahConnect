import { User, Parcelle } from '../models/index.js';


export const getAgriculteurParcelles = async (req, res, next) => {
  try {
    const { id } = req.params;

    
    const agriculteur = await User.findByPk(id, {
      attributes: ['id', 'nom', 'email', 'role'], 
      include: [{
        model: Parcelle,
        attributes: ['id', 'nom', 'surface', 'cultureActuelle'] 
      }]
    });

    if (!agriculteur) {
      return res.status(404).json({ message: "Agriculteur non trouvé." });
    }

    return res.status(200).json(agriculteur);
  } catch (error) {
    next(error);
  }
};
