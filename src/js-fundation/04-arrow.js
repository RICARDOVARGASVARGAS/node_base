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
    const user = users.find ((user) => user.id === id);

    !user ? callback(`User not found with ID: ${id}`) : callback(null, user)
  }
  
  module.exports = {
    getUserById,
  };
  