import { doctors, Sequelize } from "../models";
const Op = Sequelize.Op;

export const getAllDoctors = async (params) => {
	try {
		let where;
		if (params.filter && params.filter != "All") {
			where = {
				imageUrl: {
					[Op.ne]: null
				},
				specialization: params.filter
			};
		} else {
			where = {
				imageUrl: {
					[Op.ne]: null
				}
			};
		}
		console.log(where);
		const data = await doctors.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
			where: where,
			offset: params.offset,
			limit: params.limit
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
		const Doctors = await doctors.create({
			...params
		});

		return {
			success: true,
			data: Doctors.id
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
		const data = await doctors.destroy({
			where: {
				id: params.id
			}
		});
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

export const update = async (params) => {
	try {
		console.log(params);

		const data = await doctors.update(
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
