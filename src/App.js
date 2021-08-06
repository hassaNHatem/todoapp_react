import React from 'react';
import './App.css'
import Content from './components/Content';


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
 todos:[],
 temptodos:[],
 rerender:'d',
 theme:true
}
} 
addtodo=(todo)=>{
  this.setState({
    todos:[...this.state.todos,{
      checked:false,
      info:todo
    }]
},()=>this.setState({temptodos:this.state.todos}))
}
markcheced=(todo)=>{
  if(todo.checked){
    todo.checked=false;
    this.setState({rerender:'s'})
  }else{
    todo.checked=true
    this.setState({rerender:'s'})
  }
}
deletetodo=(todo)=>{
  const arr = this.state.todos.filter((elem)=>{
   return elem.info!==todo.info
  })
  this.setState({
    todos:arr
  })
}
checkedtodos=()=>{
this.setState({temptodos:this.state.todos.filter((todo)=>{
  return todo.checked===true
})})
}

activetodos=()=>{
  this.setState({temptodos:this.state.todos.filter((todo)=>{
    return todo.checked===false
  })})
}

alltodos=()=>{
  this.setState({temptodos:this.state.todos})
}

deletecomplete=()=>{
  
  this.setState({
    todos:this.state.todos.filter((elem)=>{
      return elem.checked===false
    })
  },()=>{this.setState({
    temptodos:this.state.todos
  })})
}

toggletheme=()=>{
  if(this.state.theme){
    this.setState({theme:false})
  }else{
    this.setState({
      theme:true
    })
  }
}
  render() {
    
     return( <div className="maincontainer">
     <div className={this.state.theme?"upperbody upper_night":"upperbody upper_day"}>
     </div>
     <div className={this.state.theme?"lowerbody lower_night":"lowerbody lower_day"}>
     </div>
   <Content toggletheme={this.toggletheme} theme={this.state.theme} deletecomplete={this.deletecomplete} alltodos={this.alltodos} activetodos={this.activetodos} checkedtodos={this.checkedtodos} temptodos={this.state.temptodos} deletetodo={this.deletetodo} addtodo={this.addtodo} mark={this.markcheced} todos={this.state.todos}></Content>
   
     </div>)
     
    
  }
}


export default App;
