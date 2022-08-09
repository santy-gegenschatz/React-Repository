import React from 'react'
import './GiftcardElement.css'

const GiftcardElement = ({value}) => {
  return (
    <div className = 'div-main-giftcardelement'>
        <p> This is a giftcard element </p>
        <h4> The Winter Store Giftcard </h4>
        <h6> Value : {value} </h6>
        <div className = 'div-logo-giftcardelement'>
            <h1> ❄ </h1>
        </div>
    </div>
  )
}

export default GiftcardElement