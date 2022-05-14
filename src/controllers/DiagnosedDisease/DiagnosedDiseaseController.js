const Service = require("../../Services/DiagnosedDisease");

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully create diagnosed disease record",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to create diagnosed disease record",
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

export const getDiagnosedDiseaseDetails = async (request, response) => {
	try {
		const resp = await Service.getDiagnosedDiseaseDetails(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Successfully get diagnosed diesease details",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "failed to get diagnosed diesease details",
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
