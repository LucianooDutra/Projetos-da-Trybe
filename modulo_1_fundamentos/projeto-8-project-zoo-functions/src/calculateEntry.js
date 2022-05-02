const data = require('../data/zoo_data');

// function countEntrants(entrants) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// Função que verifica e divide em cada local a quantidade de pessoas de acordo com a sua idade.
const countEntrants = (entrants = []) => {
  const divisaoPorIdade = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    if (age >= 50) {
      divisaoPorIdade.senior += 1;
    } else if (age >= 18 && age < 50) {
      divisaoPorIdade.adult += 1;
    } else {
      divisaoPorIdade.child += 1;
    }
  });
  return divisaoPorIdade;
};

// utilizo o object Destructuring
const { prices } = data;

// constante pra pegar o resultado da função countEntrants(), e multiplica a quantidade de pessoas pelo preço da entrada.
const calculateEntry = (entrants) => {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entradaIdade = countEntrants(entrants);
  const valorCrianca = entradaIdade.child * prices.child;
  const valorAdulto = entradaIdade.adult * prices.adult;
  const valorIdoso = entradaIdade.senior * prices.senior;

  return valorCrianca + valorAdulto + valorIdoso;
};

module.exports = { calculateEntry, countEntrants };
