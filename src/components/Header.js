import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'

class Header extends Component{
  render(){
    return(
    <div className="header-main">
        <span className="notfication">{Vectors.bell}<span className="dot">{Vectors.dot}</span></span>
        <span className="profile">{Vectors.profile}</span>
        <div className="info">
        <h3>Anthoney Mike</h3>
        <p>Anthony2142@gmail.com</p>
        </div>
      {Vectors.arrow}

    </div>
    )
  }
}

export default Header;
