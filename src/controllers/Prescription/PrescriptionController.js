const Service = require("../../Services/Prescription");
export const getPrescription = async (request, response) => {
	try {
		const resp = await Service.getPrescription(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Prescription Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get prescription",
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

export const getPrescriptionById = async (request, response) => {
	try {
		const resp = await Service.getPrescriptionById(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Prescription Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get prescription",
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

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "prescription created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create prescriptions",
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

export const update = async (request, response) => {
	try {
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "prescription updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update prescriptions",
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
