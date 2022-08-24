import express from "express";

import * as InventoryController from "../controllers/Inventory/InventoryController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getInventory", InventoryController.getInventory);
router.post(
	"/getDispenseInRecords",
	apiAuth,
	InventoryController.getDispenseInRecords
);

router.post("/create", apiAuth, InventoryController.create);
router.post("/remove", apiAuth, InventoryController.remove);
router.post("/update", apiAuth, InventoryController.update);
router.post("/dispense", apiAuth, InventoryController.dispense);

// router.post("/createUser", apiAuth, UserController.create);
// router.post("/deleteUser", apiAuth, UserController.remove);
// router.post("/updateUser", apiAuth, UserController.update);
module.exports = router;
