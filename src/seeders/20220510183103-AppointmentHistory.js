"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			"appointment_histories",
			[
				{
					doctorId: 1,
					userId: 1,
					type: "In-person",
					dateTime: new Date(),
					status: "pending",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 1,
					userId: 2,
					type: "Online",
					dateTime: new Date(),
					status: "completed",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 2,
					userId: 1,
					type: "Online",
					dateTime: new Date(),
					status: "confirmed",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 2,
					userId: 2,
					type: "Smart",
					dateTime: new Date(),
					status: "cancelled",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
