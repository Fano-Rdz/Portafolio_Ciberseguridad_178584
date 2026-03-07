import { useState } from 'react';
import { ShieldCheck, Menu, X, ChevronDown } from 'lucide-react';
import './css/Header.css';

// 1. Actualizamos la interface para incluir los nuevos IDs
interface HeaderProps {
  cambiarPagina: (pagina: 'inicio' | 'P1' | 'P2' | 'P3' | 'PR01' | 'PR02' | 'SQLI') => void;
}

const Header = ({ cambiarPagina }: HeaderProps) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // 2. Separamos las opciones en dos arreglos
  const opcionesActividades = [
    { nombre: "Parcial 1", id: 'P1' as const },
    { nombre: "Parcial 2", id: 'P2' as const },
    { nombre: "Parcial 3", id: 'P3' as const },
  ];

  const opcionesProyectos = [
    { nombre: "PR01", id: 'PR01' as const },
    { nombre: "PR02", id: 'PR02' as const },
  ];

  const opcionesHoF = [
    { nombre: "SQL Injection", id: 'SQLI' as const }
  ];

  // 3. Actualizamos el tipo del parámetro
  const manejarNavegacion = (id: 'inicio' | 'P1' | 'P2' | 'P3' | 'PR01' | 'PR02' | 'SQLI') => {
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

      {/* Menú Desktop con Dropdowns */}
      <nav className="header-nav-desktop">
        {/* Dropdown Actividades */}
        <div className="dropdown">
          <button className="nav-button dropdown-trigger">
            Actividad <ChevronDown size={16} />
          </button>
          <div className="dropdown-content">
            {opcionesActividades.map((opcion) => (
              <button 
                key={opcion.id} 
                className="dropdown-item"
                onClick={() => manejarNavegacion(opcion.id)}
              >
                {opcion.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown Proyectos (NUEVO) */}
        <div className="dropdown">
          <button className="nav-button dropdown-trigger">
            Proyectos <ChevronDown size={16} />
          </button>
          <div className="dropdown-content">
            {opcionesProyectos.map((opcion) => (
              <button 
                key={opcion.id} 
                className="dropdown-item"
                onClick={() => manejarNavegacion(opcion.id)}
              >
                {opcion.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <button className="nav-button dropdown-trigger">
            Hall of Fame <ChevronDown size={16} />
          </button>
          <div className="dropdown-content">
            {opcionesHoF.map((opcion) => (
              <button 
                key={opcion.id} 
                className="dropdown-item" 
                onClick={() => manejarNavegacion(opcion.id)}
              >
                {opcion.nombre}
              </button>
            ))}
          </div>
        </div>
      </nav>

      
      <button 
        className="hamburger-button" 
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú Móvil */}
      {menuAbierto && (
        <div className="mobile-menu">
          <p className="mobile-section-title">Actividad</p>
          {opcionesActividades.map((opcion) => (
            <button 
              key={opcion.id} 
              className="mobile-nav-button"
              onClick={() => manejarNavegacion(opcion.id)}
            >
              {opcion.nombre}
            </button>
          ))}

          {/* Sección Proyectos en Móvil */}
          <p className="mobile-section-title" style={{ marginTop: '1rem' }}>Proyectos</p>
          {opcionesProyectos.map((opcion) => (
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