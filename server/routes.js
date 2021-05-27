const express = require('express');

const ListController = require('./src/controllers/ListController');
const CardsController = require('./src/controllers/CardsController');

const router = express.Router();

router.use('/api/lists', ListController);
router.use('/api/cards', CardsController);

module.exports = router;
