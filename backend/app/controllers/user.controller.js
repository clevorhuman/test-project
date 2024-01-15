const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const data = req.body;
  User.findAll({
    where: {
      email: data.email,
      isDelete: false
    }
  })
    .then(existUsers => {
      if (existUsers.length == 0) {
        res.status(400).send({
          message: "This Email is not exist!"
        });
      } else {
        // bcryptjs.hash(data.password, process.env.salt, (error, hash) => {
          // if (existUsers[0].dataValues.password == hash) {
          if (existUsers[0].dataValues.password == data.password) {
            res.send(null);
          } else {
            res.status(500).send({
              message: "Password is not correct."
            });
          }
        // });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}

// Create and Save a new User
exports.create = (req, res) => {
  const data = req.body;

  // Validate request
  if (!data.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } else {
    // bcryptjs.hash(data.password, process.env.USER_SECRET_KEY, (error, hash) => {
    // bcryptjs.hash(data.password, 123456, (error, hash) => {
      // console.log('hash', hash);
      User.findOrCreate({
        where: { email: data.email },
        defaults: {
          // password: hash,
          password: data.password,
          status: 0,
          isDelete: false
        }
      }).then(([user, created]) => {
        if (created) {
          let token = jwt.sign(
            {
              id: user.id,
              email: data.email
            },
            "asfeasb12"
            // process.env.JWT_SECRET_KEY 
          );
          const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
          };
          res.status(201).cookie('token', token, options).json({
            success: true,
            user
          });
        } else {
          res.status(500).json({
            success: false,
            message: 'This email is exist'
          });
        }
      })
      .catch(err => {
        console.log(err.message);
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { email } = req.query;
  var condition = {
    isDelete: false
  };
  if ( email ) {
    condition.email = { [Op.like]: `%${email}%` };
  }

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  User.findByPk({
    id: id,
    isDelete: false
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const { id } = req.params;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  User.update({
    isDelete: true
  }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting User with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  User.update({
    isDelete: true
  }, {})
    .then(num => {
      if (num == 1) {
        res.send({
          message: "All Users were deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete All Users.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting All Users."
      });
    });
};
