import Header from './components/Header';
import Footer from './components/footer';
import { useState } from 'react';
import "./index.css"
import { Inicio, Parcial1, Parcial2, Parcial3 } from './pages';

function App() {
  // Mantenemos los IDs técnicos ('P1', 'P2', etc.) para la lógica, 
  // pero los nombres visuales los definiremos en el Header.
  const [paginaActual, setPaginaActual] = useState<'inicio' | 'P1' | 'P2' | 'P3'>('inicio');

  const componentes: Record<string, any> = {
    inicio: <Inicio />,
    P1: <Parcial1 />,
    P2: <Parcial2 />,
    P3: <Parcial3 />
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header cambiarPagina={setPaginaActual} />
      
      <main className="pt-20">
        {componentes[paginaActual]}
      </main>

      <Footer />
    </div>
  )
}

export default App;