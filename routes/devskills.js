var express = require('express');
var router = express.Router();
var devskillsCtrl = require('../controllers/devskills')

router.get('/', devskillsCtrl.index)

router.get('/:id', devskillsCtrl.show)

module.exports = router;
