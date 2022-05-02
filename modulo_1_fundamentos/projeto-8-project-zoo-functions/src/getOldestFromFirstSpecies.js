const data = require('../data/zoo_data');

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// utilizo o object Destructuring
const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  // constante que busca pelo id do funcionario, o id dos animais que ele está responsavel.
  const [idAnimal] = employees.find((funcionario) => id === funcionario.id).responsibleFor;

  // contante que busca, de acordo com a id pego da const passada, e compara as idades entre os animais pra pegar o mais velho.
  const animalMaisVelho = species
    .find((especie) => especie.id === idAnimal)
    .residents.reduce((acc, resident) => (resident.age > acc.age ? resident : acc));

  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
};

module.exports = getOldestFromFirstSpecies;
