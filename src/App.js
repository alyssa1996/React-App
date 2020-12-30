import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Info from './components/Info';
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Subject title="Vegan Trip"></Subject>
      <Subject title="Vegan Place"></Subject>
      <TOC></TOC>
      <Content></Content>
      <Info></Info>
    </div>
  );
  }
}

export default App;
