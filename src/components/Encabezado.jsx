import MenuUsuario from "./MenuUsuarios"

function Encabezado(){
    return(
        <header className="encabezado">
            <h1>Mi primer APP con React</h1>
            <nav>
                <a href='#'>Inicio</a>
                <a href='#'>Tecnologías</a>
                <a href='#'>Contacto</a>
            </nav>
            <MenuUsuario />

        </header>
    )
}
export default Encabezado