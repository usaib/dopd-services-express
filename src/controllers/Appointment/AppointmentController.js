const Service = require("../../Services/Appointment");

export const getAppointments = async (request, response) => {
	try {
		const resp = await Service.getAppointments(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get appointments",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to get appointments",
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

export const getUserAppointments = async (request, response) => {
	try {
		const resp = await Service.getUserAppointments(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get appointments",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to get appointments",
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
				message: "Successfully created appointment history",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to create appointment history",
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
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully updated appointment history",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to update appointment history",
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

export const createOnlineAppointment = async (request, response) => {
	try {
		const resp = await Service.createOnlineAppointment(request.body);
		console.log("thaaat is response", resp);

		if (resp.success) {
			response.status(200).json({
				message: "Successfully created online appointment",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to Create Online Appointment appointment",
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
