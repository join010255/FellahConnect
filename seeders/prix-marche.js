import PrixMarche from "../models/PrixMarche.js";


export async function seedPrixMarches() {

    await PrixMarche.bulkCreate([
        {
            prix: 6,
            date: new Date(),
            produitId: 1,
            marcheId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            prix: 4,
            date: new Date(),
            produitId: 2,
            marcheId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);

    console.log("Prix marches seeded successfully");
}