import React from 'react';
import '../App.css'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'


class Heading extends React.Component {
constructor(props) {
  super(props);

  this.state = {
 inputval:''
}
} 

  render() {
    
     return ( <><div className="heading">
     <h1>TODO</h1><span onClick={()=>this.props.toggletheme()}><img src={this.props.theme?sun:moon}></img></span>
     </div> 
     <div style={this.props.theme?{}:{backgroundColor:'hsl(0, 0%, 98%)'}} className="input"><span></span><input style={this.props.theme?{}:{backgroundColor:'hsl(0, 0%, 98%)'}} value={this.state.inputval} onChange={(e)=>{this.setState({inputval:e.target.value})
    this.forceUpdate()
    }} placeholder="Create a new todo..."></input><button style={this.props.theme?{}:{backgroundColor:'hsl(0, 0%, 98%)'}} onClick={()=>{this.props.addtodo(this.state.inputval)
        this.setState({inputval:''})
    }
    }>add</button></div>
     </>)
     
    
  }
}


export default Heading;
