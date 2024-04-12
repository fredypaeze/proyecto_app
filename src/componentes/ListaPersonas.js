// ListaPersonas.js
import React from 'react';
import Persona from './Persona';

const ListaPersonas = () => {
  return (
    <div>
      <Persona nombre="Fabio Duran" edad="25" correo="fabiod@yahoo.es" color="blue"/>
      <Persona nombre="Pablo Duran" edad="35" correo="pablod@yahoo.es" color="red"/>
      <Persona nombre="Andres Diaz" edad="45" correo="andresd@yahoo.es" color="pink"/>
      <Persona nombre="Liliana Morales" edad="28" correo="lilianam@yahoo.es"/>
      <Persona nombre="Julio Angarita" edad="26" correo="julioa@yahoo.es"/>
    </div>
  );
}

export default ListaPersonas;
