import express from "express";

import * as UserController from "../controllers/User/UserController";
import apiAuth from "../middleware/apiAuth";
import multer from "multer";
const pdf = require("html-pdf");
const fs = require("fs");
var html = fs.readFileSync(
	"/home/usaibkhan/Desktop/Projects/FYP/DOPD-services-express/backend/src/views/document.html",
	"utf8"
);
var options = { format: "Letter" };

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
router.post("/pdf", (req, res) => {
	pdf.create(html, options).toFile("./EPrescription.pdf", function (err, res) {
		if (err) return console.log(err);
		console.log(res); // { filename: '/app/businesscard.pdf' }
	});
});

router.post("/upload", upload.array("photo", 3), UserController.imageUpload);

module.exports = router;
