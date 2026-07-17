/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recolte_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recoltes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      marche_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // le marché ciblé peut être choisi après coup
        references: {
          model: 'marches',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantite_kg: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      prix_propose_dh_kg: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      statut: {
        type: Sequelize.ENUM('ouverte', 'acceptee', 'annulee', 'cloturee'),
        allowNull: false,
        defaultValue: 'ouverte',
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

    await queryInterface.addIndex('offres', ['recolte_id'], {
      name: 'idx_offres_recolte_id',
    });
    await queryInterface.addIndex('offres', ['statut'], {
      name: 'idx_offres_statut',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('offres');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offres_statut";'
    );
  },
};