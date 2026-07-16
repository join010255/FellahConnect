import {z} from "zod";
//shema dyal offrevente 
const offerVenteSchema =z.object({
    prix : z 
    .number({require_error :"le prix est requis"})
    .min(0,"Le prix doit être un nombre positif"),
    quantite : z 
    .number({require_error :"La quantité est requise"})
    .min(0,"La quantité doit être un nombre positif"),
    statut :z 
    .number.enum(["en_attente", "active", "vendue", "annulee"],{errorMap:()=>({message:"status invalide"}),})
    .optional(),
    recolteId:z
    .number({require_error:"recoltId est requis "})
    .int("recoltId doit etre un entier valide ")
    .min(1,"recoltId doit etre un entier valide ")

});
//schema dyal update 
const offreVenteUpdateSchema = offerVenteSchema.partial();
// schema dyal id f url 
const idParamSchema = z.object({
    id:z.coerce.number()
    
    .int()
    .min(1,"L'ID doit être un nombre entier")
});

export const validateBody = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }
  req.body = result.data; 
  next();
};
export const validateParams = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.params);
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }
  req.params = result.data;
  next();
};
export {
  offreVenteSchema,
  offreVenteUpdateSchema,
  idParamSchema,
};