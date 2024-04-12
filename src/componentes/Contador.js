import { useState } from "react";

export const Contador = () =>{
    const [numero, setNumero] = useState(0)
    //let numero = 0;

    const Sumar =() => {
        setNumero(numero + 1)
    }
    const Start =() => {
        setNumero(0)
    }
    return(
        <div>            
            <button onClick={Start}> Reiniciar </button>
            <h2> {numero} </h2>
            <button onClick={Sumar}> Sumar </button>

        </div>

    )
}