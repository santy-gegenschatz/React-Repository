import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className = "div-principal">
        <p> Este es un componente contenedor que muestra un saludo que llega por un prop. </p>
        <p> {greeting} </p>
    </div>
  )
}

export default ItemListContainer