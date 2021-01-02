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
      mode:'welcome',
      subject: { title: 'Vegan for Everyone', sub:"Good Vegan Places, not only for vegan but also for everyone" },
      welcome:{title: 'Welcome', desc:'Hello React'},
      contents: [
        { id:1, title:'음식점', desc:'맛있는 비건 음식점을 찾아서'},
        { id:2, title:'식료품점', desc:'품질 좋은 비건 식료품을 찾아서'},
        { id:3, title:'그외 제품들',desc:'그 외 비건 제품들을 찾아서'},
        { id:4, title:'로그인',desc:'그 외 비건 제품들을 찾아서'},
      ]
    }
  }

  render(){
    console.log('App render')
    var _title,_desc=null;
    if(this.state.mode === "welcome"){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;
    }
  return (
    <div className="App">
      {/* <Subject title={this.state.subject.title}></Subject> */}
      <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(); //여기서 <a>태그의 기본적인 동작방법을 막기 위한 코드. 'e'는 event를 의미
            //이 코드로는 state의 값이 변하지 않음!
            this.state.mode='welcome'; // 에러가 나는 이유는 여기서 this가 가르키는 것이 없기 때문. --> bind(this) 사용하여 해결
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}> {/* bind(this)를 함으로써 해당 함수 내에서 사용하는 this는 해당 component를 가르키게 됨*/}
            {this.state.subject.title}
            </a></h1>
          {this.state.subject.sub}
      </header>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
      <Info></Info>
    </div>
  );
  }
}

export default App;
