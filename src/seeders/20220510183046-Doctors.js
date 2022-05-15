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
					rating: "4.1",
					gender: "Male",
					imageUrl:
						"https://health.hamariweb.com/Images/DocImages/Dr-Anis-A-Allana_65514.jpeg",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "Zeeshan Shafqat",
					email: "zeeshanshafqat@gmail.com",
					specialization: "Neonatologist",
					qualification: "MBBS FCPS",
					experience: "5",
					rating: "4.9",
					gender: "Male",
					imageUrl:
						"https://d3313lwq5y3sh2.cloudfront.net/assets/photos/000/234/071/original/Dr__Ali_Faisal_Saleem.png?1601547560",
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
