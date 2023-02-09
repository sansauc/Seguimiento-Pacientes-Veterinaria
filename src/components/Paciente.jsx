
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fechaAlta, sintoma, id } = paciente

    const handleEliminar = () =>{
        const respuesta = confirm("Deseas eliminar este paciente?")

        if (respuesta){
            eliminarPaciente(id); //Tomo el id del paciente y lo paso hasta el componente App para tratarlo
        }

    }


    return (
        <div className="bg-white mt-7 ml-5 px-5 py-10 rounded-lg shadow-xl">

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Nombre: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    {nombre}
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Propietario: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    {propietario}
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                E-Mail: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    {email}
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Fecha de Alta: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    {fechaAlta}
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Sintomas: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    {sintoma}
                </span>
            </p>

            
            <div className="flex justify-between">
                <input
                    type="submit"
                    className="mt-5 bg-indigo-600  py-2 px-10 text-white uppercase font-bold hover:bg-indigo-700 rounded-lg"
                    value="Editar"
                    onClick={() => setPaciente(paciente)}
                /> {/* value:cambia el nombre que se muestra en el bttn, hover:cambiar el color del bttn una vez que paso por encima, onClick= recupero el paciente con la funcion setPaciente que viene desde App.jsx*/}

                <input
                    type="submit"
                    className="mt-5 bg-red-600  py-2 px-10 text-white uppercase font-bold hover:bg-red-700 rounded-lg"
                    onClick={handleEliminar}
                    value="Eliminar"
                />{/*"handleEliminar sin () espera a que se dispare el evento antes de ejecutarse"*/} 
            </div>


        </div>
    )
}

export default Paciente
