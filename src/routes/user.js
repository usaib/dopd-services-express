import express from "express";

import * as UserController from "../controllers/User/UserController";
import apiAuth from "../middleware/apiAuth";
import multer from "multer";
var pdf = require("dynamic-html-pdf");
const fs = require("fs");
var html = fs.readFileSync(
	"/home/usaibkhan/Desktop/Projects/FYP/DOPD-services-express/backend/src/views/document.html",
	"utf8"
);
var options = {
	format: "A4",
	orientation: "portrait",
	border: "10mm"
};

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
	let data = req.body;
	console.log(data);
	var document = {
		type: "file", // 'file' or 'buffer'
		template: html,
		context: {
			users: data.users
		},
		path: "./output.pdf" // it is not required if type is buffer
	};
	pdf
		.create(document, options)
		.then((data) => {
			console.log(data);
			res.status(200).json({
				message: "Successfully created pdf",
				success: true,
				data: 200
			});
		})
		.catch((error) => {
			console.error(error);
		});
});

router.post("/upload", upload.array("photo", 3), UserController.imageUpload);

module.exports = router;
