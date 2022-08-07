import React from 'react'
import { useWishlistContext } from '../../contexts/WishlistContext'
import Wishlist from '../../components/Wishlist/Wishlist';

const WishlistContainer = () => {
    
    const {wishlist, wishlistIsEmpty} = useWishlistContext();
    console.log(wishlist);
    
    return (
        <div className = 'div-main-wishlistContainer'>
            WishlistContainer
            {wishlistIsEmpty()?
            <div>
                <p className = 'white-text'>
                    Oops, seems like the wishlist is empty.
                    Why don't you checout the store? 
                </p>
                <Link to = '/'>
                    <button className = 'btn btn-sucess'> Go to the Store </button>
                </Link>
            </div>
            :
            <Wishlist items = {wishlist}/>
            }
        </div>
    )
}

export default WishlistContainer