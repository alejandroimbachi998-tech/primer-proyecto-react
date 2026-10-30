import Presentacion from '../components/Presentacion';
import Tarjeta from '../components/Tarjeta';
import { tecnologias } from '../data/tecnologias';

function Inicio({ usuario, programa }) {
  return (
    <>
      <h2>Bienvenido al programa {programa}</h2>
      <Presentacion usuario={usuario} />
      <section className="tarjetas" id="tecnologias" aria-label="Tecnologías">
        {tecnologias.map((tecnologia) => (
          <Tarjeta key={tecnologia.id} {...tecnologia} />
        ))}
      </section>
    </>
  );
}

export default Inicio;
