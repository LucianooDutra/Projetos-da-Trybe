const data = require('../data/zoo_data');

// function getEmployeeByName(employeeName) {
//   // seu código aqui
// }

// utilizo o object Destructuring
const { employees } = data;

// defino minha função utilizando o Default Parameters, caso não passe parametro, ele será ''.
const getEmployeeByName = (employeeName = '') => {
  if (employeeName === '') {
    return {};
  }

  // .find, procura o 1° elemento que tem o nome ou sobrenome passado.
  return employees.find(
    (funcionario) =>
      funcionario.firstName === employeeName || funcionario.lastName === employeeName,
  );
};

module.exports = getEmployeeByName;
