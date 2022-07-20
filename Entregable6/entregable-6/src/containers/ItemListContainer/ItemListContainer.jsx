import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Products from '../../helpers/Products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const categoria = useParams();
    let [productos, setProductos] = useState([]);

    useEffect(() => {
        let promesa = Products(true, 2000);
        promesa.then( (response) => {
        setProductos(response);
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