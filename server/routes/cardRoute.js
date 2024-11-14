const express = require('express');
const router = express.Router();
const getCards = require('../Controller/cardscontroller');

router.get('/getCards', getCards);

module.exports = router;
