import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Menu = function () {
    const [productCategoriesVisible, setProductCategoriesVisible] = useState(false);

    const cambiarVisibilidad = () => {
     if (productCategoriesVisible === true) {
          setProductCategoriesVisible(false);
     } else {
          setProductCategoriesVisible(true);
     }
    }
    return (
        <div className = "div-menu">          
          <div className = 'superior-menu'>
               <h1> Welcome to the Winter Store </h1>
               <ul>
                    <li>
                         <a href = "/inicio"> Home </a>
                    </li>

                    <li>
                         <a href = "/newSeason"> New Season </a>
                    </li>

                    <li>
                         {/* Notar que en el onClick le estamos cambiando la visibilidad con una */}
                         {/* arrow function. Si directamente usara el método de useState */}
                         {/* Daría error, pq todo lo que esta entre {} se evalua inmediatamente */}
                         <a onClick = {cambiarVisibilidad} id = 'link-products' > Products </a>
                    </li>

                    <li>
                         <a href = "/favs"> Favs </a>
                    </li>

                    <li>
                         <a href = "/giftCards"> Gift Cards </a>
                    </li>
               </ul>
          </div>
          {productCategoriesVisible == true 
          && 
          <div className = 'categories-menu'> 
               <ul>
                    <li>
                         <a href="/categories/shirts"> Shirts </a>
                    </li>

                    <li>
                         <a href="/categories/pants"> Pants </a>
                    </li>

                    <li>
                         <a href="/categories/jackets"> Jackets </a>
                    </li>

                    <li>
                         <a href="/categories/accesories"> Accesories </a>
                    </li>
               </ul>
          </div>
          }
          <div className = 'right'>
               <CartWidget items = '5'/>
          </div> 
        </div>
    );
}

export default Menu;