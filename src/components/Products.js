import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'
import Product from './Product';
class Products extends Component{
    render(){
      return(
      <div className="products-main">
        <div className="products-header">
          <p className="date">
            DATE <span className="up">{Vectors.up}</span><span className="down">{Vectors.down}</span>
          </p>
          <p className="product">PRODUCT</p>
          <p className="size">SIZE (US)</p>
          <p className="website">WEBSITE</p>
          <p className="price">PRICE</p>
          <p className="status">STATUS</p>
        </div>
        <div className="allproducts">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        </div>
      </div>
      )
    }
  }
  
  export default Products;
  