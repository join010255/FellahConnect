/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('marches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false, // ex: Souk Had Souss, Marché de gros Casablanca
      },
      ville: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    // Index sur region : requêtes "meilleur prix par région"
    await queryInterface.addIndex('marches', ['region'], {
      name: 'idx_marches_region',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('marches');
  },
};