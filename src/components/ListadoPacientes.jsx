import Paciente from "./Paciente";

const ListadoPacientes = () => {
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
        
        <Paciente /> {/* Importamos el compomente, asi no tengo que crear varios div con lo mismo */}
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />

      </div>

    </div>
  )
}

export default ListadoPacientes;
