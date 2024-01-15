module.exports = app => {
  const userRoute = require("./user.routes.js");

  app.use('/api/users', userRoute);
};