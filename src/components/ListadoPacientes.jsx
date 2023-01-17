import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => { //extraigo los pacientes que le paso con el props
 

  return (
    <div className="md:w-1/2 lg:w-3/5" > {/* el md se puede ver cuando se va achicando la pantalla, tambien aca puedo agregar h-screen: fijamos un tamaño y con overflow-y-scroll: agregamos un scroll vertical*/}
      <h2 className="font-black text-xl text-center">
        Listado de Pacientes
      </h2>
      <p className="mt-5 text-lg text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">
          Pacientes y Citas
        </span>
      </p>

     
      <div className="md:h-screen overflow-y-scroll"> {/*Otra opcion es crean un div para los componentes y aca meter el h-screen: fijamos un tamaño y con overflow-y-scroll: agregamos un scroll vertical */}
        

        {pacientes.map (  (paciente) => 
            <Paciente 
              //No se recomienda pasar el indice como key, para ello podemos generar uno combinando la fecha y la funcion math.random

              key={paciente.id} //Siempre que se use un map, hay que pasar un key que seria el indice creado cuando se genera un objeto
              paciente={paciente}

            /> /* Importamos el compomente pasando como props al paciente, agrega uno por cada paciente se haya cargado */
        ) }
  



      </div>

    </div>
  )
}

export default ListadoPacientes;
