import { diagnosed_disease_details } from "../models";

export const create = async (params) => {
	try {
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
