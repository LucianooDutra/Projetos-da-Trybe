const data = require('../data/zoo_data');

// function getSpeciesByIds(ids) {
//   // seu código aqui
// }

const { species } = data;

const getSpeciesByIds = (...id) => species.filter((tipo) => id.includes(tipo.id));

module.exports = getSpeciesByIds;
