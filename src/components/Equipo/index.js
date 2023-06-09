import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    // Destructuracion 
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, likes} = props
    const colorFondo = { backgroundColor:hexToRgba(colorPrimario, 0.3)}
    
    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id )
                    }}
                />
                <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index)=><Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            likes={likes}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;