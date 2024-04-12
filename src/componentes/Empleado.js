import { useState } from "react";
import {Persona} from "./Persona";

const Empleado = () => {
    const [empleado, setEmpleado] = useState([
        {
            id: 1,
            nombre: "Julian Diaz",
            edad: 25,
            correo: "julian@gmail.com",
        },

        {
            id: 2,
            nombre: "Maria Angarita",
            edad: 34,
            correo: "maria@gmail.com",
        },

        {
            id: 3,
            nombre: "Arturo Dominguez",
            edad: 51,
            correo: "arturo@gmail.com",
        },

        {
            id: 5,
            nombre: "Brandon Salas",
            edad: 19,
            correo: "brandon@gmail.com",
        },

        {
            id: 6,
            nombre: "Juliana Machado",
            edad: 72,
            correo: "juliana@gmail.com",
        }
    ])

    return (

        <div> 
            {empleado.map((persona) => {
            return(    
                <Persona 
                    key = {persona.id}
                    nombre = {persona.nombre}
                    edad = {persona.edad}
                    correo = {persona.correo}
                />
                )
            })}
        </div>
    )
};

export default Empleado;