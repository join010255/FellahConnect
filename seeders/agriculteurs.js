// import Agriculteur from "../models/Agriculteur.js";


export async function seedAgriculteurs() {

    await Agriculteur.bulkCreate([
        {
            name: "Ahmed El Idrissi",
            phone: "0612345678",
            region: "Beni Mellal-Khenifra",
            surface: 3
        },
        {
            name: "Fatima Ait Lahcen",
            phone: "0623456789",
            region: "Souss-Massa",
            surface: 2
        }
    ]);

    console.log("Agriculteurs created");
}