const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const users = require('../sample.json');


router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const {name, age, gender} = req.body;
  if(name && age && gender){
    const id = users.length + 1;
    const newUser = {id, ...req.body};
    users.push(newUser);
    res.json(users);
  }else{
    res.status(500).json('There was an error');
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {name, age, gender} = req.body;
  if(name && age && gender){
    _.each(users, (user, i) => {
      if(user.id == id){
        user.name = name,
        user.age = age,
        user.gender = gender
      }
    });
    res.json(users);
  }else{
    res.status(500).json('There was an error');
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  _.each(users, (user, i) => {
    if(user.id == id){
      users.splice(i, 1);
    }
  });
  res.send(users);
})

module.exports = router;