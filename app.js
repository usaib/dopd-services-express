import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Auth from "./src/routes/auth";
import User from "./src/routes/user";
import Appointment from "./src/routes/appointment";
import diagnosedDisease from "./src/routes/diagnosedDisease";
import doctor from "./src/routes/doctor";
import doctorAvailability from "./src/routes/doctorAvailability";
import embeddedSigning from "./src/routes/embeddedSigning";

dotenv.config();
require("./src/config/sequelize");
const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());
app.use(bodyParser.json());
app.use("/auth", Auth);
app.use("/user", User);
app.use("/appointment", Appointment);
app.use("/diagnosedDisease", diagnosedDisease);
app.use("/doctor", doctor);
app.use("/doctorAvailability", doctorAvailability);
app.use("/embeddedSigning", embeddedSigning);

module.exports = app;
