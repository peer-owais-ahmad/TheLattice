const fs = require("fs");
("use strict");
// Read JSON File
const psychiatrists = JSON.parse(
  fs.readFileSync(`${__dirname}/..//database/psychiatrists.json`, "utf-8")
);
console.log(psychiatrists);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("psychiatrists", psychiatrists, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("psychiatrists", null, {});
  },
};
