import { user } from "../models";
import { user_vendors } from "../models";
import crypto from "crypto";

export const getAllUsers = async (params) => {
	try {
		const users = await user.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
			offset: params.offset,
			limit: params.limit
		});
		return {
			success: true,
			data: users
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
		const users = await user.findAll({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: users
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
		const Users = await user.create({
			...params
		});
		if (params.vendor) {
			const userVendors = await user_vendors.create({
				userId: Users.id,
				vendorId: params.vendor,
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}
		return {
			success: true,
			data: Users.id
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
		const users = await user.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: users
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

		const Users = await user.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data: Users
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};
