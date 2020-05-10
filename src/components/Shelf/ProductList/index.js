import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { fetchProducts } from '../../../services/shelf/actions'
import { connect } from 'react-redux';

import Product from './Product';

const ProductList = ({ products }) => { 
  return products.map(p => {
    return <Product product={p} key={p.id} />;
  });
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id) => { dispatch(fetchProducts(id))}
  }
 }

const mapStateToProps = (state) =>{
  const product5= state.firestore.ordered.products
   console.log(product5);
  return{
    product: state.firestore.ordered.products
  }}
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
     { collection: 'products'}
    ])
   )(ProductList);
