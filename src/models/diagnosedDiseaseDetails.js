"use strict";

const appointmentHistory = require("./appointmentHistory");

module.exports = (sequelize, DataTypes) => {
	const diagnosed_disease_details = sequelize.define(
		"diagnosed_disease_details",
		{
			appointmentId: {
				type: DataTypes.INTEGER,
				references: {
					model: appointmentHistory,
					key: "id"
				}
			},
			providedSymptoms: DataTypes.STRING,
			diagnosedDisease: DataTypes.STRING,
			wantExtraInfo: DataTypes.BOOLEAN,
			givenExtraInfo: DataTypes.BOOLEAN,
			otherDetails: DataTypes.TEXT
		},
		{}
	);
	diagnosed_disease_details.associate = function (models) {
		// associations can be defined here
	};
	return diagnosed_disease_details;
};
