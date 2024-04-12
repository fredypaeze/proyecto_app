import { useState, useEffect } from "react";

const Estado = () => {

    const [msg, setMsg] = useState("");

    const sTexto = (e) => {
        setMsg(e.target.value)
    }

    useEffect(() => {
        console.log("Bienvenidos a la clase. El componente está montado");
        return() => {
            console.log("Terminada la clase. El componente está desmontado")
        }
    },[]);

    useEffect(() =>{
        console.log("El texto ingresado se ha modificado")

    },[msg]);

    return (
        <div>
            <input type="text" onChange={sTexto} />
            <p>{msg}</p>
        </div>
    )
}

export default Estado;