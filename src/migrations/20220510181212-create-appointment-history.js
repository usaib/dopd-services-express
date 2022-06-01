"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("appointment_histories", {
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
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: "users",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			dateTime: {
				type: Sequelize.DATE
			},
			type: {
				type: Sequelize.ENUM("In-person", "Online", "Smart")
			},
			status: {
				type: Sequelize.ENUM("pending", "confirmed", "completed", "cancelled")
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
		return queryInterface.dropTable("appointment_histories");
	}
};
