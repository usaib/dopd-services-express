import express from "express";

import * as Controller from "../controllers/eg001EmbeddedSigning";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/sign", Controller.createController);
router.post("/list", Controller.listController);
router.post("/getEnvelopeById", Controller.listEnvelopeById);
router.post("/downloadDocumentById", Controller.downloadDocument);

module.exports = router;
