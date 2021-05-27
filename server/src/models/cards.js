const { Model, STRING, INTEGER } = require("sequelize");
const sequelize = require("../db/db");

class Cards extends Model {}

Cards.init(
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

module.exports = Cards;
