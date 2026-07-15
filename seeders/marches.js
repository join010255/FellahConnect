// import Marche from "../models/Marche.js";


export async function seedMarches() {

    await Marche.bulkCreate([
        {
            name: "Souk Al Joumla Casablanca",
            city: "Casablanca",
            region: "Casablanca-Settat"
        },
        {
            name: "Souk Al Joumla Agadir",
            city: "Agadir",
            region: "Souss-Massa"
        },
        {
            name: "Souk Al Joumla Marrakech",
            city: "Marrakech",
            region: "Marrakech-Safi"
        },
        {
            name: "Souk Al Joumla Beni Mellal",
            city: "Beni Mellal",
            region: "Beni Mellal-Khenifra"
        }
    ]);

    console.log("Marches seeded successfully");
}