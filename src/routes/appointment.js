import express from "express";

import * as AppointmentController from "../controllers/Appointment/AppointmentController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAppointments", AppointmentController.getAppointments);
router.post("/create", AppointmentController.create);

module.exports = router;
