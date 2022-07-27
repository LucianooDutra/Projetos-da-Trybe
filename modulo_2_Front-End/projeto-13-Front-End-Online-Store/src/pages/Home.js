import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import ProductsCard from '../components/ProductsCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  state = {
    inputValue: '',
    products: [],
    selectedCategoryId: '',
  }

  // componentDidMount() {
  //   this.createList();
  // }

  // createList = async () => {
  //   const categories = await getCategories();
  //   this.setState({ categories });
  // }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputValue: value });
  }

  handleCategoryClick = async ({ target }) => {
    const { id } = target;
    const { inputValue, selectedCategoryId } = this.state;
    this.setState({ selectedCategoryId: id });
    const
      fetchCategory = await
      getProductsFromCategoryAndQuery(selectedCategoryId, inputValue);
    // console.log(fetchCategory);
    this.setState({ products: fetchCategory.results });
    console.log(fetchCategory.results);
    fetchCategory.results
      .filter((categoryId) => categoryId === fetchCategory.results.category_id);
  }

  handleSearchClick = async () => {
    const { inputValue, selectedCategoryId } = this.state;
    const
      fetchProducts = await getProductsFromCategoryAndQuery(selectedCategoryId,
        inputValue);
    this.setState({ products: fetchProducts.results });
  }

  render() {
    const { products } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearchClick }
        >
          Buscar
        </button>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <CategoriesList handleCategoryClick={ this.handleCategoryClick } />
        <section>
          { products.length === 0
            ? <h4>Nenhum produto foi encontrado</h4>
            : products.map((product) => (
              <ProductsCard
                name={ product.title }
                image={ product.thumbnail }
                price={ product.price }
                key={ product.id }
                addToCart={ addToCart }
                id={ product.id }
              />
            ))}
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;

export default Home;
