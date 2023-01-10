"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Psychiatrist, {
        foreignKey: "psychId",
        onDelete: "CASCADE",
      });
    }
  }
  Patient.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [10, 250],
            msg: "Please Enter an address whose lenght is atleast 10 and at most 250",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Please Enter a Valid Email Address",
          },
        },
      },
      phoneno: {
        type: Sequelize.BIGINT,
        validate: {
          len: {
            args: [10, 14],
            msg: "The phone number length should be between 10 and 14",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          /*len: {
            args: [8, 15],
            msg: "Please Enter a Password Whose lenght is minimum 8 and Maximum 15",
          },
          is: {
            args: ["^(?=.[a-z])(?=.[A-Z])(?=.*d)[a-zA-Zd]{10,}$", ""],
            msg: "The password must contain atleast 8 characters including at least 1 uppercase, 1 lowercase and one digit.",
          },
          is: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
          */
          len: {
            args: [8, 15],
            msg: "Please Enter a Password Whose lenght is minimum 8 and Maximum 15",
          },
        },
      },
      photo: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      psychId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "psychiatrists",
          key: "id",
          as: "psychId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
