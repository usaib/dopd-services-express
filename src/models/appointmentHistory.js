"use strict";

const doctors = require("./doctor");
const users = require("./user");

module.exports = (sequelize, DataTypes) => {
	const appointment_histories = sequelize.define(
		"appointment_histories",
		{
			dateTime: DataTypes.DATE,
			doctorId: {
				type: DataTypes.INTEGER,
				references: {
					model: doctors,
					key: "id"
				}
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: users,
					key: "id"
				}
			},
			type: DataTypes.ENUM("In-person", "Online", "Smart"),
			status: DataTypes.ENUM("pending", "confirmed", "completed", "cancelled"),
			appointmentLink: DataTypes.STRING
		},
		{}
	);
	appointment_histories.associate = function (models) {
		// associations can be defined here
	};
	return appointment_histories;
};
