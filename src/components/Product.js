import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'
class Product extends Component{
    render(){
      return(
        <>
      <div className="product-main">
         <p className="date">date</p>
          <p className="product">PRODUCT</p>
          <p className="size">SIZE (US)</p>
          <p className="website">WEBSITE</p>
          <p className="price">PRICE</p>
          <p className="status">STATUS</p>
      </div>
       <p className="line"></p>
       </>
      )
    }
  }
  
  export default Product;
  