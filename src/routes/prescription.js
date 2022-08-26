import express from "express";

import * as PrescriptionController from "../controllers/Prescription/PrescriptionController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getPrescription", PrescriptionController.getPrescription);
router.post("/getPrescriptionById", PrescriptionController.getPrescriptionById);
router.post("/create", PrescriptionController.create);
router.post("/update", PrescriptionController.update);

module.exports = router;
