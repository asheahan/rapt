const router = require('express').Router();

const articleHandlers = require('./articles');
const statusHandlers = require('./status');

module.exports = app => {
  // router.get('/articles', articleHandlers)

  app.use('/api', router);
};
