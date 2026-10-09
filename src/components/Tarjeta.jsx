import reactLogo from '../assets/react.svg'

function Tarjeta(){
    return(
        <article className='tarjeta'>
            <img src={reactLogo} alt='Logo de Reeact' />
            <h3>React</h3>
            <p>Biblioteca de JavaScript para construir interfaces con componentes</p>

        </article>
    )
}

export default Tarjeta