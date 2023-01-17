const Error = ({mensaje}) => {
    return (
        <div className="mb-3 bg-red-800 w-full p-2 text-white uppercase font-bold rounded-md text-center">
            <p>
                {mensaje}
            </p>
        </div>
    )
}

export default Error
