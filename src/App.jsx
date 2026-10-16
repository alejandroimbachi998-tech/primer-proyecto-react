import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Presentacion from "./components/Presentacion";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";
import fotoPerfil from './images/descarga.jpg'

function App() {
  const programa = "Analisis y Desarrollo de Software";

  const usuario ={
    nombre: 'Alejandro Imbachi',
    rol: 'Aprendiz ADSO',
    foto: fotoPerfil,
    correo: 'alejandroimbachi998@gmail.com',
    telefono: '+57 323 5068524',
    ubicacion: 'Camilo Torres - Popayán - Cauca',
  }

  return (
    <div className="app-padre">
      <Encabezado usuario={usuario} />
      <div className="app-layout">
        <Sidebar usuario={usuario} />
        <main className="contenido"> 
          <h2>Bienvenido al Programa {programa}</h2>
          <Presentacion usuario={usuario}/>
          <section className="tarjetas">
            <Tarjeta
              icono="⚛️"
              titulo="React"
              descripcion="Herramienta de javascript para construir interfaces con componentes"
              horas={120}
              destacada={true}
            />            
            <Tarjeta
            icono="⚡"
            titulo="Vite"
            descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto"
            horas={60}
            destacada={false}
            />
            <Tarjeta
            icono="🔍"
            titulo="ESLint"
            descripcion="Revisa la calidad del código y encuentra errores"
            horas={20}
            destacada={false}
            />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;