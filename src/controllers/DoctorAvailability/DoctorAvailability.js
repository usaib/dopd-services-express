const Service = require("../../Services/DoctorAvailability");

export const getDoctorAvailability = async (request, response) => {
	try {
		const resp = await Service.getDoctorAvailability(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get doctors availabilty details",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to get doctors availabilty details",
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

