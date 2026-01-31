import { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import './css/Header.css';

interface HeaderProps {
  cambiarPagina: (pagina: 'inicio' | 'P1' | 'P2' | 'P3') => void;
}

const Header = ({ cambiarPagina }: HeaderProps) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const opciones = [
    { nombre: "Parcial 1", id: 'P1' as const },
    { nombre: "Parcial 2", id: 'P2' as const },
    { nombre: "Parcial 3", id: 'P3' as const },
  ];

  const manejarNavegacion = (id: 'inicio' | 'P1' | 'P2' | 'P3') => {
    cambiarPagina(id);    
    setMenuAbierto(false); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-container">
      <button className="logo-button" onClick={() => manejarNavegacion('inicio')}>
        <ShieldCheck color="#3b82f6" />
        <span>Portafolio de Seguridad Informática</span>
      </button>

      <nav className="header-nav-desktop">
        {opciones.map((opcion) => (
          <button 
            key={opcion.id} 
            className="nav-button"
            onClick={() => manejarNavegacion(opcion.id)}
          >
            {opcion.nombre}
          </button>
        ))}
      </nav>

      <button 
        className="hamburger-button" 
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuAbierto && (
        <div className="mobile-menu">
          {opciones.map((opcion) => (
            <button 
              key={opcion.id} 
              className="mobile-nav-button"
              onClick={() => manejarNavegacion(opcion.id)}
            >
              {opcion.nombre}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;