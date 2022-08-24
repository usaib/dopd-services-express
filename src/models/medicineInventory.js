"use strict";
module.exports = (sequelize, DataTypes) => {
	const medicine_inventories = sequelize.define(
		"medicine_inventories",
		{
			name: DataTypes.STRING,
			type: DataTypes.STRING
		},
		{}
	);
	medicine_inventories.associate = function (models) {
		// associations can be defined here
	};
	return medicine_inventories;
};
