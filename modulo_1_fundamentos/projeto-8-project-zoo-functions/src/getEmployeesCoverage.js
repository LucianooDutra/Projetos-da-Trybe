const data = require('../data/zoo_data');

// function getEmployeesCoverage() {
//   // seu código aqui
// }

// utilizo o object Destructuring
const { species, employees } = data;

// função pra pegar o nome do animal pelo responsavel por ele.
const getAnimalNames = (responsableAnimals) =>
  responsableAnimals.map(
    (animalId) => species.find(({ id }) => animalId === id).name,
  );

// função pra pegar a localização do animal pelo responsavel por ele.
const getLocations = (responsableAnimals) =>
  responsableAnimals.map(
    (animalId) => species.find(({ id }) => animalId === id).location,
  );

// função que dar a resposta final
const getEmployeeInfo = (searchToken) => {
  const { id, firstName, lastName, responsibleFor } = employees.find(
    (employee) => Object.values(employee).includes(searchToken),
  );

  if (typeof id === 'undefined') {
    throw new Error('Informações inválidas');
  }

  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalNames(responsibleFor),
    locations: getLocations(responsibleFor),
  };
};

// busca se ao menos 1 id está incluso dentro do objeto.
const isTokenValid = (searchToken) =>
  employees.some((employee) => Object.values(employee).includes(searchToken));

// função principal que junta as outras. pega o nome, sobrenome ou id passado e faz as comparações.
const getEmployeesCoverage = (options) => {
  if (typeof options === 'undefined') {
    return employees.map(({ id }) => getEmployeeInfo(id));
  }
  // constante que salva os valores que foram colocados como parametro.
  const [searchToken] = Object.values(options);

  // faz a comparação do valor guardado na minha constante pra saber se está inclusa dentro do objeto.
  if (isTokenValid(searchToken) === false) {
    throw new Error('Informações inválidas');
  }

  // retorna a função que tráz o resultado.
  return getEmployeeInfo(searchToken);
};

module.exports = getEmployeesCoverage;
