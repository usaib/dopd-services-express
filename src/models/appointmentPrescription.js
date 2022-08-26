"use strict";

import { appointment_histories } from "./appointmentHistory";
import { medicine_inventories } from "./medicineInventory";

module.exports = (sequelize, DataTypes) => {
	const appointment_prescriptions = sequelize.define(
		"appointment_prescriptions",
		{
			appointmentHistoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: appointment_histories,
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			medicineInventoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: medicine_inventories,
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			dosage: {
				type: DataTypes.STRING
			},
			timing: {
				type: DataTypes.STRING
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE
			}
		},
		{}
	);
	appointment_prescriptions.associate = function (models) {
		// associations can be defined here
	};
	return appointment_prescriptions;
};
