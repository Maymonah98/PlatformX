import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import heartIcon from '../../../../static/heartIcon.png';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import { fetchProducts } from '../../../../services/shelf/actions'


const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  return (
    <div className="shelf-item">
      <img 
        onClick={() => addProduct(product)}
        data-sku={product.sku} 
        className="shelf-stopper" 
        src={heartIcon} 
        alt="heart icon"/> 
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        
      </div>
      <div className="shelf-item__buy-btn">More Details</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
   fetchProducts: (id) => { dispatch(fetchProducts(id))},
  }
 }
 const mapStateToProps = (state) => {
  return {
    fetchProductsData: state.getProducts
  }
 }

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  mapDispatchToProps,mapStateToProps,
  { addProduct }
)(Product);
