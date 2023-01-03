import {useState, useEffect} from "react"; {/* Importamos los hooks */}

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="mt-5 text-lg text-center">
        Añadir Pacientes y {""}
        <span className="text-indigo-600 font-bold">
          Administrarlos
        </span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 mt-7 px-5 mb-10"> {/* shadow:sombras, rounded:redondeado, py: top y bottom(inferior), px: right y left */}

        <div>

          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Nombre de la Mascota
          </label>

          <input
            type="text"
            placeholder="Nombre de la mascota"
            id="mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba */}

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
          /> {/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba, type=date, no requiere placeholder */}

        </div>

        <div className="mt-5">

          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase"> {/* block=utiliza todo el horizontal, font bold: negrita, uppercase:lleva todo a mayusculas, htmlFor: sirve para hacer click en el label lleva al input, debe ser igual al id del input */}
            Sintomas
          </label>

          <textarea
              id="sintomas"
              placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          
          />{/*border-2:resaltar bordes, w-full:ocupa todo el ancho, p:padding, mt:espaciado arriba, type=date, no requiere placeholder */}

        </div>

        <input
          type="submit"
          className="mt-5 bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700"
          value="Agregar Paciente"
        /> {/* value:cambia el nombre que se muestra en el bttn, hover:cambiar el color del bttn una vez que paso por encima*/}

      </form>

    </div>
  )
}

export default Formulario;
