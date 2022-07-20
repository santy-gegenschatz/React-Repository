import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Menu = function () {
    return (
        <div className = "div-menu">
          <div className = 'center'> 
               <h1> Welcome to the Winter Store </h1>
               <ul>
                    <li>
                         <a href = "/inicio"> Home </a>
                    </li>

                    <li>
                         <a href = "/inicio"> New Season </a>
                    </li>

                    <li>
                         <a href = "/inicio"> Products </a>
                    </li>

                    <li>
                         <a href = "/inicio"> Favs </a>
                    </li>

                    <li>
                         <a href = "/inicio"> Gift Cards </a>
                    </li>
               </ul>
          </div>

          <div className = 'right'>
               <CartWidget items = '5'/>
          </div> 
        </div>
    );
}

export default Menu;