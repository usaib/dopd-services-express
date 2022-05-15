import jwt from "jsonwebtoken";
import crypto from "crypto";
import { users } from "../models";
import { tokens } from "../models";

export const SignIn = async (params) => {
	try {
		let response = {};
		const { email, password } = params;
		const User = await users.findOne({
			where: { email: email }
		});

		if (!User) {
			response.success = false;
			response.cause = "Invalid Credentials";
			return response;
		}
		const reqPass = crypto
			.createHash("md5")
			.update(password || "")
			.digest("hex");
		if (reqPass !== User.password) {
			response.success = false;
			response.cause = "Wrong Password";
			return response;
		}
		const Token = jwt.sign(
			{
				user: {
					userId: User.id,
					email: User.email,
					createdAt: new Date(),
					role: User.role
				}
			},
			process.env.SECRET
		);
		console.log(Token);
		await tokens.create({ userId: User.id, token: Token });

		delete User.dataValues.password;
		User.dataValues.token = Token;
		response = {
			success: true,
			...User.dataValues
		};
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const SignOut = async (params) => {
	try {
		const User = await users.findOne({
			where: { email: params.email }
		});
		let response = await token.destroy({
			where: {
				userId: User.id
			}
		});
		return response;
	} catch (e) {
		console.log(e);
	}
};
