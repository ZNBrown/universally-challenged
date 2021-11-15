const express = require('express');
const router = express.Router();
const scoreController = require('../controller/ScoreController')



//Score
router.get('/allScores', scoreController.index)
router.get('/:score', scoreController.show)




module.exports = router;