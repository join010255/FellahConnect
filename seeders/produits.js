import Produit from "../models/Produit.js";


export async function seedProduits() {

    await Produit.bulkCreate([
        {
            name: "Tomate",
            category: "Legume",
            unit: "kg",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pomme de terre",
            category: "Legume",
            unit: "kg",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Orange",
            category: "Fruit",
            unit: "kg",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Olive",
            category: "Fruit",
            unit: "kg",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);

    console.log("Produits seeded successfully");
}