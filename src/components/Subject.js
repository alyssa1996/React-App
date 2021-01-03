import { Component } from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); //여기서 <a>태그의 기본적인 동작방법을 막기 위한 코드. 'e'는 event를 의미
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;