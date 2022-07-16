const express = require('express');

const gameController = require('../controllers/wordgame');

const router = express.Router();

router.get('/',				gameController.getWordGame);
router.post('/checkWord',	gameController.checkWord);

module.exports = router;