import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Info from './components/Info';
import { Component } from 'react';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Menu from './components/Menu';

class App extends Component {
  //state값을 초기화 시키는 과정 : constructor, 즉 생성자를 만드는 과정
  //어떤 component가 실행될 때, contructor()함수가 가장 먼저 실행되면서 초기화를 담당한다.
  constructor(props){
    super(props);
    //state값을 초기화 시키기 위한 코드
    this.max_content_id=4;
    this.state={
      mode:'create',
      selected_content_id:2,
      subject: { title: 'Vegan for Everyone', sub:"Good Vegan Places, not only for vegan but also for everyone" },
      welcome:{title: 'Welcome', desc:'Hello React'},
      contents: [
        { id:1, title:'음식점', desc:'맛있는 비건 음식점을 찾아서'},
        { id:2, title:'식료품점', desc:'품질 좋은 비건 식료품을 찾아서'},
        { id:3, title:'그외 제품들',desc:'그 외 비건 제품들을 찾아서'},
        { id:4, title:'로그인',desc:'로그인 정보'},
      ]
    }
  }

  getReadContent(){
    var i=0;
      while(i<this.state.contents.length){
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          return data;
        }
        i=i+1;
      }
  }

  getContent(){
    var _title,_desc,_article=null;
    if(this.state.mode === "welcome"){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "read"){
      var _content=this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if(this.state.mode==="create"){
      _article=<CreateContent onSubmit={function(_title,_desc){
        console.log(_title,_desc)
        this.max_content_id=this.max_content_id+1;
        // this.state.contents.push(
        //   {
        //     id: this.max_content_id,
        //     title: _title,
        //     desc: _desc
        //   });
        var _contents=this.state.contents.concat(
          {
            id: this.max_content_id,
            title: _title,
            desc: _desc
          }
        )

        this.setState({
          //contents: this.state.contents ==> 기존에 있었던 contents의 배열에 값을 추가하는 형태로 성능 개선시 굉장히 까다로워짐
          contents: _contents, // 기존에 가지고 있던 contents의 배열이 새롭게 만들어진 데이터로 교체되어버리는 형태
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode==="update"){
      _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={
        function(id,_title,_desc){
         var _contents = Array.from(this.state.contents);
         var i=0;
         while(i<_contents.length){
           if(_contents[i].id===id){
             _contents[i]={id:id,title:_title,desc:_desc};
             break;
           }
           i=i+1;
         }
        
         this.setState({
          contents: _contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }

    return _article;
  }

  render(){
    console.log('App render')
    
  return (
    <div className="App">
      <Menu></Menu>
      <div style={{blockSize:128, padding:64, backgroundColor:'tomato'}}>
        <p style={{textAlign:'center', fontWeight:'bold'}}>VECO = Vegan + Eco</p>
        <p style={{textAlign:'center'}}>베코는 'Vegan for Everyone'이라는 생각에서 출발하였습니다.<br></br>
        비건이라서 찾는 것이 아니라, 음식이 맛있어서, 제품이 좋아서 찾았으면 좋겠다는 바람으로 시작했습니다.
       </p>
      </div>
      <Subject title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={function(){
        this.setState({
          mode:'welcome'
        })
      }.bind(this)}></Subject>

      <TOC data={this.state.contents}
      onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        })
      }.bind(this)}></TOC>

      <Control onChangeMode={function(mode){
        this.setState({
          mode:mode
        })
      }.bind(this)}></Control>

      {this.getContent()}

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et justo odio. Nulla euismod augue in risus congue, at semper erat molestie. Sed tempus augue eget arcu lobortis, quis dictum sapien gravida. Aenean nunc diam, rhoncus vitae sem sit amet, posuere mollis augue. Nullam efficitur semper magna, in feugiat augue mollis quis. Curabitur ac sagittis massa. Etiam vulputate ex vel tincidunt molestie. Morbi nec erat nisl. Aliquam commodo sem convallis luctus gravida.

Aliquam hendrerit nisl ligula, a dapibus nisi faucibus in. Vivamus purus mi, porta eu condimentum at, blandit at lacus. Nunc vel purus nec quam aliquet laoreet sed ac massa. Donec tempor turpis quis est ultricies pellentesque. Curabitur et convallis mi. Pellentesque eget auctor dui, a pharetra risus. Praesent et egestas eros. Sed sit amet neque felis. Nam pretium, erat in rutrum elementum, dolor augue vulputate tellus, a volutpat quam justo non odio. Duis dictum velit at sapien mollis viverra.</p>
      
      <Info></Info>
    </div>
  );
  }
}

export default App;
