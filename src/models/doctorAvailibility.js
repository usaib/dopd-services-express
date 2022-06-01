"use strict";
const doctors = require("./doctor");
module.exports = (sequelize, DataTypes) => {
	const doctor_availabilities = sequelize.define(
		"doctor_availabilities",
		{
			doctorId: {
				type: DataTypes.INTEGER,
				references: {
					model: doctors,
					key: "id"
				}
			},
			weekday: DataTypes.STRING,
			startTime: DataTypes.TIME,
			endTime: DataTypes.TIME
		},
		{}
	);
	doctor_availabilities.associate = function (models) {
		// associations can be defined here
	};
	return doctor_availabilities;
};
