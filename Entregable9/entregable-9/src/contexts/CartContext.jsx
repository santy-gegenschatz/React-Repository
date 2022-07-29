import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// Notar que el carrito de compras va a ser un array con objetos de tipo producto adentro
// cada objeto además va a tener una variable que representa la cantidad de items de ese tipo
// que han sido comprados
export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    //Definir los estados y las funciones
    const [cartList, setCartList] = useState([]);
    
    const añadirCarrito = (product) => {
        console.log("1", cartList);

        setCartList([product]);
        
        console.log("2", product);
    }
        
    return (
        <CartContext.Provider value = {{
            cartList,
            añadirCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;