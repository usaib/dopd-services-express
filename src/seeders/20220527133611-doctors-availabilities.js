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
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 1,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 1,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 3,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 3,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 3,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 4,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 4,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 4,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 5,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 5,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 5,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 6,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 6,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 6,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 7,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 7,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 7,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 8,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 8,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 8,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 9,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 9,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 9,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 10,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 10,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 10,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 11,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 11,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 11,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 12,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 12,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 12,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 13,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 13,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 13,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 14,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 14,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 14,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 15,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 15,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 15,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 16,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 16,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 16,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 17,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 17,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 17,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 18,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 18,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 18,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 19,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 19,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 19,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 20,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 20,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 20,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 21,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 21,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 21,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 22,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 22,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 22,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 23,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 23,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 23,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 24,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 24,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 24,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 25,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 25,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 25,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 26,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 26,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 26,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 27,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 27,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 27,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 28,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 28,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 28,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 29,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 29,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 29,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 30,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 30,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 30,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 31,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 31,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 31,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 32,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 32,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 32,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Wednesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 33,
					startTime: "8:00",
					weekday: "Monday",
					endTime: "12:00",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 33,
					startTime: "8:00",
					endTime: "12:00",
					weekday: "Tuesday",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					doctorId: 33,
					startTime: "8:00",
					endTime: "12:00",
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
