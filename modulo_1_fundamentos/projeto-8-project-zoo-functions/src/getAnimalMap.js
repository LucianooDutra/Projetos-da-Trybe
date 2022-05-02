const data = require('../data/zoo_data');

// function getAnimalMap(options) {
//   // seu código aqui
// }

// utilizo o object Destructuring
const { species } = data;

// função pra juntar os dados de localização e nome em um objeto dividido por arrays.
const resultadoLocalizacaoNome = () =>
  species.reduce(
    (acc, { location, name }) =>
      // O operador in retorna  true se a propriedade especificada estiver no objeto especificado ou na sua cadeia de protótipo (prototype chain) desde objeto.
      ([location] in acc
        ? { ...acc, [location]: [...acc[location], name] }
        : { ...acc, [location]: [name] }),
    {},
  );

console.log(resultadoLocalizacaoNome());

// module.exports = getAnimalMap;
