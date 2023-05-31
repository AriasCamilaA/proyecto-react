import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import Colaborador from './components/Colaborador';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/AriasCamilaA.png",
      nombre: "Camila Arias",
      puesto: "Analista",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/AriasCamilaA.png",
      nombre: "Camila Arias",
      puesto: "Desarrolladora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    // console.log("Nuevo:", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //  Eliminar Colaborador
  const eliminarColaborador = (id) => {
    // console.log("Eliminando:", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //  Actualizar color de Equipo
  const actualizarColor = (color, id) => {
    // console.log("Actualizar ",color," ", id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  
  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{ ...nuevoEquipo, id: uuid()}])
  }
  
  // Dar like
  const likes = (id) => {
    const newLike = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(newLike)
  }

  return (
    <div>
        <Header/>
        {/* {mostrarFormulario === true ? <Formulario/> : <></>} */}
        
        <MiOrg cambiarMostrar={cambiarMostrar} />
        
        {
          mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
        }

        {
          equipos.map((equipo) => <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            likes={likes}
          />)
        }

        <Footer/>
    </div>
  );
}

export default App;
