// import Recolte from "../models/Recolte.js";


export async function seedRecoltes() {

    await Recolte.bulkCreate([
        {
            quantity: 300,
            harvestDate: new Date(),
            parcelleId: 1,
            produitId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            quantity: 500,
            harvestDate: new Date(),
            parcelleId: 2,
            produitId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);

    console.log("Recoltes seeded successfully");
}