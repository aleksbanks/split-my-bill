module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "ivanov",
          password: "ivanov",
          email: "ivanov@mail.ru",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "petrov",
          password: "petrov",
          email: "petrov@mail.ru",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "babayan",
          password: "babayan",
          email: "babayan@mail.ru",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
