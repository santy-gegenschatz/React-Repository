import React from 'react'
import './AñadirProducto.css';
import { useState } from 'react';

const AñadirProducto = ({a}) => {
    const [inicial, setInicial] = useState(0);
  return (
    // El div que retorna contiene los elementos para que se cumplan las funciones necesarias.
        <div className='div-principal'> 
            <div className = 'div-externo'>
                <h3> Añadir Productos al Carrito </h3>
                {/*Acá va un div que tiene un input y los dos botones */}
                <div className = 'div-principal'>
                    <button className='btn btn-dark' onClick={ () => { setInicial(inicial - 1)} }> - </button>
                    <label> { inicial }</label>
                    <button className='btn btn-dark' onClick={ () => { setInicial(inicial + 1)} }> + </button>
                </div>
            </div>
        </div>
  )
}

export default AñadirProducto
