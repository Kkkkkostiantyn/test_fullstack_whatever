const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "postgres://postgres:admin@localhost:5432/trello"
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
