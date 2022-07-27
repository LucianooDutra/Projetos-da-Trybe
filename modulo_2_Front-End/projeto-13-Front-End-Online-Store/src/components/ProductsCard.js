import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsCard extends React.Component {
  render() {
    const { name, image, price, id, addToCart } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/products-details/${id}` }
          data-testid="product-detail-link"
        >
          <div>
            <h4>{ name }</h4>
            <img src={ image } alt={ name } />
            <span>
              Preço:
              { price.toFixed(2) }
            </span>
          </div>
        </Link>
        <button
          name={ name }
          id={ price.toFixed(2) }
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductsCard;
