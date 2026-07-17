export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('utilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM('agriculteur', 'admin'),
        allowNull: false,
        defaultValue: 'agriculteur',
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
 
    // Index sur email : recherche fréquente au login
    await queryInterface.addIndex('utilisateurs', ['email'], {
      unique: true,
      name: 'idx_utilisateurs_email',
    });
 
    // Index sur role : filtrage RBAC fréquent
    await queryInterface.addIndex('utilisateurs', ['role'], {
      name: 'idx_utilisateurs_role',
    });
  },
 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('utilisateurs');
    // Nettoyage du type ENUM sous Postgres
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_utilisateurs_role";'
    );
  },
};