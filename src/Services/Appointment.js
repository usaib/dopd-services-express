import { appointment_histories } from "../models";
import { doctors } from "../models";
import { users } from "../models";
import createEventForAppointment from "../helpers/calender";

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
export const create = async (params) => {
	try {
		if (params.doctorName) {
			const doctor = await doctors.findAll({
				where: {
					name: params.doctorName
				}
			});
			params.doctorId = doctor[0].id;
			delete params.doctorName;
		}
		console.log(params);
		const data = await appointment_histories.create({
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

export const createOnlineAppointment = async (params) => {
	console.log(params);
	const data = createEventForAppointment({ id: params.id });
	return {
		success: true,
		data: data
	};
	// try {
	// 	if (params.doctorName) {
	// 		const doctor = await doctors.findAll({
	// 			where: {
	// 				name: params.doctorName
	// 			}
	// 		});
	// 		params.doctorId = doctor[0].id;
	// 		delete params.doctorName;
	// 	}
	// 	console.log(params);
	// 	const data = await appointment_histories.create({
	// 		...params
	// 	});
	// 	return {
	// 		success: true,
	// 		data: data.id
	// 	};
	// } catch (error) {
	// 	return {
	// 		success: false,
	// 		data: error
	// 	};
	// }
};
