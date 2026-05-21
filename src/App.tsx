import Header from './components/Header';
import Footer from './components/footer';
import { useState } from 'react';
import "./index.css";
import { Inicio, Parcial1, Parcial2, Parcial3 } from './pages';
import { PR01, PR02 } from './pages/Proyectos';
import { SQLInjection } from './pages/HallOfFame';
// 1. Importamos el nuevo componente (lo crearemos a continuación)
import Certificaciones from './pages/Certificaciones'; 

function App() {
  // 2. Agregamos 'certificaciones' a la unión de tipos del useState
  const [paginaActual, setPaginaActual] = useState<'inicio' | 'P1' | 'P2' | 'P3' | 'PR01' | 'PR02' | 'SQLI' | 'certificaciones'>('inicio');

  // 3. Tipamos el objeto Record de forma estricta para que coincida exactamente con las páginas válidas
  const componentes: Record<'inicio' | 'P1' | 'P2' | 'P3' | 'PR01' | 'PR02' | 'SQLI' | 'certificaciones', React.ReactNode> = {
    inicio: <Inicio />,
    P1: <Parcial1 />,
    P2: <Parcial2 />,
    P3: <Parcial3 />,
    PR01: <PR01 />, 
    PR02: <PR02 />,
    SQLI: <SQLInjection />,
    certificaciones: <Certificaciones /> // <-- 4. Añadimos el nuevo módulo aquí
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* setPaginaActual ahora encaja perfectamente con lo que espera el Header */}
      <Header cambiarPagina={setPaginaActual} />
      
      <main className="pt-20">
        {componentes[paginaActual] || <Inicio />}
      </main>

      <Footer />
    </div>
  );
}

export default App;