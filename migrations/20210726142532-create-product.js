'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};