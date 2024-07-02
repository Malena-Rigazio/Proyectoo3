import { useState } from "react";
import "./Formulario.css";

export function Formulario( setUser ){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre === "" || contraseña === ""){
            setError(true)
            return
        }
        setError(false)
        setUser(nombre);
    };

    return(
        <section className="Login">
            <h2 className='titulo'>INICIO DE SESIÓN</h2>

                <form className="formulario" onSubmit={handleSubmit}>
                    <div className='elemento'>
                        <input 
                        className="user" 
                        type="text" 
                        placeholder="Usuario" 
                        value={nombre} 
                        onChange={e => setNombre(e.target.value)} />
                    </div>

                    <div className='elemento'>
                        <input 
                        className="pasw" 
                        type="password" 
                        placeholder="Contraseña" 
                        value={contraseña} 
                        onChange={e => setContraseña(e.target.value)} />
                    </div>

                    <div className='elemento'>
                        <button className='btnLogin' type="submit">Iniciar</button>
                    </div>
                </form>
            {error && <p className="errorLogin">Todos los campos son obligatorios.</p>}
        </section>
    )
}