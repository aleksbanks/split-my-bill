module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          topicName: "TOPIC 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "TOPIC 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "TOPIC 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "TOPIC 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "TOPIC 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "TOPIC 6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Topics", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
