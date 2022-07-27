import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

function Filters() {
  const {
    setListFilterByName,
    editableColumnFilter,
    setDataFilters,
    dataFilters: { idFilter, filters },
    ListFilterByName: { filterByName },
    setFilterDelete,
    setFilterDeleteAll,
  } = useContext(Context);
  const [valor, setValor] = useState(0);
  const [columnFilter2, setColumnFilter2] = useState(editableColumnFilter[0]);
  const [comparisonFilter2, setComparisonFilter2] = useState('maior que');

  return (
    <div>
      <div>
        <input
          type="text"
          value={ filterByName.name }
          data-testid="name-filter"
          placeholder="Nome do Planeta"
          onChange={ ({ target: { value } }) => {
            setListFilterByName((prevState) => ({
              ...prevState,
              filterByName: { name: value.toLowerCase() },
            }));
          } }
        />
      </div>
      <div>
        <label
          htmlFor="column"
        >
          Coluna
          <select
            id="column"
            data-testid="column-filter"
            value={ columnFilter2 }
            onChange={ (e) => setColumnFilter2(e.target.value) }
          >
            {
              editableColumnFilter.map((option) => (
                <option key={ option }>{ option }</option>
              ))
            }
          </select>
        </label>
      </div>
      <div>
        <label
          htmlFor="operation"
        >
          Operador
          <select
            id="operation"
            data-testid="comparison-filter"
            value={ comparisonFilter2 }
            onChange={ (e) => setComparisonFilter2(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
      </div>
      <div>
        <label
          htmlFor="filter_value"
        >
          Valor
          <input
            type="number"
            data-testid="value-filter"
            id="filter_value"
            value={ valor }
            onChange={ (e) => setValor(e.target.value) }
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setDataFilters((prevState) => ({
              ...prevState,
              idFilter: {
                ...prevState.idFilter,
                id: prevState.idFilter.id + 1,
              },
            }));
            setDataFilters((prevState) => ({
              ...prevState,
              filters: [
                ...prevState.filters,
                {
                  columnFilter: columnFilter2,
                  comparisonFilter: comparisonFilter2,
                  valueFilter: valor,
                  id: idFilter.id + 1,
                },
              ],
            }));
            setColumnFilter2(editableColumnFilter[1]);
            // console.log(editableColumnFilter);
          } }
        >
          Filtrar
        </button>
      </div>
      <div>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setFilterDeleteAll([]) }
        >
          Remover todas filtragens
        </button>
      </div>
      <div>
        {filters.map((filter, i) => {
          const { columnFilter, comparisonFilter, valueFilter, id } = filter;
          return (
            <div
              key={ i }
              data-testid="filter"
            >
              <span>
                {`${columnFilter} ${comparisonFilter} ${valueFilter}`}
              </span>
              <button
                type="button"
                onClick={ () => setFilterDelete(id) }
              >
                x
              </button>
            </div>
          );
        }) }
      </div>
    </div>
  );
}

export default Filters;
