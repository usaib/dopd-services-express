import express from "express";

import * as DoctorAvailabilityController from "../controllers/DoctorAvailability/DoctorAvailability";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post(
	"/getDoctorAvailability",
	DoctorAvailabilityController.getDoctorAvailability
);

module.exports = router;
