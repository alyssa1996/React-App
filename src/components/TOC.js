import { Component } from 'react';

class TOC extends Component{
    render(){
      return(
        <nav>
          <ul>
            <li><a href="Login">Login</a></li>
            <li><a href="Playground">Playground</a></li>
            <li><a href="Eat">Eat</a></li>
          </ul>
        </nav>
      );
    }
  }

  export default TOC;