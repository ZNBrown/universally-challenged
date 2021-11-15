const express = require('express');
const router = express.Router();
const scoreController = require('../controller/ScoreController')



//Score
router.get('/scores', scoreController.index)
router.get('/scores/:id', scoreController.show)
router.post('/scores', scoreController.create)





module.exports = router;