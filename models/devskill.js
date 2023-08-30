const devskills = [
    {id: 125223, devskill: 'HTML', done: true},
    {id: 127904, devskill: 'CSS', done: true},
    {id: 139608, devskill: 'Javascript', done: false},
    {id: 145008, devskill: 'Node.JS', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return devskills;
  }

  function getOne(id) {
    id = parseInt(id)
    return devskills.find(devskill => devskill.id === id)
  }