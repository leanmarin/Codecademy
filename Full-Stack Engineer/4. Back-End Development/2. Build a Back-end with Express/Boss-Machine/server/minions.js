const express = require('express');
const minionsRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  const findMinion = getFromDatabaseById('minions', id);
  if (findMinion) {
    req.findMinion = findMinion;
    next()
  } else {
    res.status(404).send()
  }
});

//GET ALL
minionsRouter.get('/', (req, res, next) => {
  res.status(200).send(getAllFromDatabase('minions'))
});

//GET BY ID
minionsRouter.get('/:minionId', (req, res, next) => {
  res.status(200).send(req.findMinion);
});

//POST
minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
});

//PUT BY ID
minionsRouter.put('/:minionId', (req, res, next) => {
  let updateMinion = updateInstanceInDatabase('minions', req.body);
  res.status(200).send(updateMinion);
});

//DELETE BY ID
minionsRouter.delete('/:minionId', (req, res, next) => {
  const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId);
  if (deletedMinion) {
    res.status(204).send();
  } else {
    res.status(500).send()
  }
});



//WORK
//GET
minionsRouter.get('/:minionId/work', (req, res, next) => {
  /* const workMinionId = [getFromDatabaseById('work', req.params.minionId)]; */
  const workMinionId = getAllFromDatabase('work').filter((singleWork) => {
    return singleWork.minionId === req.params.minionId;
  });
  res.status(200).send(workMinionId);
});

//POST
minionsRouter.post('/:minionId/work', (req, res, next) => {
  const workToAdd = req.body;
  workToAdd.minionId = req.params.minionId;
  const createdWork = addToDatabase('work', workToAdd);
  res.status(201).send(createdWork)
});

minionsRouter.param('workId', (req, res, next, id) => {
  const work = getFromDatabaseById('work', id);
  if (work) {
    req.work = work;
    next()
  } else {
    res.status(404).send();
  }
});

//PUT
minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
  if (req.params.minionId === req.body.minionId) {
    const updateWorkId = updateInstanceInDatabase('work', req.body);
    res.status(200).send(updateWorkId);
  } else {
    res.status(400).send()
  }
});

//DELETE
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('work', req.params.workId);
  if (deleted) {
    res.status(204)
  } else {
    res.status(500)
  }
  res.send();
})

module.exports = minionsRouter;