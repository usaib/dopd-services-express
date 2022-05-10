module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define(
		"users",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},

			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			mrNumber: {
				type: DataTypes.STRING,
				allowNull: false
			},
			age: {
				type: DataTypes.STRING
			},
			gender: {
				type: DataTypes.ENUM("Male", "Female")
			},
			fatherName: {
				type: DataTypes.STRING
			},
			contactNumber: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			scopes: {
				withSecretColumns: {
					attributes: { include: ["password"] }
				}
			}
		}
	);
	users.associate = function (models) {
		// associations can be defined here
	};

	return users;
};
