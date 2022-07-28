import React from 'react'
import { useState } from 'react'
import AddToCart from '../AddToCart/AddToCart'
import GoToCart from '../GoToCart/GoToCart.jsx'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const [purchase, setPurchase] = useState(false);

    const clickEnCompra = (event, itemsBought) => {
        console.log(event);
        console.log(itemsBought);
        setPurchase(true);
    }
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {item.url} alt = "product-image" className = 'image-product'/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.name} </h2>
                <h6> {item.brand} </h6>
            </div>

            <div className = 'div-product-details'>
                <p> {item.description} </p>
                <p className = 'price-text'> {item.price} USD </p>
                {!purchase ?
                    <div className = 'div-add-to-cart'>
                        {/* Lo interesante es que le estoy pasando una función por prop */}
                        <AddToCart onAdd = {clickEnCompra}/>
                    </div>
                :
                    <div className = 'div-go-to-cart'> 
                        <GoToCart />
                    </div>
                }

            </div>


        </div>
    </div>
  )
}

export default ItemDetail