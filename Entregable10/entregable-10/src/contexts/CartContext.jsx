import { useState } from "react";
import { createContext } from "react";
import {flushSync} from "react-dom";

// Notar que el carrito de compras va a ser un array con objetos de tipo producto adentro
// cada objeto además va a tener una variable que representa la cantidad de items de ese tipo
// que han sido comprados
export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    //Definir los estados y las funciones
    const [cartList, setCartList] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [firstProduct, setFirstProduct] = useState(true);

    const calculateTotalItems = () => {
        let counter = 0;
        cartList.forEach(element => {
        console.log("Element" , element);
        counter += element.itemQuantity;
        });
        setItemCount(counter);
        console.log("Counter : ", counter);
      }
    
    const addToCart = (product) => {
        let productoExistente = false;
        cartList.forEach( (prod) => {
            if (prod.id ===product.id) {
                productoExistente = true;
                console.log("El producto ya está añadido al array");
            }
        });

        if (productoExistente) {
            let existingProduct = cartList.find((prod) => prod.id === product.id);
            console.log("El producto recibido por parámetro");
            console.log(product);
            console.log("El producto encontrado en el array");
            console.log(existingProduct);
            console.log("La cantidad actual", existingProduct.itemQuantity);
            console.log("La cantidad recibida", product.itemQuantity);
            existingProduct.itemQuantity = existingProduct.itemQuantity + product.itemQuantity;            
            console.log("La cantidad actualizada : ", existingProduct.itemQuantity);
            calculateTotalItems();
        } else {
            if (firstProduct) {
                setItemCount(product.itemQuantity);
                setCartList([...cartList, product]);
                setFirstProduct(false);
                console.log("New product, empty array");
            } else {
                setCartList([...cartList, product]);
                setItemCount(itemCount + product.itemQuantity);
                console.log("New product, full array");
            }
        }
    }

    const totalValue = () => {
        let total = 0;
        cartList.forEach ((prod) => {
            total += prod.price;
        })
        return total;
    }
        
    return (
        <CartContext.Provider value = {{
            cartList,
            itemCount,
            addToCart,
            totalValue
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;