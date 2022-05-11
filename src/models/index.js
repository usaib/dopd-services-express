const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const user = require("./user");
const token = require("./token");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		username: "root",
		password: "root",
		database: "digital_opd_v3",
		host: "localhost",
		dialect: "mysql"
	});
}

// sequelize.sync({ force: true });

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================

db.users.hasMany(db.tokens);
db.tokens.belongsTo(db.users);
db.users.hasMany(db.appointment_histories);
db.appointment_histories.belongsTo(db.doctors);
db.doctors.hasMany(db.appointment_histories);
db.appointment_histories.belongsTo(db.users);
db.appointment_histories.hasMany(db.diagnosed_disease_details);
db.diagnosed_disease_details.belongsTo(db.appointment_histories);

module.exports = db;
