import Produit from "../models/Produit.js";
import PrixMarche from "../models/PrixMarche.js";
import Offre from "../models/Offre.js";
import Recolte from "../models/Recolte.js";
import Parcelle from "../models/Parcelle.js";
import Marche from "../models/Marche.js";

class ToolFunctions {

    // Get the best market price for a product
    async getBestPrice({ productName }) {

        const produit = await Produit.findOne({
            where: { nom: productName }
        });

        if (!produit) {
            return {
                success: false,
                message: "Produit introuvable"
            };
        }

        const bestPrice = await PrixMarche.findOne({
            where: {
                produitId: produit.id
            },
            include: [
                {
                    model: Marche,
                    attributes: ["nom", "ville"]
                }
            ],
            order: [["prix", "DESC"]]
        });

        if (!bestPrice) {
            return {
                success: false,
                message: "Aucun prix trouvé."
            };
        }

        return bestPrice;
    }

    // Get all prices of a product
    async getMarketPrices({ productName }) {

        const produit = await Produit.findOne({
            where: { nom: productName }
        });

        if (!produit) {
            return [];
        }

        return await PrixMarche.findAll({
            where: {
                produitId: produit.id
            },
            include: [
                {
                    model: Marche,
                    attributes: ["nom", "ville"]
                }
            ],
            order: [["prix", "DESC"]]
        });
    }

    // Get all harvests of a farmer
    async getFarmerHarvests({ farmerId }) {

        return await Recolte.findAll({
            include: [
                {
                    model: Parcelle,
                    where: {
                        agriculteurId: farmerId
                    }
                },
                {
                    model: Produit
                }
            ]
        });
    }

    // Get all parcels of a farmer
    async getFarmerParcels({ farmerId }) {

        return await Parcelle.findAll({
            where: {
                agriculteurId: farmerId
            }
        });
    }

    // Create a harvest
    async createHarvest(data) {

        const harvest = await Recolte.create(data);

        return {
            success: true,
            message: "Récolte créée avec succès",
            data: harvest
        };
    }

    // Create sale offer
    async createSaleOffer(data) {

        const offer = await Offre.create(data);

        return {
            success: true,
            message: "Offre créée avec succès",
            data: offer
        };
    }

    // Update harvest
    async updateHarvest({ recolteId, quantite }) {

        const harvest = await Recolte.findByPk(recolteId);

        if (!harvest) {
            return {
                success: false,
                message: "Récolte introuvable"
            };
        }

        harvest.quantite = quantite;

        await harvest.save();

        return {
            success: true,
            message: "Récolte mise à jour",
            data: harvest
        };
    }

    // Delete sale offer
    async deleteSaleOffer({ offreId }) {

        const offer = await Offre.findByPk(offreId);

        if (!offer) {
            return {
                success: false,
                message: "Offre introuvable"
            };
        }

        await offer.destroy();

        return {
            success: true,
            message: "Offre supprimée"
        };
    }

}

export default new ToolFunctions();