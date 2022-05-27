import { doctor_availabilities } from "../models";

export const getDoctorAvailability = async (params) => {
	try {
		const data = await doctor_availabilities.findAndCountAll({
			order: [["createdAt", "DESC"]],
			offset: params.offset,
			limit: params.limit,
			where: {
				doctorId: params.doctorId
			}
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
