'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {foreignKey:'categoryId'})
      this.hasMany(models.Cart, {foreignKey:'productId'})
    }
  };
  Product.init({
    name: {
      allowNull:false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: "Nama Produk Tidak Boleh Kosong"
        }
      }
    },
    image_url: DataTypes.STRING,
    price: {
      allowNull:false,
      type:DataTypes.DOUBLE,
      defaultValue:0,
      validate:{
        min:{
          args:[0],
          msg:"Harga Tidak Boleh Minus"
        },
        max:{
          args:[999999999],
          msg:"Harga Tidak Boleh Minus"
        }
      }
    },
    stock: {
      allowNull:false,
      type:DataTypes.INTEGER,
      defaultValue:0,
      validate:{
        min:{
          args:[0],
          msg:"Stock Tidak Boleh Minus"
        },
        max:{
          args:[999999999],
          msg:"Stock Tidak Boleh Minus"
        }
      }
    },
    descriptions: {
      allowNull:false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field Tidak Boleh Kosong (Dapat disisi (-) apablia tidak ada deskripsi)"
        }
      }
    },
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};