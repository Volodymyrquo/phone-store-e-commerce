import React, { Component } from 'react';
import Title from '../Title';
import { storeProducts } from '../../data';
import Product from './Product';
import { ProductConsumer } from '../../context';

export default class ProductList extends Component {
  state = { products: storeProducts };
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value, key) =>
                  value.products.map((item, key) => (
                    <Product key={key} product={item} />
                  ))
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
