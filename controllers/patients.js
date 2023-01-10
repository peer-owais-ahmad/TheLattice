const { DataTypes } = require("sequelize");
const sequelize = require("../connectionDB/connectDB");
const Patient = require("../models/Patient");

exports.createPatient = async function (req, res, next) {
  try {
    await sequelize.sync();
    const patient = Patient(sequelize, DataTypes);
    // console.log(req.body);
    //console.log(req.file);
    req.body.photo = req.file.buffer;
    await patient.create(req.body);
    res.status(200).json({ success: "patient added successfully" });
  } catch (err) {
    if (err.name === "TypeError")
      res.status(400).json({
        failure: "Please provide the all required fields approraitely",
      });
    else res.status(400).json({ failure: err.message });
  }
};

exports.getPatient = async function (req, res, next) {
  try {
    await sequelize.sync();
    const patient = Patient(sequelize, DataTypes);
    const patientdata = await patient.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ patient: patientdata });
  } catch (err) {
    res.status(400).json({ failure: err.message });
  }
};
