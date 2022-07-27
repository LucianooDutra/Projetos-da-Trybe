import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromQuery } from '../services/api';

class ProductsDetails extends React.Component {
  state = {
    productPrice: 0,
    productName: '',
    productImage: '',
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const { match: { params: { id } } } = this.props;
    const result = await getProductsFromQuery(id);
    const { title, thumbnail, price } = result;
    this.setState({
      productPrice: price,
      productName: title,
      productImage: thumbnail,
    });
  }

  render() {
    const { productPrice, productName, productImage } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <img src={ productImage } alt={ productName } />
        <h2 data-testid="product-detail-name">{ productName }</h2>
        <h5>{ productPrice }</h5>
        <button
          name={ productName }
          id={ productPrice }
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ addToCart }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductsDetails;
