const fs = require("fs");
const path = require("path");
("use strict");
// Read JSON File
const hospitals = JSON.parse(
  fs.readFileSync(`${__dirname}/..//database/hospitals.json`, "utf-8")
);
console.log(hospitals);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("hospitals", hospitals, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("hospitals", null, {});
  },
};
