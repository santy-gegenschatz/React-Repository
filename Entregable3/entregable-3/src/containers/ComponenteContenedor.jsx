import React from 'react'
import Menu from '../components/Menu/Menu';
import Formulario from '../components/Formulario/Formulario';
import CartWidget from '../components/CartWidget/CartWidget';

const ComponenteContenedor = ({saludo}) => {
  return (
    <div>
      <Menu />
      <Formulario saludar = {saludo} />
      {saludo}
      <CartWidget items = '5'/>
    </div>
  )
}

export default ComponenteContenedor;
