import { useState } from 'react';
import './css/Parcial1.css'; // Reutilizamos tus estilos globales de parciales
import { Actividad16, Actividad17, Actividad18 } from './Actividades/Parcial3';

export const Parcial3 = () => {
  // Inicializamos el estado en 16 para que apunte por defecto a la Actividad 16
  const [tabActiva, setTabActiva] = useState<number>(16);

  const actividades = [
    { id: 16, nombre: "Actividad 16" },
    { id: 17, nombre: "Actividad 17" },
    { id: 18, nombre: "Actividad 18" },
  ];

  return (
    <div className="parcial-container">
      <header>
        <h1 className="titulo-parcial">Tercer <span>Parcial</span></h1>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Gestión de evidencias y tareas de seguridad.
        </p>
      </header>

      {/* Navegación por pestañas idéntica al Parcial 1 */}
      <div className="tabs-wrapper">
        {actividades.map((act) => (
          <button
            key={act.id}
            onClick={() => setTabActiva(act.id)}
            className={`tab-button ${tabActiva === act.id ? 'active' : ''}`}
          >
            {act.nombre}
          </button>
        ))}
      </div>

      {/* Contenedor dinámico donde inyectaremos el contenido de cada tarea */}
      <div className="content-card">
        {tabActiva === 16 && (
          <Actividad16 />
        )}

        {tabActiva === 17 && (
          <Actividad17 />
        )}

        {tabActiva === 18 && (
          <Actividad18 />
        )}
      </div>
    </div>
  );
};