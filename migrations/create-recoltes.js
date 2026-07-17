/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recoltes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      parcelle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'parcelles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      produit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produits',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      quantite_kg: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      date_recolte: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      statut: {
        type: Sequelize.ENUM('disponible', 'reservee', 'vendue', 'perimee'),
        allowNull: false,
        defaultValue: 'disponible',
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

    // FK fréquemment jointes
    await queryInterface.addIndex('recoltes', ['parcelle_id'], {
      name: 'idx_recoltes_parcelle_id',
    });
    await queryInterface.addIndex('recoltes', ['produit_id'], {
      name: 'idx_recoltes_produit_id',
    });
    // statut : filtré en permanence par l'agent ("récolte disponible ?")
    await queryInterface.addIndex('recoltes', ['statut'], {
      name: 'idx_recoltes_statut',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recoltes');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_recoltes_statut";'
    );
  },
};