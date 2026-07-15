// import Parcelle from "../models/Parcelle.js";


export async function seedParcelles() {

    await Parcelle.bulkCreate([
        {
            name: "Parcelle Adam 1",
            surface: 3,
            location: "Beni Mellal",
            agriculteurId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Parcelle Fatima 1",
            surface: 2,
            location: "Souss-Massa",
            agriculteurId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);

    console.log("Parcelles seeded successfully");
}