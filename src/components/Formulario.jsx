import {useState, useEffect} from "react"; {/* Importamos los hooks */}
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState(''); {/*Aca declaro el hooks useState */}
  const [propietario, setPropietario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fechaAlta, setFechaAlta] = useState(''); 
  const [sintoma, setSintoma] = useState(''); 

  const [error, setError] = useState(false); {/* Para controlar los errores */}
  
  useEffect ( () => {

    if (Object.keys(paciente).length > 0){ //Object.keys pregunta si un objeto esta cargado o no
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintoma(paciente.sintoma);
    }//cargo los inputs con los valores del objeto a editar

  }, [paciente]);



  const reiniciarFormulario = () =>{
    setNombre(''),
    setPropietario(''),
    setEmail(''),
    setFechaAlta(''),
    setSintoma('')
  }

  const generarId = () => {
    const random = Math.random().toString(36).substring(2) //trae un nro entre 2 y 36, y quita los 2 al principio por si viene con ","
    const fecha = Date.now().toString()

    return fecha + random
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar Formulario
    const arrayEntry = [nombre, propietario,email,fechaAlta,sintoma]

    if(arrayEntry.includes('')){
      setError(true);
      return;
    }
  
    setError(false)

    //Formamos el objeto paciente una vez realizada las validaciones correspondiente
    
    const objetoPacientes={
      nombre, 
      propietario,
      email,
      fechaAlta,
      sintoma,
    }

    if (paciente.id){
      //editando el registro

      objetoPacientes.id = paciente.id //el id que ya tengo se lo asigno al nuevo objeto

      //     console.log(objetoPacientes) //objetoPacientes pasa a ser el actualizado
//    console.log(paciente) //es la version sin editar
      
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
        paciente.id ? objetoPacientes : pacienteState) //PacienteState: hace referencia al paciente actualizado, luego se identifica que registro se esta editando y se retorna el objeto 
                                                      //actualizado (objetoPaciente) o otro paciente que no se esta modificando (pacienteState) para ir formando el array nuevo que le paso a setPacientes

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo Registro  

      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]) //una vez que termina la validaci??n devuelvo el props al componente padre
      //toma una copia de los objetos que ya existen en pacientes (...pacientes) y le agrega los nuevos que hay en objetoPacientes

    }


    reiniciarFormulario();

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="mt-5 text-lg text-center">
        A??adir Pacientes y {""}
        <span className="text-indigo-600 font-bold">
          Administrarlos
        </span>
      </p>

      <form 
        
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 mt-7 px-5 mb-10"> {/* shadow:sombras, rounded:redondeado, py: top y bottom(inferior), px: right y left */}

        {error && <Error mensaje='Todos los campos son obligatorios'/> } {/* <Error/> --> Asi implemento un componente, le paso un mensaje */}

        <div>

          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Nombre de la Mascota
          </label>

          <input
            type="text"
            placeholder="Nombre de la mascota"
            id="mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba */}
             {/*value:hace referencia al valor que esta dentro input, el onChange es como el evenListener de JS, con evento.target.value hacemos referencia al valor del input, y eso lo guardamos en setNombre   */}
        </div>

        <div className="mt-5">

          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Nombre del Propietario
          </label>

          <input
            type="text"
            placeholder="Nombre del propietario"
            id="propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={propietario}
            onChange={(evento) => setPropietario(evento.target.value)}
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba */}

        </div>

        <div className="mt-5">

          <label htmlFor="email" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            E-mail
          </label>

          <input
            type="email"
            placeholder="E-mail"
            id="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba, type=email */}

        </div>

        <div className="mt-5">

          <label htmlFor="fechaAlta" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Fecha de Alta
          </label>

          <input
            type="date"
            id="fechaAlta"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fechaAlta}
            onChange={(evento) => setFechaAlta(evento.target.value)}
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba, type=date, no requiere placeholder */}

        </div>

        <div className="mt-5">

          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Sintomas
          </label>

          <textarea
              id="sintomas"
              placeholder="Describe los s??ntomas"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={sintoma}
              onChange={(evento) => setSintoma(evento.target.value)}
          />{/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba, type=date, no requiere placeholder */}

         </div>

        <input
          type="submit"
          className="mt-5 bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        /> {/* value:cambia el nombre que se muestra en el bttn, hover:cambiar el color del bttn una vez que paso por encima*/}

      </form>

    </div>
  )
}

export default Formulario;
