const Lists = require('./lists');
const Cards = require('./cards');

const models = {
    Lists,
    Cards
};

Lists.hasMany(Cards, {
    foreignKey: 'list_id',
    onDelete: 'CASCADE'
});

Cards.belongsTo(Lists, {
    foreignKey: 'list_id',
});

module.exports = models;

