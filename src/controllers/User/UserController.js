import { users } from "../../models";
const Service = require("../../Services/User");

export const create = async (request, response) => {
	console.log(request.body);
	try {
		const { email } = request.body;

		const user = await users.findOne({
			where: { email }
		});
		if (user) {
			console.log(user);
			response.status(200).json({
				message: "User Already Exists",
				success: false,
				data: user
			});
			return;
		}
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "User created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create User",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		console.log(e);
		response.status(400).json({
			...e
		});
	}
};

export const allUsers = async (request, response) => {
	try {
		const resp = await Service.getAllUsers(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get users",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "User listing failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const getProfile = async (request, response) => {
	try {
		const resp = await Service.getProfile(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get users",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to get that users",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const remove = async (request, response) => {
	try {
		const resp = await Service.remove(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "User Deleted Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to delete User",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
export const update = async (request, response) => {
	try {
		const { email } = request.body;
		let users;
		if (email) {
			const users = await users.findOne({
				where: { email }
			});
		}
		if (users) {
			response.status(200).json({
				message: "User Already Exists",
				success: false,
				data: users
			});
			return;
		}
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "User updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update User",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		console.log(e);
		response.status(400).json({
			...e
		});
	}
};

export const imageUpload = async (req, res) => {
	console.log("file", req.files);
	console.log("body", req.body);
	res.status(200).json({
		message: "success!"
	});
};
