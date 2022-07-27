import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import planetsApi from '../Components/PlanetsAPI';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByPlanets, setFilterByPlanets] = useState([]);
  const [ListFilterByName, setListFilterByName] = useState({
    filterByName: {
      name: '',
    },
  });

  const [columnFilterOrigin, setColumnFilterOrigin] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [editableColumnFilter, setEditableColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [dataFilters, setDataFilters] = useState({
    idFilter: {
      id: 0,
    },
    filters: [],
  });

  const [filterDelete, setFilterDelete] = useState(0);
  const [filterDeleteAll, setFilterDeleteAll] = useState([]);

  // hook que faz a requisição de minha API
  useEffect(() => {
    planetsApi('https://swapi-trybe.herokuapp.com/api/planets/').then((data) => {
      // console.log(data.results);
      const { results } = data;
      setPlanets(results);
      setFilterByPlanets(results);
    });
  }, []);

  // hook que faz minha filtragem pelo nome do planeta
  useEffect(() => {
    const { filterByName } = ListFilterByName;
    if (filterByName.name !== '') {
      const filteredName = planets.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        // console.log(planetName);
        return planetName.includes(filterByName.name);
      });
      // console.log(filteredName);
      setFilterByPlanets(filteredName);
    } else {
      setFilterByPlanets(planets);
    }
  }, [ListFilterByName, planets]);

  const filtering = () => {
    const { filters } = dataFilters;
    if (filters.length > 0) {
      let planetsEdit = planets;
      // console.log('optionsForFilters', editableColumnFilter);
      // primeira função que faz a busca de acordo com o filtro de operador
      filters.forEach((filter) => {
        const { columnFilter, comparisonFilter, valueFilter } = filter;
        switch (comparisonFilter) {
        case 'maior que':
          planetsEdit = planetsEdit.filter(
            (planet) => Number(planet[columnFilter]) > Number(valueFilter),
          );
          break;
        case 'menor que':
          planetsEdit = planetsEdit.filter(
            (planet) => Number(planet[columnFilter]) < Number(valueFilter),
          );
          break;
        case 'igual a':
          planetsEdit = planetsEdit.filter(
            (planet) => Number(planet[columnFilter]) === Number(valueFilter),
          );
          break;
        default:
          break;
        }
        // filtro pra que seja retornado as opções diferentes da que escolhi
        // aqui pego o retorno pra jogar dentro das opções que irá renderizar
        setEditableColumnFilter(() => (
          editableColumnFilter.filter(
            (fill) => fill !== columnFilter,
          )
        ));
      });
      // console.log('1°' , editableColumnFilter);
      // retorno pra minha lista de planetas filtrados só aqueles que passou pelos filtros anteriores.
      setFilterByPlanets(planetsEdit);
      // se não tiver selecionado nenhum operador, vai executar o else
      // a lista de coluna será igual a inicial
    } else {
      setFilterByPlanets(planets);
      // console.log('2°', editableColumnFilter);
    }
    // console.log('3°', editableColumnFilter);
  };

  const del = () => {
    const { filters } = dataFilters;
    if (filterDelete !== 0) {
      setDataFilters((prevState) => ({
        ...prevState,
        filters: filters.filter(
          (fill) => fill.id !== filterDelete,
        ),
      }));

      const fill = (filters.filter(
        (filter) => filter.id === filterDelete,
      ));
      const result = fill[0].columnFilter;
      // console.log(result);
      // console.log(editableColumnFilter)
      setEditableColumnFilter([...editableColumnFilter, result]);
      // console.log(editableColumnFilter)
      setFilterDelete(0);
    }
  };

  useEffect(() => {
    filtering();
    del();
    // console.log('filterByPlanets:', filterByPlanets);
  }, [dataFilters, planets, columnFilterOrigin, filterDelete]);

  useEffect(() => {
    setDataFilters((prevState) => ({
      ...prevState,
      filters: [],
    }));
  }, [filterDeleteAll]);

  const stateContext = {
    planets,
    setPlanets,
    filterByPlanets,
    setListFilterByName,
    setColumnFilterOrigin,
    editableColumnFilter,
    setDataFilters,
    ListFilterByName,
    dataFilters,
    setFilterDelete,
    setFilterDeleteAll,
  };

  return (
    <main>
      <Context.Provider value={ stateContext }>
        {children}
      </Context.Provider>
    </main>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element,
};

ContextProvider.defaultProps = {
  children: {},
};

export default ContextProvider;
