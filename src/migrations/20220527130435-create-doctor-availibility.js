"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("doctor_availabilities", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			doctorId: {
				type: Sequelize.INTEGER,
				references: {
					model: "doctors",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			weekday: {
				type: Sequelize.STRING
			},
			startTime: {
				type: Sequelize.TIME
			},
			endTime: {
				type: Sequelize.TIME
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
		return queryInterface.dropTable("doctor_availabilities");
	}
};
