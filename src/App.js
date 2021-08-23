import './App.css';
import react, { Component } from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Side from './components/Side'

class App extends Component{
  render(){
    return(
      <div className="app-main">
      <Header></Header>
      <div className="rest">
      <Content></Content>
      <Side></Side>
      </div>
      </div>
    )
  }
}
export default App;
