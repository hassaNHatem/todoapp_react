import '../App.css';
import react, { Component } from 'react'
import Vectors from '../images/Vectors'
class Upper extends Component{
    render(){
      return(
      <div className="upper-main">
          
      <div className="filter">
          <h5>Filter by:</h5>
          <div className="spans">
          <span>1D</span>
          <span className="active">1M</span>
          <span>1Y</span>
          </div>
      </div>

      <div className="checkouts">
          <div className="body">
              <h5>Total Checkouts</h5>
              <p><span>72</span>/ 82</p>
          </div>
          <div>
          <span className="cart">{Vectors.successcart}
           
                </span>
                </div>  
      </div>

      <div className="checkouts">
          <div className="body">
              <h5>Total Failure</h5>
              <p><span id="fail" className="failspan">10</span>/ 82</p>
          </div>
          <div>
          <span className="cart">{Vectors.failcart2}
            
                </span>
                </div>
      </div>
      </div>
      )
    }
  }
  
  export default Upper;
  