import React from 'react'
import { useState } from 'react'
import './AddToCart.css'

const AddToCart = () => {

    const [itemQuantity, setItemQuantity] = useState(0);

    function aumentar() {
        setItemQuantity( itemQuantity + 1);
    }

    function disminuir() {
        setItemQuantity( itemQuantity - 1);
    }


    return (
        <div>
            This is the AddToCart Component
            <p> Select the number of Items you would like to add to your cart</p>
            <div className = 'div-key-components'>
                <button className = 'btn btn-info' onClick = {disminuir}> - </button>
                <p> {itemQuantity} </p>
                <button className = 'btn btn-info' onClick = {aumentar}> + </button>
            </div>
        </div>
    )
}

export default AddToCart