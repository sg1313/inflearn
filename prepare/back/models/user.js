module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // id가 기본적으로 들어있다. id는 입력 안해도 됨
      email: {},
      nickname: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  User.associate = (db) => {};
  return User;
};
