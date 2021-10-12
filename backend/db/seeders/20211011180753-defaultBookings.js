'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [{
     spotId:1,
     userId:1,
     startDate: '2021-11-10',
     endDate: '2021-11-20',
     createdAt: new Date(),
    updatedAt: new Date()
    },
    {
     spotId:2,
     userId:3,
     startDate:'2021-11-11',
     endDate:'2021-11-15',
     createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      spotId:3,
      userId:2,
      startDate:'2021-11-15',
      endDate:'2021-11-17',
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
