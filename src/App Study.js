import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Info from './components/Info';
import { Component } from 'react';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Banner from './components/Banner';
import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=4;
    this.state={
      mode:'welcome',
      selected_content_id:2,
      welcome:{title: 'Welcome', desc:'Hello React'},
      contents: [
        { id:1, title:'구경하기', desc:'맛있는 비건 음식점을 찾아서'},
        { id:2, title:'배워보기', desc:'품질 좋은 비건 식료품을 찾아서'},
        { id:3, title:'알리기',desc:'그 외 비건 제품들을 찾아서'},
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
        var _contents=this.state.contents.concat(
          {
            id: this.max_content_id,
            title: _title,
            desc: _desc
          }
        )

        this.setState({
          contents: _contents,
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
      <Menu data={this.state.contents}
      onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        })
      }.bind(this)}></Menu>

      <Banner></Banner>

      <Control onChangeMode={function(_mode){
        if(_mode==="delete"){
          if(window.confirm('Do you really want to delete it?')){
            var _contents=Array.from(this.state.contents);
            var i=0;
            while(i<_contents.length){
              if(_contents[i].id===this.state.selected_content_id){
                _contents.splice(i,1);
                break
              }
              i=i+1;
            }
            this.setState({mode:'welcome',contents:_contents})
            alert('deleted!');
          }
        }else{
          this.setState({
            mode:_mode
          });
        }    
      }.bind(this)}></Control>

      {this.getContent()}

      <Info></Info>
    </div>
  );
  }
}

export default App;
