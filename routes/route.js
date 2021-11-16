const express = require('express');
const router = express.Router();
const scoreController = require('../controller/ScoreController')



//Create
router.post('/scores', scoreController.create)
//Read
router.get('/scores', scoreController.index)
router.get('/scores/:id', scoreController.show)
//Update
router.patch('/scores/:id', scoreController.update)
//Delete
router.delete('/scores/:id', scoreController.del)


module.exports = router;