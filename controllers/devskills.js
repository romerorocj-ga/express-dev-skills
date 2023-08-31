const Devskill = require('../models/devskill')

module.exports = {
    index,
    show,
    new: newDevskill,
    create,
    delete: deleteDevskill,
    edit,
    update
}


function update(req, res) {
    req.body.done = !!req.body.done;
    Devskill.update(req.params.id, req.body)
    res.redirect(`/devskills/${req.params.id}`)
  }
  
  function edit(req, res) {
    const devskill = Devskill.getOne(req.params.id)
    res.render('devskills/edit', {
      title: 'Edit Dev-Skill',
      devskill
    })
  }
  
  function deleteDevskill(req, res) {
    Devskill.deleteOne(req.params.id);
    res.redirect('/devskills');
  }
  
  function create(req, res) {
    console.log(req.body);
    Devskill.create(req.body);
    res.redirect('/devskills');
  }
  
  function newDevskill(req, res) {
    res.render('devskills/new', { title: 'New Devskill' });
  }
  
  function show(req, res) {
    res.render('devskills/show', {
      devskill: Devskill.getOne(req.params.id),
      title: 'Dev-Skill Details'
    });
  }
  
  function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll(),
      title: 'All Dev-Skills'
    });
  }