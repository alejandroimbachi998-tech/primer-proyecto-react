function Presentacion({usuario}){
    return(
        <article className='presentacion'>
                <h1> Hola, Soy {usuario.nombre}</h1>
                <h3>Mis datos son:</h3>
                <ul>
                    <>
                    <li> Vivo en {usuario.ubicacion}</li>
                    <li> Mi correo: {usuario.correo}</li>
                    <li> Contacto: {usuario.telefono}</li>
                    </>
                </ul>
                <h3></h3>
                <nav>
                    <a href=""></a>
                </nav>
        </article>
    )
}

export default Presentacion