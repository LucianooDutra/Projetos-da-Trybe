import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  state = {
    listProducts: [],
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({ listProducts: products });
    console.log(products);
  }

  increaseQuantity = ({ target: { name } }) => {
    const productInfo = {
      productName: name,
      quantity: 1,
      unitProduct: 0,
    };
    const { listProducts } = this.state;
    console.log(listProducts);
    this.setState((prevState) => ({
      listProducts: prevState.listProducts.map((product) => {
        if (product.productName === productInfo.productName) {
          console.log(typeof product.unitProduct);
          console.log(typeof product.productPrice);
          const newProductPrice = (parseFloat(product.productPrice)
           + product.unitProduct).toFixed(2);
          return {
            productName: product.productName,
            productPrice: newProductPrice,
            quantity: product.quantity + 1,
            unitProduct: product.unitProduct,
          };
        }
        return product;
      }),
    }));
  };

  decreaseQuantity = ({ target: { name } }) => {
    const productInfo = {
      productName: name,
      quantity: 1,
      unitProduct: 0,
    };
    const { listProducts } = this.state;
    console.log(listProducts);
    this.setState((prevState) => ({
      listProducts: prevState.listProducts.map((product) => {
        if (product.productName === productInfo.productName) {
          console.log(typeof product.unitProduct);
          console.log(typeof product.productPrice);
          const newProductPrice = (parseFloat(product.productPrice)
           - product.unitProduct).toFixed(2);
          return {
            productName: product.productName,
            productPrice: newProductPrice,
            quantity: product.quantity - 1,
            unitProduct: product.unitProduct,
          };
        }
        return product;
      }),
    }));
  }

  render() {
    const { listProducts } = this.state;
    return (
      listProducts.length > 0
        ? listProducts.map((product) => (
          <div key={ product.productName }>
            <span data-testid="shopping-cart-product-name">{product.productName}</span>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              name={ product.productName }
              id={ product.productPrice }
              onClick={ this.decreaseQuantity }
              disabled={ product.quantity <= 1 }
            >
              -
            </button>
            <span
              data-testid="shopping-cart-product-quantity"
            >
              { product.quantity }
            </span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              name={ product.productName }
              id={ product.productPrice }
              onClick={ this.increaseQuantity }
            >
              +
            </button>
            <span>{product.productPrice}</span>
          </div>
        )) : (
          <div>
            <h4 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h4>
          </div>
        )
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ShoppingCart;
