// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   password: "admin",
//   host: "localhost",
//   port: 5432,
//   database: "fullstack_whatever",
// });
//
// module.exports = pool;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "postgres://postgres:admin@localhost:5432/trello"
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
