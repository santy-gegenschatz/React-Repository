import React from 'react'

const Wishlist = ({items}) => {
  return (
    <div className = 'div-main-wishlist'>
        Wishlist
        {/* Map the items, each item to a WishlistItem */}
        {items.map( (item) => {
            return (
                <li> {item.name} </li>
            )
        })}
    </div>
  )
}

export default Wishlist