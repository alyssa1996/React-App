import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Info from './components/Info';
import { Component } from 'react';

class App extends Component {
  //state값을 초기화 시키는 과정 : constructor, 즉 생성자를 만드는 과정
  //어떤 component가 실행될 때, contructor()함수가 가장 먼저 실행되면서 초기화를 담당한다.
  constructor(props){
    super(props);
    //state값을 초기화 시키기 위한 코드
    this.state={
      subject: { title: 'Vegan for Everyone' },
      contents: [
        { id:1, title:'음식점', desc:'맛있는 비건 음식점을 찾아서'},
        { id:2, title:'식료품점', desc:'품질 좋은 비건 식료품을 찾아서'},
        { id:3, title:'그외 제품들',desc:'그 외 비건 제품들을 찾아서'},
        { id:4, title:'로그인',desc:'그 외 비건 제품들을 찾아서'},
      ]
    }
  }

  render(){
  return (
    <div className="App">
      <Subject title={this.state.subject.title}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content></Content>
      <Info></Info>
    </div>
  );
  }
}

export default App;
