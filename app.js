import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cors from "cors";

import Auth from "./src/routes/auth";
import User from "./src/routes/user";
import Appointment from "./src/routes/appointment";

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

module.exports = app;
