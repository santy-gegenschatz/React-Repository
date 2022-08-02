import React from 'react'
import { Link } from 'react-router-dom'

const GoToCart = () => {
  return (
    <div className = 'main-div'>
        <p> This is the GoToCart Component</p> 
        <Link to = '/cart' >
            <button className = 'btn btn-success'> Go To Cart </button>
        </Link> 
        
    </div>
  )
}

export default GoToCart