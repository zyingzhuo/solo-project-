'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [{
      userId:1,
      city:'Vegas',
      name: "high rise strip view penthouse",
      price:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      userId:2,
      city: 'vegas',
      name:'desert diamond house Mcdonald uphills overlooking',
      price:200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      userId:3,
      city: 'vegas',
      name: 'pet friendly, Summerline cozy condo',
      price:300,
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
    return queryInterface.bulkDelete('Spots', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
