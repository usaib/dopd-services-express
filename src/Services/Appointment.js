import { appointment_histories } from "../models";
import { doctors } from "../models";
import { users } from "../models";

export const getAppointments = async (params) => {
	try {
		const data = await appointment_histories.findAndCountAll({
			order: [["createdAt", "DESC"]],
			offset: params.offset,
			limit: params.limit,
			include: [
				{
					model: doctors,
					attributes: ["name"]
				},
				{
					model: users,
					attributes: ["name"]
				}
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
