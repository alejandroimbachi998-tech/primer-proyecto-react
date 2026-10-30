import Presentacion from '../components/Presentacion'

function Perfil({ usuario }) {
    return (
        <>
            <h2>Mi perfil</h2>
            <Presentacion usuario={usuario} />
        </>
    );
}

export default Perfil