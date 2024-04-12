  // Productos.js

import React from 'react';

function Productos(props) {
  return (
    <div className='productos' 
      style ={{
        backgroundColor: props.color, 
      }}>
      <h3>Nombre : {props.nombre}</h3>
      <p>Precio : {props.precio}</p>
      <p>Color: {props.color}</p>
      <p>Categoria: {props.categoria}</p>
    </div>
  )
}

export default Productos;
