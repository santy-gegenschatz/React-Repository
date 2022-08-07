import React from 'react'
import { Link } from 'react-router-dom';
import Wishlist from '../../components/Wishlist/Wishlist';
import { useWishlistContext } from '../../contexts/WishlistContext';
import './WishlistContainer.css';

const WishlistContainer = () => {
    
    const {wishlist, wishlistIsEmpty} = useWishlistContext();
    console.log(wishlist);
    
    return (
        <div className = 'div-main-wishlistContainer'>
            {wishlistIsEmpty()?
            <div>
                <p className = 'white-text'>
                    Oops, seems like the wishlist is empty.
                    Why don't you checkout the store? 
                </p>
                    <button className = 'btn btn-sucess'> 
                        <Link to = '/'>
                            Go to the Store 
                        </Link>
                    </button>
            </div>
            :
            <Wishlist items = {wishlist}/>
            }
        </div>
    )
}

export default WishlistContainer