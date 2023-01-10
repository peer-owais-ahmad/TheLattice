const express = require("express");
const { createPatient, getPatient } = require("../controllers/patients");
var multer = require("multer");
var upload = multer();

const router = express.Router();

router.route("/").post(upload.single("image"), createPatient);
router.route("/:id").get(getPatient);

module.exports = router;
