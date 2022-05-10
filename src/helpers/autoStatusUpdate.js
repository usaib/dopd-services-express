const dotenv = require("dotenv");
dotenv.config();
const moment = require("moment");
const Service = require("../Services/Order");
const { Client } = require("@opensearch-project/opensearch");
const client = new Client({
	node: "https://elasticuser:Bagallery!Password123@search-bagallery-elasticsearch-7nkc3chkh2humtpfeda5t22hva.us-east-2.es.amazonaws.com"
});
var CronJob = require("cron").CronJob;

const getOrders = async (startDate, endDate, shipmentStatus) => {
	try {
		const resp = await Service.OrdersForShipment({
			gte: startDate,
			lte: endDate,
			shipmentStatus
		});
		return resp.data;
	} catch (e) {
		console.log(e);
	}
};

const trigger = async () => {
	console.log("starting..");
	let date = new Date().setTime(new Date().getTime() - 15 * 60 * 1000);
	let endDate = new Date(date).toISOString();
	let interval = 30;
	let startDate = new Date(
		new Date(date).setTime(new Date(date).getTime() - interval * 60 * 1000)
	).toISOString(); //30 mins earlier
	const ordersData = await getOrders(
		startDate,
		endDate,
		"Shipment - Delivered"
	);
	const orders = ordersData.hits.hits;
	if (orders.length) {
		const dataForIds = orders.map((order) => {
			return order._source;
		});
		const ids = dataForIds.map((order) => order.id);
		console.log(ids);
		try {
			const resp = await Service.UpdateOmsStatus({
				ids: ids,
				omsStatus: "Fulfilled",
				omsStatusUpdatedBy: "admin",
				delayedDays: "",
				omsStatusUpdatedOn: new Date().toISOString(),
				data: []
			});
			console.log("Successfully updated", resp);
		} catch (e) {
			console.log(e);
		}
	}
	const returnOrdersData = await getOrders(
		startDate,
		endDate,
		"Returned - Delivered to Shipper"
	);
	const returnOrders = returnOrdersData.hits.hits;
	if (returnOrders.length) {
		const dataForReturnIds = returnOrders.map((order) => {
			return order._source;
		});
		const idsR = dataForReturnIds.map((order) => order.id);
		try {
			const resp = await Service.UpdateOmsStatus({
				ids: idsR,
				omsStatus: "Returned",
				omsStatusUpdatedBy: "admin",
				delayedDays: "",
				omsStatusUpdatedOn: new Date().toISOString(),
				data: []
			});
			console.log("Successfully updated", resp);
		} catch (e) {
			console.log(e);
		}
	}
};

var autoStatusMark = new CronJob(`*/30 * * * *`, function () {
	console.log("Job Started..");
	trigger();
});
autoStatusMark.start();
console.log("starting....");

module.exports = {
	trigger
};
