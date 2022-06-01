import express from "express";

import * as UserController from "../controllers/User/UserController";
import apiAuth from "../middleware/apiAuth";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
	destination(req, file, callback) {
		callback(null, "./");
	},
	filename(req, file, callback) {
		callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
	}
});

const upload = multer({ storage });

//= ===============================
// All routes
//= ===============================

router.post("/getAllUsers", UserController.allUsers);
router.post("/me", UserController.getProfile);
router.post("/createUser", apiAuth, UserController.create);
router.post("/deleteUser", apiAuth, UserController.remove);
router.post("/updateUser", apiAuth, UserController.update);
router.post("/upload", upload.array("photo", 3), UserController.imageUpload);

module.exports = router;
