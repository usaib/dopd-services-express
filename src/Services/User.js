import crypto from "crypto";
import { users } from "../models";

export const getAllUsers = async (params) => {
	try {
		const data = await users.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
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

export const getProfile = async (params) => {
	try {
		const data = await users.findAll({
			where: {
				id: params.id
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

export const create = async (params) => {
	try {
		console.log(params);
		const reqPass = crypto
			.createHash("md5")
			.update(params.password)
			.digest("hex");
		params.password = reqPass;
		params.mrNumber = "ABC-" + Math.floor(100000 + Math.random() * 900000);
		const Users = await users.create({
			...params
		});

		return {
			message: "User Created Successfully",
			success: true,
			data: Users.id
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};

export const remove = async (params) => {
	try {
		const data = await users.destroy({
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

		const data = await users.update(
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
