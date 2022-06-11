'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Imovel', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      area: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      comodos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      corretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Corretor',
          key: 'id',
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Imovel')
  }
};

