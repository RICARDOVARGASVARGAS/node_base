const buildMakePerson = ({ getUUID, getAgeBirthday }) => {
  return ({ name, birthday }) => {
    return {
      uuid: getUUID(),
      name,
      birthday,
      age: getAgeBirthday(birthday),
    };
  };
};

module.exports = {
  buildMakePerson,
};
