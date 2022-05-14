import express from "express";

import * as DoctorController from "../controllers/Doctor/DoctorController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAllDoctors", DoctorController.allDoctors);
router.post("/createDoctor", DoctorController.create);
router.post("/deleteDoctor", DoctorController.remove);
router.post("/updateDoctor", DoctorController.update);
module.exports = router;
