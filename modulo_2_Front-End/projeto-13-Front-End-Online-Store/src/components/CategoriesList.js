import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.createList();
  }

  createList = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { handleCategoryClick } = this.props;
    return (
      <div>
        <ul>
          { categories.map((category) => (
            <button
              type="button"
              data-testid="category"
              key={ category.id }
              id={ category.id }
              onClick={ handleCategoryClick }
            >
              { category.name }
            </button>
          ))}
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoriesList;
