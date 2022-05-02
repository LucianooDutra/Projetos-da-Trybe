const data = require('../data/zoo_data');

// function isManager(id) {
//   // seu código aqui
// }

// function getRelatedEmployees(managerId) {
//   // seu código aqui
// }

// // utilizo o object Destructuring
const { employees } = data;

// .Some, saber se ao menos 1 elemento satisfaz uma condição, se ele inclui um id dentro do manager significa que ele é gerente.
// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
const isManager = (id) =>
  employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  // 1° condição, se não for gerente emite a mensagem de erro.
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  // 2° condição, se for gerente, irá trazer todos elementos que satisfaz a condição, a condição se for true, .includes. Por fim traz com o .map o first e last name.
  return employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
