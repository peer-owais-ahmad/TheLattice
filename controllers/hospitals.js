const { DataTypes } = require("sequelize");
const sequelize = require("../connectionDB/connectDB");
const Hospital = require("../models/Hospital");
const Psychiatrist = require("../models/Psychiatrist");
const Patient = require("../models/Patient");

exports.getHospital = async function (req, res, next) {
  try {
    await sequelize.sync();
    const hospital = Hospital(sequelize, DataTypes);
    const psychiatrist = Psychiatrist(sequelize, DataTypes);
    const patient = Patient(sequelize, DataTypes);
    const data = await hospital.findOne({
      where: {
        id: req.params.id,
      },
    });
    let psychiatrists = await psychiatrist.findAll({
      where: {
        hopId: req.params.id,
      },
    });
    var TotalPatientcountforhos = 0;
    psychiatrists = JSON.parse(JSON.stringify(psychiatrists));
    for (let i = 0; i < psychiatrists.length; i++) {
      var TotalPatientcountforpsy = await patient.count({
        where: { psychId: psychiatrists[i].id },
      });
      psychiatrists[i].patientCount = TotalPatientcountforpsy;
      TotalPatientcountforhos =
        TotalPatientcountforhos + TotalPatientcountforpsy;
      delete psychiatrists[i].createdAt;
      delete psychiatrists[i].updatedAt;
      delete psychiatrists[i].hopId;
    }
    res.status(200).json({
      HospitalName: data.name,
      TotalPsychiatristcount: psychiatrists.length,
      TotalPatientsCount: TotalPatientcountforhos,
      PsychiatristDetails: psychiatrists,
    });
  } catch (err) {
    res
      .status(400)
      .json({ failure: "Please check the request again and hospital id" });
  }
};
