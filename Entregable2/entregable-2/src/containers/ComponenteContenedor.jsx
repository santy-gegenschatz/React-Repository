import React from 'react'
import Menu from '../components/Menu/Menu';
import Formulario from '../components/Formulario/Formulario';

const ComponenteContenedor = ({saludo}) => {
  return (
    <div>
      <Menu />
      <Formulario saludar = {saludo} />
      {saludo}
    </div>
  )
}

export default ComponenteContenedor;
