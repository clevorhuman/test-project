const db = require("../models");
const Job = db.jobs;
const Op = db.Sequelize.Op;

// Create and Save a new Job
exports.create = (req, res) => {
  // Create a Job
  const job = {
    ...req.body,
    isDelete: false
  };

  // Save Job in the database
  Job.create(job)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Job."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { searchKey, filter } = req.query;
  var condition = {}, offset = 0, limit = 0;
  if (searchKey) {
    condition.title = { [Op.like]: `%${searchKey}%` };
  }
  if (filter && filter != 2) {
    condition.type = filter;
  }
  console.log(condition);
  Job.findAndCountAll({
    where: condition,
    order: [
      ['createdAt', 'DESC'],
    ]
  }).then((count, rows) => {
    res.send({
      data: rows,
      total: count
    });
  }).catch(err => {
    res.status(500).send({
      message: 
        err.message | "Some error occurred while retrieving jobs."
    });
  });
};

// Find a single Job with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Job.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Job with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Job with id=" + id
      });
    });
};

// Update a Job by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Job.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Job was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Job with id=" + id
      });
    });
};

// Delete a Job with the specified id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Job.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Job was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Job with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  Job.delete({
      where: {},
      truncate: false
  })
    .then(() => {
      res.send({ message: "This job was deleted successfully!" });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing this job."
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Job.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all jobs."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Job.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    });
};