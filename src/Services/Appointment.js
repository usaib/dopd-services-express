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
	if (params.doctorName) {
		const doctor = await doctors.findAll({
			where: {
				name: params.doctorName
			}
		});
		params.doctorEmail = doctor[0].email;
	}
	if (params.userName) {
		const user = await users.findAll({
			where: {
				name: params.userName
			}
		});
		params.userEmail = user[0].email;
	}
	console.log(params);
	let attendeesEmails = [
		{ email: params.doctorEmail },
		{ email: params.userEmail }
	];
	let event = {
		summary: "Testing Online Appointment",
		location: "Virtual / Google Meet",
		description: `With Doctor ${params.doctorName}`,
		start: {
			dateTime: "2022-06-05T10:00:00",
			timeZone: "America/Los_Angeles"
		},
		end: {
			dateTime: "2022-06-05T11:00:00",
			timeZone: "America/Los_Angeles"
		},
		attendees: attendeesEmails,
		reminders: {
			useDefault: false,
			overrides: [
				{ method: "email", minutes: 24 * 60 },
				{ method: "popup", minutes: 30 }
			]
		},
		conferenceData: {
			createRequest: {
				conferenceSolutionKey: {
					type: "hangoutsMeet"
				},
				requestId: "online-appointment-dopd"
			}
		}
	};
	try {
		const data = await createEventForAppointment({
			id: params.id,
			attendeesEmails,
			event
		});
		return {
			success: true,
			data: data
		};
	} catch (e) {
		return {
			success: false,
			data: e
		};
	}
};

export const update = async (params) => {
	try {
		console.log(params);

		const data = await appointment_histories.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
