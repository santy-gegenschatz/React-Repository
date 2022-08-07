import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const WishlistContext = createContext();

export const useWishlistContext = () => {
    useContext(WishlistContext);
}

const WishlistContextProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    const addItemToWishlist = (item) => {
        // Check if we can find the item id in the wishlist array
        const index = wishlist.findIndex( (element) => element.id === item.id)
        if (index !== -1) {
            // case the item exists in the wishlist
            // show a toastify alert
            
        } else {
            // case item does not exist in wish list
            // add it
            const newWishlist = [...wishlist, item];
            setWishlist(newWishlist);
        }
    }

  return (
    <WishlistContext.Provider value = {{
        wishlist,
        addItemToWishlist}
    }>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider