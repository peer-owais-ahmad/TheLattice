const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./connectionDB/connectDB");
const path = require("path");

// load env variables
dotenv.config({ path: "./config/config.env" });

//Route files
const patients = require("./routes/patients");
const hospitals = require("./routes/hospitals");

const app = express();

//body parser
app.use(express.json());

//for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static(path.join(__dirname)));

//Mount routers

app.use("/health/patients", patients);
app.use("/health/hospitals", hospitals);

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(`Server running in development mode on port : ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close sever and exit process
  server.close(() => process.exit(1));
});
