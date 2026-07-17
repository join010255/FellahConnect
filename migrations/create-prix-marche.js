/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prix_marches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      marche_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'marches',
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
        onDelete: 'CASCADE',
      },
      prix_dh_kg: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      date_releve: {
        type: Sequelize.DATEONLY,
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

    // Index composite : c'est LA requête clé de /produits/:id/meilleur-prix
    // (filtrer par produit, trier par prix, sur les relevés les plus récents)
    await queryInterface.addIndex(
      'prix_marches',
      ['produit_id', 'date_releve'],
      { name: 'idx_prix_marches_produit_date' }
    );
    await queryInterface.addIndex('prix_marches', ['marche_id'], {
      name: 'idx_prix_marches_marche_id',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prix_marches');
  },
};