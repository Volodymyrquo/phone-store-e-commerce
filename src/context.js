import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singlItem = { ...item };
      tempProducts = [...tempProducts, singlItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => ({ detailProduct: product }));
  };
  addToCart = (id) => {
    console.log(`Hello from add to cart. Id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
