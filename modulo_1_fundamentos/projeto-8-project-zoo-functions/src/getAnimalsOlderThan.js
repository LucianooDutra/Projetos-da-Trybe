const data = require('../data/zoo_data');

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
// }

// utilizo o object Destructuring
const { species } = data;

// .find, procura o 1° elemento que tem o nome passado.
// .every, retorna um valor booleano, true se todos satisfazer uma condição ou false se ao menos um não satisfaz.
const getAnimalsOlderThan = (animal, age) =>
  species
    .find((specie) => specie.name === animal)
    .residents.every((nome) => nome.age >= age);

module.exports = getAnimalsOlderThan;
