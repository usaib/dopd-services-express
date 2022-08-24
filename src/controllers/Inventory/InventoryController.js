const Service = require("../../Services/Inventory");
export const getInventory = async (request, response) => {
	try {
		const resp = await Service.getInventory(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Inventory Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get getInventory",
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
export const getDispenseInRecords = async (request, response) => {
	try {
		const resp = await Service.getDispenseInRecords(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Inventory Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get getInventory",
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

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Medicine created Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("contro resp", resp);
			response.status(200).json({
				message: "Failed to create Medicine",
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

export const remove = async (request, response) => {
	try {
		const resp = await Service.remove(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Medicine Deleted Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to delete Medicine",
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
export const update = async (request, response) => {
	try {
		const resp = await Service.update(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Medicine updated Successfully",
				success: true,
				data: resp
			});
		} else {
			console.log("Error resp", resp);
			response.status(200).json({
				message: "Failed to update Medicine",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		console.log(e);
		response.status(400).json({
			...e
		});
	}
};

export const dispense = async (request, response) => {
	try {
		const resp = await Service.dispense(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Consumed Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(500).json({
				message: "Failed to consume",
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
