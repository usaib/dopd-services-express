import {
	appointment_prescriptions,
	medicine_inventories,
	Sequelize
} from "../models";
const Op = Sequelize.Op;

export const getPrescription = async (params) => {
	try {
		const prescriptionData = await appointment_prescriptions.findAndCountAll({
			order: [["createdAt", "DESC"]]
		});
		return {
			success: true,
			data: prescriptionData
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const getPrescriptionById = async (params) => {
	try {
		console.log(params);
		const prescriptionData = await appointment_prescriptions.findAndCountAll({
			order: [["createdAt", "DESC"]],
			where: {
				appointmentHistoryId: params.appointmentId
			},
			include: {
				model: medicine_inventories
			}
		});
		return {
			success: true,
			data: prescriptionData
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};

export const create = async (params) => {
	try {
		console.log(params);
		const { medicine } = params;
		medicine.forEach(async (data) => {
			const presciptionRecord = await appointment_prescriptions.create({
				...data,
				medicineInventoryId: data.medicineName,
				appointmentHistoryId: params.appointmentId
			});
		});
		return {
			success: true,
			data: "successfully created"
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const remove = async (params) => {
	try {
		const presciptionRecord = await appointment_prescriptions.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: presciptionRecord
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const update = async (params) => {
	try {
		console.log(params);
		const previousRecord = await appointment_prescriptions.findAll({
			where: {
				id: params.id
			}
		});
		if (params.quantity) {
			const quantityUpdatedRecord = await dispense_in_records.create({
				inventoryId: params.id,
				quantityUpdated: params.quantity
			});
			console.log(quantityUpdatedRecord);
		}
		params.quantity =
			previousRecord[0].dataValues.quantity + parseInt(params.quantity);
		console.log(params);

		const presciptionRecord = await appointment_prescriptions.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data: presciptionRecord
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
