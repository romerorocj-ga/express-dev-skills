const Devskill = require('../models/devskill')

module.exports = {
    index,
    show
}
function show(req, res) {
    res.render('devskills/show', {
        devskill: Devskill.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll()
    });
  }