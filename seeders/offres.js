// import Offer from "../models/Offer.js";


export async function seedOffers() {

    await Offer.bulkCreate([
        {
            quantity: 300,
            price: 6,
            status: "available",
            agriculteurId: 1,
            produitId: 1
        },
        {
            quantity: 500,
            price: 4,
            status: "available",
            agriculteurId: 2,
            produitId: 2
        }
    ]);

    console.log("Offers seeded successfully");
}