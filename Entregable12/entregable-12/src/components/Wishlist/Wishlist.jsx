import React from 'react'
import { useWishlistContext } from '../../contexts/WishlistContext';
import WishlistItem from '../WishlistItem/WishlistItem';
import './Wishlist.css';

const Wishlist = ({items}) => {
  const { addItemToWishlist } = useWishlistContext();
  return (
    <div className = 'div-main-wishlist'>
        Wishlist
        {/* Map the items, each item to a WishlistItem */}
        {items.map( (item) => {
            return (
                <WishlistItem item = {item} onClick = {addItemToWishlist}/>
            )
        })}
    </div>
  )
}

export default Wishlist