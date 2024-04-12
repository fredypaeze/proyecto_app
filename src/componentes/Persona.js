// Persona.js

export function Persona (props) {
    console.log(props)

  return (
    <div className='persona' 
      style ={{
        backgroundColor: props.color, 
      }}
      >
        <h3>Id : {props.id}</h3>
        <h3>Nombre : {props.nombre}</h3>
        <p>Edad : {props.edad}</p>
        <p>correo: {props.correo}</p>
    </div>
  )
}