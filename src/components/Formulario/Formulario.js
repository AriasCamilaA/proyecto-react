import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="ingresa nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
                />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="ingresa puesto" 
                required
                valor={puesto} 
                actualizarValor={setPuesto}
                />
            <CampoTexto 
                titulo="Foto" 
                placeholder="ingresa enlace de foto" 
                required
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;