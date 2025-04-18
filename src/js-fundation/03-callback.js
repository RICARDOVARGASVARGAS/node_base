const users = [
  {
    id: 1,
    name: "Ricardo",
  },
  {
    id: 2,
    name: "Ales",
  },
  {
    id: 3,
    name: "Julia",
  },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`User not found with ID: ${id}`);
  }

  return callback(null, user);
}

module.exports = {
  getUserById,
};
