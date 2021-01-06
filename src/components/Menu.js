import { Component } from 'react';
import './Menu.css'

class Menu extends Component{
    render(){
        function Nav(e, menu){
            e.preventDefault();
            alert('HELLO, Here is Menu: '+menu);
        }
        return(
            <div className="Menu">
                <header className="Header">
                    Vegan for Everyone
                </header>

                <nav className="Navigator">
                    <li className="Content" onClick={(e)=>Nav(e,'menu1')}><a href="/">menu1</a></li>
                    <li className="Content" onClick={(e)=>Nav(e,'menu2')}><a href="/">menu2</a></li>
                    <li className="Content" onClick={(e)=>Nav(e,'menu3')}><a href="/">menu3</a></li>
                </nav>
            </div>
        )
    }
}

export default Menu;