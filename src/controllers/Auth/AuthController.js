const Service = require("../../Services/Auth");

export const SignIn = async (request, response) => {
	try {
		const resp = await Service.SignIn(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Login Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Login Failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const SignOut = async (request, response) => {
	try {
		const resp = await Service.SignOut(request.body);
		if (resp) {
			response.status(200).json({
				message: "Logout Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(400).json({
				message: "Failed to logged out",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const Profile = async (req, response) => {
	try {
		const { userId } = req.user;
		const user = await user.findOne({ where: { id: userId } });
		response.status(200).json({
			data: user
		});
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
