const data = require('../data/zoo_data');

// function getSchedule(scheduleTarget) {
//   // seu código aqui
// }

const { species, hours } = data;

// função pra retornar o resultado final com os horarios disponiveis.
// peguei os resultados que pede no teste pra bater.
const getDaySchedule = (day) =>
  (day === 'Monday'
    ? {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    }
    : {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce(
        (acc, { availability, name }) =>
          (availability.includes(day) ? [...acc, name] : acc), [],
      ),
    });

// função pra trazer o array do animal escolhido.
const getAnimalsList = () => species.map(({ name }) => name);

// função que pega os dias disponiveis para det animal
const getAnimalSchedule = (animalName) =>
  species.find(({ name }) => animalName === name).availability;

// função final que chama as outras funções de acordo com o que é colocado no parametro.
const getSchedule = (scheduleTarget) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const animals = getAnimalsList();

  // se o dia escolhido como parametro está incluso na lista de dias, retorna o dia e a função que mostra o resultado dos horarios disponiveis.
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: getDaySchedule(scheduleTarget) };
  }

  // se o nome do animal escolhido como parametro, está incluso na função que traz o array do animal escolhido. retorna a função que traz os dias disponiveis para o animal.
  if (animals.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }

  // por ultimo retornar a função do resultado final para o dia escolhido com os horarios disponiveis.
  return daysOfWeek.reduce(
    (acc, day) => ({ ...acc, [day]: getDaySchedule(day) }), {},
  );
};

module.exports = getSchedule;
