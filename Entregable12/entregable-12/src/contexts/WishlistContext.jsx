import { limitToLast } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const WishlistContext = createContext();

export const useWishlistContext = () => {
    return (useContext(WishlistContext));
}

const WishlistContextProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    const addItemToWishlist = (item) => {
        // Check if we can find the item id in the wishlist array
        const index = wishlist.findIndex( (element) => element.id === item.id)
        if (index !== -1) {
            // case the item exists in the wishlist
            // show a toastify alert
            console.log("Sth");
            toast(item.name + " added to wishlist successfully");
        } else {
            // case item does not exist in wish list
            // add it
            const newWishlist = [...wishlist, item];
            setWishlist(newWishlist); 
        }
    }

    const wishlistIsEmpty = () => {
        return wishlist.length === 0 ? (true) : (false);
    }

  return (
    <WishlistContext.Provider value = {{
        wishlist,
        addItemToWishlist,
        wishlistIsEmpty  
    }
    }>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider