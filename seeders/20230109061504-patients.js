const fs = require("fs");
("use strict");
const patients = JSON.parse(
  fs.readFileSync(`${__dirname}/..//database/patients.json`, "utf-8")
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("patients", patients, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patients", null, {});
  },
};
