const data = require('../data/zoo_data');

// function countAnimals(animal) {
//   // seu código aqui
// }

const { species } = data;

const countAnimals = ({ specie: nomeEspecie, sex } = {}) => {
  let contagem;

  if (typeof nomeEspecie === 'undefined') {
    contagem = species.reduce(
      (total, specie) => ({ ...total, [specie.name]: specie.residents.length }),
      {},
    );
  } else if (typeof sex === 'undefined') {
    contagem = species.find((specie) => specie.name === nomeEspecie).residents
      .length;
  } else {
    contagem = species
      .find((specie) => specie.name === nomeEspecie)
      .residents.filter((resident) => resident.sex === sex).length;
  }
  return contagem;
};

module.exports = countAnimals;
