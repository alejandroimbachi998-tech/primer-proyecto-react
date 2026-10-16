function Presentacion({usuario}){
    return(
        <article className='presentacion'>
                <h1> Hola, Soy {usuario.nombre}</h1>
                <p> Vivo en {usuario.ubicacion}</p>
                <h3>Mis datos son:</h3>
                <ul>
                    <>
                    <li> {usuario.correo}</li>
                    <li> {usuario.telefono}</li>
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