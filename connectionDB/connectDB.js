const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("DB_NAME", "DB_USERNAME", "DB_PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

//this actually make connection with the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
