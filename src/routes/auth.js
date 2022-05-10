import express from "express";

import * as AuthController from "../controllers/Auth/AuthController";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/SignIn", AuthController.SignIn);
router.post("/SignOut", AuthController.SignOut);

module.exports = router;
