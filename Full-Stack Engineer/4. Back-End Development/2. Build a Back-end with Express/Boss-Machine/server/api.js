const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions');
const meetingsRouter = require('./meetings');
const ideasRouter = require('./ideas');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;