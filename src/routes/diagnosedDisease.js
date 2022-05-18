import express from "express";

import * as DiagnosedDiseaseController from "../controllers/DiagnosedDisease/DiagnosedDiseaseController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/create", DiagnosedDiseaseController.create);
router.post("/update", DiagnosedDiseaseController.update);

router.post(
	"/getDiagnosedDiseaseDetails",
	DiagnosedDiseaseController.getDiagnosedDiseaseDetails
);

module.exports = router;
