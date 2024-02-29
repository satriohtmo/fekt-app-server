"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductGallery.belongsTo(models.Product, { foreignKey: "ProductId" });
    }
  }
  ProductGallery.init(
    {
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please fill the Image of product",
          },
          notNull: {
            msg: "Please fill the Image of product",
          },
        },
      },
      ProductId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductGallery",
    }
  );
  return ProductGallery;
};
