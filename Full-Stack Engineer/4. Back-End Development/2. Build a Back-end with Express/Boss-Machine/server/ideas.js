const express = require('express');
const ideasRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

ideasRouter.param('ideaId', (req, res, next, id) => {
  const findIdea = getFromDatabaseById('ideas', id);
  if (findIdea) {
    req.findIdea = findIdea;
    next()
  } else {
    res.status(404).send()
  }
});

//GET ALL
ideasRouter.get('/', (req, res, next) => {
  res.status(200).send(getAllFromDatabase('ideas'))
});

//GET BY ID
ideasRouter.get('/:ideaId', (req, res, next) => {
  res.status(200).send(req.findIdea);
});

//POST
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

//PUT BY ID
ideasRouter.put('/:ideaId', (req, res, next) => {
  const updateIdea = updateInstanceInDatabase('ideas', req.body);
  res.status(200).send(updateIdea)
});

//DELETE BY ID
ideasRouter.delete('/:ideaId', (req, res, next) => {
  const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
  res.status(204).send(deletedIdea);
})

module.exports = ideasRouter;