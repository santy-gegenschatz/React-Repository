import React from 'react'

const Item = ({item}) => {

  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
        <img src={item.url} alt="item" />
      </div>
      <div className = 'details-container'>
          <p> {item.nombre} </p>
          <p> {item.precio} </p>
          <p> {item.stock} </p>
          <AñadirProducto producto = {item}/>
        </div>
    </div>
  )
}

export default Item