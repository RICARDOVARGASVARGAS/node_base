const getAge = require("get-age");

const getAgeBirthday = (birthday) => {
  if (!birthday) return new Error("Birthday is required");
  return getAge(birthday);
};

module.exports = {
  getAgeBirthday,
};
