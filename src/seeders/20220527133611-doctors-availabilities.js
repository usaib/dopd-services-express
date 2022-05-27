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
			"doctor_availabilities",
			[
				{
					doctorId: 1,
					startTime: "5:00",
					weekday: "Monday",
					endTime: "8:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 1,
					startTime: "5:00",
					endTime: "8:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 1,
					startTime: "5:00",
					endTime: "8:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 2,
					startTime: "7:00",
					weekday: "Monday",
					endTime: "8:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 2,
					startTime: "7:00",
					endTime: "8:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 2,
					startTime: "7:00",
					endTime: "8:00",
					weekday: "Wednesday",
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
