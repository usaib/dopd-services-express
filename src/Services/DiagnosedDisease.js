import { diagnosed_disease_details } from "../models";

export const create = async (params) => {
	try {
		console.log(params);
		const data = await diagnosed_disease_details.create({
			...params
		});

		return {
			success: true,
			data: data.id
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const getDiagnosedDiseaseDetails = async (params) => {
	console.log(params, "prams");
	try {
		const data = await diagnosed_disease_details.findAndCountAll({
			where: {
				appointmentId: params.appointmentId
			},
			attributes: [
				"appointmentId",
				"providedSymptoms",
				"diagnosedDisease",
				"wantExtraInfo",
				"givenExtraInfo",
				"otherDetails"
			]
		});
		return {
			success: true,
			data: data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
