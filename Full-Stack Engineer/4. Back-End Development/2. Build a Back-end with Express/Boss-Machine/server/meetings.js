const express = require('express');
const meetingsRouter = express.Router();

const {createMeeting, getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
  res.status(200).send(getAllFromDatabase('meetings'))
});

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting();
  addToDatabase('meetings', newMeeting);
  res.status(201).send(newMeeting)
});

meetingsRouter.delete('/', (req, res, next) => {
  const deletedMeetings = deleteAllFromDatabase('meetings');
  res.status(204).send(deletedMeetings)
});

module.exports = meetingsRouter;