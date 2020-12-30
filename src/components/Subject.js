import { Component } from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1>{this.props.title}</h1>
          Let's walk to vegan place!
        </header>
      );
    }
  }

export default Subject;