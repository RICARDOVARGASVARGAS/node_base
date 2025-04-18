// 01-template
// const {
//   template1: plantillaPrincipal,
//   plantilla2,
//   template3,
// } = require("./js-fundation/01-template");

// console.log(plantillaPrincipal);
// console.log(plantilla2);
// // console.log(template3);

// 02-destructuring
// require("./js-fundation/02-destructuring")

// 03-callbacks
// const { getUserById } = require("./js-fundation/03-callback");
// const id = 6;

// getUserById(id, (err, user) => {
//   if (err) {
//     throw new Error(err)
//   }

//   console.log(user);
// });

// 04-arrow
// const { getUserById } = require("./js-fundation/04-arrow");
// const id = 9;

// getUserById(id, (err, user) => {
//   err ? console.log(err) : console.log(user);
// });

// 05-factory
// const { buildMakePerson } = require("./js-fundation/05-factory");
// const { getAgeBirthday, getUUID } = require("./plugins/index");

// const buildPerson = buildMakePerson({ getUUID, getAgeBirthday });

// const obj = {
//   name: "Ricardo",
//   birthday: "1999-07-13",
// };

// const person = buildPerson(obj);

// console.log(person);

// 06-promises
const { getPokemonById } = require("./js-fundation/06-promises");

getPokemonById(2).then(pokemon => {
  console.log(pokemon);
})


