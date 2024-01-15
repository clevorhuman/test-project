module.exports = (app) => {
  const jobs = require("../controllers/job.controller.js");

  router = require("express").Router();

  router.get('/', jobs.findAll);
  router.get('/:id', jobs.findOne);
  router.post('/', jobs.create);
  router.put('/:id', jobs.update);
  router.delete('/:id', jobs.delete);
  router.delete('/', jobs.deleteAll);

  app.use('/api/jobs', router);

};