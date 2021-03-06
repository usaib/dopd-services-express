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
