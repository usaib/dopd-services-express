"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert(
			"users",
			[
				{
					name: "Usaib Khan",
					email: "usaibkhan@gmail.com",
					password: "827ccb0eea8a706c4c34a16891f84e7b",
					gender: "Male",
					age: "22",
					contactNumber: "03322266871",
					fatherName: "Ishtiaq Hussain",
					mrNumber: "ABC-000",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Admin",
					email: "admin@dopd.com",
					password: "827ccb0eea8a706c4c34a16891f84e7b",
					gender: "Male",
					age: "15",
					contactNumber: "03312366871",
					fatherName: "Usaib Khan",
					mrNumber: "ABC-001",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.dropTable("users");
	}
};
