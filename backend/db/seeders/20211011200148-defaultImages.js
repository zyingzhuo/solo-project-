'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [{
      spotId:1,
      url:'https://a0.muscache.com/im/pictures/27959272/b1cc8e1d_original.jpg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      spotId:2,
      url:'https://a0.muscache.com/im/pictures/4c34b726-ebf0-404f-9425-82a252c03eeb.jpg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      spotId:3,
      url:"https://a0.muscache.com/im/pictures/88f9b0c4-489d-4dc5-93ca-0564dbcf7d35.jpg?im_w=1200",
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
    return queryInterface.bulkDelete('Images', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
