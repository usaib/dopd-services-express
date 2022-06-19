import express from "express";

import * as AppointmentController from "../controllers/Appointment/AppointmentController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAppointments", AppointmentController.getAppointments);
router.post("/create", AppointmentController.create);
router.post("/update", AppointmentController.update);

router.post(
	"/createOnlineAppointment",
	AppointmentController.createOnlineAppointment
);

router.get("/getToken", (req, res) => {
	console.log(req.body);
});

module.exports = router;
