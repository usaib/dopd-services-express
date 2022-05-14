import { doctors } from "../../models";
const Service = require("../../Services/Doctor");

export const create = async (request, response) => {
	try {
		const { email } = request.body;

		const doctor = await doctors.findOne({
			where: { email }
		});
		if (doctor) {
			response.status(200).json({
				message: "Doctor Already Exists",
				success: false,
				data: doctor
			});
			return;
		}
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Doctor created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create Doctor",
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

export const allDoctors = async (request, response) => {
	try {
		const resp = await Service.getAllDoctors(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get doctors",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Doctor listing failed",
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
				message: "Doctor Deleted Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to delete Doctor",
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
		let doctor;
		if (email) {
			const doctors = await doctors.findOne({
				where: { email }
			});
		}
		if (doctor) {
			response.status(200).json({
				message: "Doctor Already Exists",
				success: false,
				data: doctor
			});
			return;
		}
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Doctor updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update Doctor",
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
