var express = require('express');
var router = express.Router();
var devskillsCtrl = require('../controllers/devskills')

router.get('/', devskillsCtrl.index)

router.get('/new', devskillsCtrl.new)

router.get('/:id', devskillsCtrl.show)

router.get('/:id/edit', devskillsCtrl.edit)

router.post('/', devskillsCtrl.create)

router.delete('/:id', devskillsCtrl.delete)

router.put('/:id', devskillsCtrl.update)

module.exports = router;
