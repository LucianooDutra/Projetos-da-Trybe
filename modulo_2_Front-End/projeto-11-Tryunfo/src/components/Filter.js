import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const {
      onFilterChange,
      filterName,
      filterRare,
      filterTrunfo,
      desabilitar,
    } = this.props;

    return (
      <div className="filtroGeral">
        <div>
          <label htmlFor="filtroNome">
            Nome :
            <input
              type="text"
              name="filterName"
              className="filtrarNome"
              id="filtroNome"
              data-testid="name-filter"
              value={ filterName }
              onChange={ onFilterChange }
              disabled={ desabilitar }
            />
          </label>
        </div>
        <div>
          <label htmlFor="filtroRaridade">
            Raridade :
            <select
              name="filterRare"
              className="raridade"
              id="filtroRaridade"
              data-testid="rare-filter"
              value={ filterRare }
              onChange={ onFilterChange }
              disabled={ desabilitar }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="Super Trunfo">
            <input
              labelEnd
              type="checkbox"
              name="filterTrunfo"
              className="filtroTrunfo"
              id="SuperTrunfo"
              data-testid="trunfo-filter"
              checked={ filterTrunfo }
              onChange={ onFilterChange }
            />
            Super Trybe Trunfo
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  desabilitar: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
