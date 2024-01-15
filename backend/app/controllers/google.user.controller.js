const db = require("../models");
const GoogleUser = db.googleUsers;
var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { credentialRespose } = req.body;
  console.log(credentialRespose);
  if (!credentialRespose.authuser) {
    res.status(400).send({
      message: "Code is not exist!"
    });
  } else {
    GoogleUser.findOrCreate({
      where: { code: credentialRespose.authuser },
      defaults: {
        status: 0,
        isDelete: false
      }
    }).then(([user, created]) => {
      if (!user) {
        res.status(500).json({
          success: false,
          message: 'Register User is failed'
        });
      } else {
        let token = jwt.sign(
          {
            id: user.id,
            clientId: credentialRespose.authuser
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
      }
    })
  }
}
