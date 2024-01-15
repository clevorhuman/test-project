module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
      companyName: {
        type: Sequelize.STRING
      },
      hiringManagerName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      salaryAmount: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.BOOLEAN
      },
      createdDate: {
        type: Sequelize.DATE
      },
      expirationDate: {
        type: Sequelize.DATE
      },
      isDelete: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Job;
  };