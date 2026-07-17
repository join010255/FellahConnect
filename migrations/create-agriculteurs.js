export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agriculteurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      utilisateur_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true, // relation 1..1 avec utilisateurs
        references: {
          model: 'utilisateurs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false, // ex: Souss-Massa, Béni Mellal-Khénifra
      },
      ville: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      langue_preferee: {
        type: Sequelize.ENUM('fr', 'ar'),
        allowNull: false,
        defaultValue: 'fr',
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
 
    // Index sur region : filtrage fréquent (stats par région)
    await queryInterface.addIndex('agriculteurs', ['region'], {
      name: 'idx_agriculteurs_region',
    });
  },
 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agriculteurs');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "
      0.
      enum_agriculteurs_langue_preferee";'
    );
  },
};
