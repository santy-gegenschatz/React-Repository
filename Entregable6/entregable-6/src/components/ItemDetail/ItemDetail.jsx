import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {item.url} alt = "product-image"/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.name} </h2>
                <h6> {item.brand} </h6>
            </div>

            <div className = 'div-product-details'>
                <p> {item.description} </p>
                <p> {item.price} </p>
            </div>

            <div className = 'div-add-to-cart'>
                <AddToCart />
            </div>
        </div>
        ItemDetail
    </div>
  )
}

export default ItemDetail