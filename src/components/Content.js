import React from 'react';
import '../App.css'
import Heading from './Heading';
import Lists from './Lists';

class Content extends React.Component {
constructor(props) {
  super(props);

  this.state = {
 
}
} 

  render() {
    
     return ( <div className="content">
     <Heading theme={this.props.theme} toggletheme={this.props.toggletheme} addtodo={this.props.addtodo}></Heading>
     <Lists theme={this.props.theme} deletecomplete={this.props.deletecomplete} alltodos={this.props.alltodos} activetodos={this.props.activetodos} checkedtodos={this.props.checkedtodos} temptodos={this.props.temptodos} deletetodo={this.props.deletetodo} mark={this.props.mark} todos={this.props.todos}></Lists>
     </div>)
     
    
  }
}


export default Content;
