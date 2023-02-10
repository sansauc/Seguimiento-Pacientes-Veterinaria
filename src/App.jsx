import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); /*Defino un state para los pacientes, que inicializa como un vector*/
  const [paciente, setPaciente] = useState({}); /* Defino un state para un paciente, que inicializa como un objeto*/ 

   //este useEffect obtiene lo que hay en el localStorage, debido a que el arreglo siempre se carga vacio cuando se crea
   useEffect( () => {

    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      setPacientes(pacientesLS)
    }

    obtenerLS(); //mando a llamar la funcion anterior una vez que carga el componente

  }, []) //el arreglo vacio solo se ejecuta una vez

  //usamos el useEffect para cargar el localStorage, cada vez que se detecte un cambio en el arreglo Pacientes (nuevo paciente, update o delete)
  useEffect( () => {
    localStorage.setItem("pacientes", JSON.stringify (pacientes));
  }, [pacientes])
 
  const eliminarPaciente = id => {
    //se usa filter para sacar un elemento del arreglo
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id) //devuelve todos los objetos distintos al objeto que estamos buscando
 
    setPacientes(pacientesActualizados);

  }



  return (

    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">

        <Formulario

          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        /> {/*Paso los props pacientes y setPacientes al componente Formulario para ir cargando pacientes, tambien paso solo el paciente para que se cargue el formulario con los datos a modificar si el user presiona editar */}

        <ListadoPacientes

          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}//tambien puedo pasar una funcion como props

        /> {/* Paso los pacientes al listado para poder mostrarlos, tambien paso la funcion setPaciente para que esta llegue al componente Paciente */}

      </div>
    </div>
  )


}

export default App
