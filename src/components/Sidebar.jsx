import { opcionesMenu } from "../data/menu.js";
import { Link } from "react-router";

function Sidebar({ usuario }) {
    return (
        <aside className="sidebar">
            <h2>Hola, {usuario.nombre}</h2>
            <div>
                <h3 className="sidebar-titulo">Menú</h3>
                <nav>
                    <ul className="sidebar-menu">
                        {opcionesMenu.map((opcion) =>(
                            <li key={opcion.id}>
                                <Link to={opcion.url}>
                                    {opcion.icono} {opcion.texto}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <p className="sidebar-pie">3312943 - ADSO</p>
        </aside>
    );
}

export default Sidebar;