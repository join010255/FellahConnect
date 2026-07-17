/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // ex: Tomate, Orange, Menthe
      },
      categorie: {
        type: Sequelize.STRING,
        allowNull: true, // ex: Légume, Fruit, Aromate
      },
      unite: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'kg',
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

    await queryInterface.addIndex('produits', ['nom'], {
      unique: true,
      name: 'idx_produits_nom',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produits');
  },
};