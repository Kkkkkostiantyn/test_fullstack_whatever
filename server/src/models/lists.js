const { Model, STRING, INTEGER } = require("sequelize");
const sequelize = require("../db/db");
class Lists extends Model {}

Lists.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Lists;
