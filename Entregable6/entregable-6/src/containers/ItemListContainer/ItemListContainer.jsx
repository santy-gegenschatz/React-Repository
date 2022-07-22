import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Products from '../../helpers/Products';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const {pathname} = useLocation();
    console.log(`El location es: ${pathname}`);
    const {categoryId} = useParams();
    console.log(`El categoryId es: ${categoryId}`);
    let [productos, setProductos] = useState([]);

    function filterProducts(productsArray) {
        let productsToShow;
        switch (pathname) {
            case ('/'):
                return productsArray
            case('/categories/' + categoryId):
            console.log("I am in");
                productsToShow = productsArray.filter( (item) => item.category === categoryId);
                return productsToShow
            case ('/newSeason'):
                productsToShow = productsArray.filter( (item) => item.newSeason === true);
                return productsToShow
            default:
                return productsArray
        }
    }
    useEffect(() => {
        let promesa = Products(true, 2000);
        promesa.then( (response) => {
        // We use a function to decide which products must be shown, taking into account
        // a - the url
        // b - the categories, in the case the url is of a category type
        let productsToShow = filterProducts(response);
        setProductos(productsToShow);
        });
    }, [])
    
    return (
        <div>
            <p className = 'white-text'> This is an Item List Container </p>
            {productos.length === 0 ? 
            <p> Loading ...</p>    
            :
            <div className = 'div-centered'>
                <ItemList items = {productos}/> 
            </div>
        }
        </div>
    )
    }

export default ItemListContainer