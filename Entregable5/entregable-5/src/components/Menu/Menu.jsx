import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';

const Menu = function () {
    return (
        <div className = "div-menu">
            <h1> Bienvenido al ecommerce Freerider </h1>
            <ul>
                <li>
                     <a href = "/inicio"> Inicio </a>
                </li>

                <li>
                     <a href = "/inicio"> Productos </a>
                </li>

                <li>
                     <a href = "/inicio"> Favoritos </a>
                </li>

                <li>
                     <a href = "/inicio"> Gift Cards </a>
                </li>

                <li>
                     <a href = "/inicio"> Ayuda </a>
                </li>
            </ul>
            <div>
               <CartWidget items = '5'/>
            </div>
            
        </div>
    );
}

export default Menu;