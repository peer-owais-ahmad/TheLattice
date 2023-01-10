const express = require("express");
const { getHospital } = require("../controllers/hospitals");

const router = express.Router();

router.route("/:id").get(getHospital);

module.exports = router;
