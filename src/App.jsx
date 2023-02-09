import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]); /*Defino un state para los pacientes, que inicializa como un vector*/
  const [paciente, setPaciente] = useState({}); /* Defino un state para un paciente, que inicialiaza como un objeto*/ 

  return (

    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">

        <Formulario

          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}

        /> {/*Paso los props pacientes y setPacientes al componente Formulario para ir cargando pacientes, tambien paso solo el paciente para que se cargue el formulario con los datos a modificar si el user presiona editar */}

        <ListadoPacientes

          pacientes={pacientes}
          setPaciente={setPaciente}

        /> {/* Paso los pacientes al listado para poder mostrarlos, tambien paso la funcion setPaciente para que esta llegue al componente Paciente */}

      </div>
    </div>
  )


}

export default App
