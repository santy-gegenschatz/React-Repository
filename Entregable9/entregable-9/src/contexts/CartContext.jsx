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
        console.log(product);
        console.log(product.id);
        if (cartList.includes( (prod) => prod.id === product.id)) {
            console.log("A");
            let quantity = cartList.find((prod) => prod.id === product.id);
            quantity.cantidad = quantity.cantidad + product.cantidad;
        } else {
            setCartList([...cartList, product]);
        }
        
        console.log(cartList);
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