
export function notFoundMiddleware(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Route non trouvée : ${req.method} ${req.originalUrl}`,
  });
}

export function errorMiddleware(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Erreur interne du serveur';
  let details;

  //  Erreurs de validation Sequelize 
  if (err.name === 'SequelizeValidationError') {
    statusCode = 400;
    message = 'Données invalides';
    details = err.errors.map((e) => ({
      champ: e.path,
      raison: e.message,
    }));
  }

  // --- Contrainte unique violée (ex: email déjà utilisé) ---
  if (err.name === 'SequelizeUniqueConstraintError') {
    statusCode = 400;
    message = 'Cette valeur existe déjà';
    details = err.errors.map((e) => ({
      champ: e.path,
      raison: e.message,
    }));
  }

  // --- Clé étrangère invalide (ex: produit_id inexistant) ---
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    statusCode = 400;
    message = "Référence invalide : l'entité liée n'existe pas";
  }

  // --- JWT ---
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Token invalide';
  }
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expiré, veuillez vous reconnecter';
  }

  // --- ID mal formé (ex: /recoltes/abc au lieu d'un entier) ---
  if (err.name === 'SequelizeDatabaseError' && err.message?.includes('invalid input syntax')) {
    statusCode = 400;
    message = 'Identifiant invalide';
  }

  // Log complet côté serveur uniquement (jamais renvoyé au client en prod)
  if (statusCode === 500) {
    console.error('[ERREUR NON GÉRÉE]', err);
  }

  const payload = {
    success: false,
    message,
  };

  if (details) payload.details = details;

  // Stack trace uniquement en dev, jamais en production
  if (process.env.NODE_ENV !== 'production' && statusCode === 500) {
    payload.stack = err.stack;
  }

  res.status(statusCode).json(payload);
}