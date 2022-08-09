import React from 'react'
import GiftcardElement from '../GiftcardElement/GiftcardElement'
import './Giftcard.css'

const Giftcard = ({giftcards}) => {
  return (
    <div className = 'div-main-giftcard'>
        {giftcards.map( (card) => {
                return (
                    <GiftcardElement value = {card.value} key = {card.id} />
                )
            })}
    </div>
  )
}

export default Giftcard