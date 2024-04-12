
// ListaPersonas.js
import React from 'react';
import Producto from './Productos.js';

const ListaProductos = () => {
  return (
    <div>
        <Producto nombre="Producto 1" precio="$10" color="Rojo" categoria="Electrónica"/>
        <Producto nombre="Producto 2" precio="$20" color="Azul" categoria="Hogar"/>
        <Producto nombre="Producto 3" precio="$30" color="Verde" categoria="Moda"/>
        <Producto nombre="Producto 4" precio="$40" color="Amarillo" categoria="Deportes"/>
        <Producto nombre="Producto 5" precio="$50" color="Negro" categoria="Electrodomésticos"/>
    </div>
  );
}

export default ListaProductos;

