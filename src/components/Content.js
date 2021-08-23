import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'
import Upper from './Upper';
import Products from './Products';
class Content extends Component{
    render(){
      return(
      <div className="Content-main">
      <Upper></Upper>
      <Products></Products>
      </div>
      )
    }
  }
  
  export default Content;
  