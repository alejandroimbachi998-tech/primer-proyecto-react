import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import PiePagina from "./components/PiePagina";
import fotoPerfil from './images/descarga.jpg';
import Inicio from "./pages/Inicio";
import Perfil from './pages/Perfil';
import { Route, Routes } from 'react-router';

function App() {
  const programa = "Analisis y Desarrollo de Software";

  const usuario = {
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
          <Routes>
            <Route path="/" element={<Inicio usuario={usuario} programa={programa} />} />
            <Route path="/perfil" element={<Perfil usuario={usuario} />} />
          </Routes>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;