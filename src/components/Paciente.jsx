
const Paciente = ({paciente}) => {

    const {nombre, propietario, email, fechaAlta, sintoma} = paciente
        
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

        </div>
    )
}

export default Paciente
