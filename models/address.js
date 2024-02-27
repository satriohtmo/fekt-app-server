"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Address.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please insert your address",
          },
          notNull: {
            msg: "Please insert your address",
          },
        },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please select your province",
          },
          notNull: {
            msg: "Please select your province",
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Insert your city",
          },
          notNull: {
            msg: "Insert your city",
          },
        },
      },
      detail: DataTypes.STRING,
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please insert your zip code",
          },
          notNull: {
            msg: "Please insert your zip code",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
