import * as z from "zod";

/* ===========================
   AUTH
=========================== */

const registerSchema = z.object({
    username: z.string().min(3, "Username obligatoire"),
    email: z.string().email("Email invalide"),
    password: z.string().min(6, "Password min 6 caractères"),
    role: z.enum(["admin", "agriculteur"])
});

export const validationRegister = (req, res, next) => {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Validation Error",
            errors: result.error.errors
        });
    }

    next();
};

const loginSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(6)
});

export const validationLogin = (req, res, next) => {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Validation Error",
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   AGRICULTEUR
=========================== */

const agriculteurSchema = z.object({
    nom: z.string().min(2),
    prenom: z.string().min(2),
    telephone: z.string().min(10),
    region: z.string().min(2),
    adresse: z.string().min(5)
});

export const validationAgriculteur = (req, res, next) => {
    const result = agriculteurSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   PARCELLE
=========================== */

const parcelleSchema = z.object({
    agriculteurId: z.number().int(),
    nom: z.string().min(2),
    superficie: z.number().positive(),
    localisation: z.string().min(2)
});

export const validationParcelle = (req, res, next) => {
    const result = parcelleSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   PRODUIT
=========================== */

const produitSchema = z.object({
    nom: z.string().min(2),
    categorie: z.string().min(2),
    unite: z.enum(["kg", "tonne", "piece"])
});

export const validationProduit = (req, res, next) => {
    const result = produitSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   RECOLTE
=========================== */

const recolteSchema = z.object({
    parcelleId: z.number().int(),
    produitId: z.number().int(),
    quantite: z.number().positive(),
    dateRecolte: z.string().datetime()
});

export const validationRecolte = (req, res, next) => {
    const result = recolteSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   MARCHE
=========================== */

const marcheSchema = z.object({
    nom: z.string().min(2),
    ville: z.string().min(2)
});

export const validationMarche = (req, res, next) => {
    const result = marcheSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   PRIX MARCHE
=========================== */

const prixSchema = z.object({
    produitId: z.number().int(),
    marcheId: z.number().int(),
    prix: z.number().positive(),
    datePrix: z.string().datetime()
});

export const validationPrix = (req, res, next) => {
    const result = prixSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};

/* ===========================
   OFFRE
=========================== */

const offreSchema = z.object({
    recolteId: z.number().int(),
    prixPropose: z.number().positive(),
    statut: z.enum(["disponible", "vendu", "annule"])
});

export const validationOffre = (req, res, next) => {
    const result = offreSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.errors
        });
    }

    next();
};