import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductsDetails from './pages/ProductsDetails';

class App extends React.Component {
  state = {
    listProducts: [],
  }

  addToCart = ({ target: { name, id } }) => {
    const price = parseFloat(id);
    console.log(typeof price);
    const productInfo = {
      productName: name,
      productPrice: price,
      quantity: 1,
      unitProduct: price,
    };
    this.setState((prevState) => ({
      listProducts: (prevState.listProducts.some(
        (product) => product.productName === productInfo.productName,
      )
        ? prevState.listProducts.map((product) => {
          if (product.productName === productInfo.productName) {
            return ({
              productName: product.productName,
              productPrice: (product.quantity + 1) * productInfo.productPrice,
              quantity: product.quantity + 1,
              unitProduct: productInfo.productPrice,
            });
          }
          return product;
        })
        : [...prevState.listProducts, productInfo]),
    }));
  };

  render() {
    const { state: { listProducts }, addToCart } = this;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ addToCart } />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart
              products={ listProducts }
            />
          </Route>
          <Route
            exact
            path="/products-details/:id"
            render={ (props) => <ProductsDetails addToCart={ addToCart } { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
