import bcrypt from "bcrypt";
//import user models 

export async function up(queryInterface, Sequelize) {
    const password = await bcrypt.hash("Password123!", 10);

    await queryInterface.bulkInsert("Users", [
        {
            name: "adam",
            email: "adamx10@gmail.com",
            password: password,
            role: "agriculteur",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Admin FellahConnect",
            email: "admin@fellahconnect.ma",
            password: password,
            role: "admin",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
}