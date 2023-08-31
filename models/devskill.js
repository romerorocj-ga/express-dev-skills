const devskills = [
    {id: 125223, devskill: 'HTML', done: true},
    {id: 127904, devskill: 'CSS', done: true},
    {id: 139608, devskill: 'Javascript', done: false},
    {id: 145008, devskill: 'Node.JS', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, updatedDevskill) {
    id = parseInt(id);
    const devskill = devskills.find(devskill => devskill.id === id);
    Object.assign(devskill, updatedDevskill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = devskills.findIndex(devskill => devskill.id === id);
    devskills.splice(idx, 1);
  }
  
  function create(devskill) {
    devskill.id = Date.now() % 1000000;
    devskill.done = false;
    devskills.push(devskill);
  }
	
  function getAll() {
    return devskills;
  }

  function getOne(id) {
    id = parseInt(id)
    return devskills.find(devskill => devskill.id === id)
  }