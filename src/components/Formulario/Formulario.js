import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" placeholder="ingresa nombre"/>
            <CampoTexto titulo="Puesto" placeholder="ingresa puesto"/>
            <CampoTexto titulo="Foto" placeholder="ingresa enlace de foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Formulario;