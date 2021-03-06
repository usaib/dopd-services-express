"use strict";
module.exports = (sequelize, DataTypes) => {
	const doctors = sequelize.define(
		"doctors",
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			specialization: DataTypes.STRING,
			qualification: DataTypes.STRING,
			experience: DataTypes.STRING,
			email: DataTypes.STRING,
			imageUrl: DataTypes.STRING,
			gender: DataTypes.ENUM("Male", "Female"),
			rating: DataTypes.STRING
		},
		{}
	);
	doctors.associate = function (models) {
		// associations can be defined here
	};
	return doctors;
};
