"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("diagnosed_disease_details", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			appointmentId: {
				type: Sequelize.INTEGER,
				references: {
					model: "appointment_histories",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			providedSymptoms: {
				type: Sequelize.STRING
			},
			diagnosedDisease: {
				type: Sequelize.STRING
			},
			wantExtraInfo: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			givenExtraInfo: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			otherDetails: {
				type: Sequelize.TEXT
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("diagnosed_disease_details");
	}
};
