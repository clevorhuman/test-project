module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  router = require("express").Router();

  router.get('/', users.findAll);
  router.get('/:id', users.findOne);
  router.post('/', users.create);
  router.put('/:id', users.update);
  router.delete('/:id', users.delete);
  router.delete('/', users.deleteAll);
  router.post('/login', users.login);

  app.use('/api/users', router);

};