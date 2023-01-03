
const Paciente = () => {
    return (
        <div className="bg-white mt-7 ml-5 px-5 py-10 rounded-lg shadow-xl">

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Nombre: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    Nombre de la Mascota
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Propietario: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    Nombre del Propietario
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                E-Mail: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    E-Mail
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Fecha de Alta: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    Fecha de Alta
                </span>
            </p>

            <p className="block text-gray-700 font-bold uppercase mb-3">
                Sintomas: {""}
                <span className="font-normal normal-case"> {/* font-normal:saca la negrita, normal-case:saca las mayusculas */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor at, suscipit ducimus aperiam, minus repudiandae dolores dicta veritatis iure velit, provident itaque aut. Exercitationem laudantium dolorem dignissimos quia fugit!
                </span>
            </p>

        </div>
    )
}

export default Paciente
