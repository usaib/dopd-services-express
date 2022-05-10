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
			"doctors",
			[
				{
					name: "Anees Allana",
					email: "aneesallana@gmail.com",
					specialization: "ENT",
					qualification: "MBBS FCPS",
					experience: "10",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Zeeshan Shafqat",
					email: "zeeshanshafqat@gmail.com",
					specialization: "Neonatologist",
					qualification: "MBBS FCPS",
					experience: "5",
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
