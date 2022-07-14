import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';

const Menu = function () {
    return (
        <div className = "div-menu">
            <h1> Bienvenido al sistema de transferencias </h1>
            <ul>
                <li>
                     <a href = "/inicio"> Inicio </a>
                </li>

                <li>
                     <a href = "/inicio"> Transaccionar </a>
                </li>

                <li>
                     <a href = "/inicio"> Productos </a>
                </li>

                <li>
                     <a href = "/inicio"> Transferencias </a>
                </li>

                <li>
                     <a href = "/inicio"> Contacto </a>
                </li>
            </ul>
            <div>
               <CartWidget items = '5'/>
            </div>
            
        </div>
    );
}

export default Menu;