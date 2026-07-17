/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parcelles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agriculteur_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'agriculteurs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: true, // ex: "Parcelle Nord"
      },
      superficie_ha: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      localisation: {
        type: Sequelize.STRING,
        allowNull: true, // texte libre ou coordonnées
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

    // FK très interrogée : GET /agriculteurs/:id/parcelles
    await queryInterface.addIndex('parcelles', ['agriculteur_id'], {
      name: 'idx_parcelles_agriculteur_id',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('parcelles');
  },
};