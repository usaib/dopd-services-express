module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			mrNumber: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			contactNumber: {
				type: Sequelize.STRING
			},
			fatherName: {
				type: Sequelize.STRING
			},
			age: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.ENUM("Male", "Female")
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable("users")
};
