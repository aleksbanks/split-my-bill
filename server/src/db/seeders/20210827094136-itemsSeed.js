"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "Салат",
          price: 100,
          number: 2,
          sum: 200,
          bill_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Спагетти",
          price: 200,
          number: 1,
          sum: 200,
          bill_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мидии",
          price: 300,
          number: 2,
          sum: 600,
          bill_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Пиво",
          price: 600,
          number: 1,
          sum: 600,
          bill_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Items", null, {});
  },
};
