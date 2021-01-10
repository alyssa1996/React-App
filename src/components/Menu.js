import { Component } from 'react';
import './Menu.css'

class Menu extends Component{

    render(){
      var lists=[];
      var data=this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
          <li key={data[i].id} className="Content">
            <a href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){ 
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); }.bind(this)}>
              {data[i].title}
            </a>
          </li>
          )
        i=i+1;
      }
        return(
            <div className="Menu">
                <header className="Header">
                    {lists.slice(0,1)}
                </header>

                <nav className="Navigator">
                    {lists.slice(1)}
                </nav>
            </div>
        )
    }
}

export default Menu;