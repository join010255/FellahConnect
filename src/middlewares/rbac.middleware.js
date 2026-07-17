export function checkRole(...rolesAutorises) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentification requise',
      });
    }
 
    if (!rolesAutorises.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Accès refusé : rôle '${req.user.role}' non autorisé pour cette action`,
      });
    }
 
    next();
  };
}
 

export function checkOwnerOrAdmin(getOwnerId) {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentification requise',
        });
      }
 
      if (req.user.role === 'admin') {
        return next();
      }
 
      const ownerId = await getOwnerId(req);
 
      if (ownerId !== req.user.agriculteurId) {
        return res.status(403).json({
          success: false,
          message: "Accès refusé : cette ressource ne vous appartient pas",
        });
      }
 
      next();
    } catch (err) {
      next(err);
    }
  };
}