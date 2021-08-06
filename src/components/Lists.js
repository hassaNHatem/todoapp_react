import React from 'react';
import '../App.css'
import cross from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'


class Lists extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  
}
} 

  render() {
   
     
     return ( <div className="lists" style={this.props.theme?{}:{backgroundColor:'hsl(0, 0%, 98%)'}}>
         
     {
          console.log(this.props.todos),
    this.props.temptodos.map((elem,i)=>{
         return (<div key={i}>
        <div style={this.props.theme?{}:{backgroundColor:'hsl(0, 0%, 98%)',color:'black !important'}} className="list">
            <span style={elem.checked?{background:`url('../images/icon-check.svg')`}:{backgroundColor:'none'}} onClick={()=>this.props.mark(elem)} className="check"></span>
            <p className={this.props.theme?"night":"day"} style={elem.checked?{textDecoration:'line-through',color:'hsl(234, 11%, 52%)'}:{textDecoration:'none',color:'white'}}>{elem.info}</p>
            <span onClick={()=>this.props.deletetodo(elem)} className="delete">
                <img src={cross}></img>
                </span>
            </div>
        <div className="justaline"></div>{console.log(elem.checked)}</div>
       
     )})
    
          }
    <div className="footer"><p className="items">{this.props.todos.length} items left</p>
    <p className="clickables">
        <span onClick={()=>{
           
            this.props.alltodos()
        }}>All</span>
        <span onClick={()=>{
        this.props.activetodos()
           
                 
        }}>Active</span>
        <span onClick={()=>{
        this.props.checkedtodos()
           
                 
        }}>completed</span>
        </p>
        <p onClick={()=>{this.props.deletecomplete()}} className="clear">Clear Completed</p>
        </div>
        
     </div>)
     
    
  }
}


export default Lists;
