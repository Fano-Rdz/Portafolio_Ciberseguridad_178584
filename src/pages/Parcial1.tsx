import { useState } from 'react';
import './css/Parcial1.css'
import { Actividad1, Actividad2, Actividad3, Actividad4, Actividad5, Actividad6, Actividad7 } from './Actividades/Parcial1';

export const Parcial1 = () => {
  const [tabActiva, setTabActiva] = useState<number>(1);

  const actividades = [
    { id: 1, nombre: "Actividad 1" },
    { id: 2, nombre: "Actividad 2" },
    { id: 3, nombre: "Actividad 3" },
    { id: 4, nombre: "Actividad 4" },
    { id: 5, nombre: "Actividad 5" },
    { id: 6, nombre: "Actividad 6" },
    { id: 7, nombre: "Actividad 7" },
  ];

  return (
    <div className="parcial-container">
      <header>
        <h1 className="titulo-parcial">Primer <span>Parcial</span></h1>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Gestión de evidencias y tareas de seguridad.
        </p>
      </header>

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

      <div className="content-card">
        {tabActiva === 1 && (
          <Actividad1 />
        )}

        {tabActiva === 2 && (
          <Actividad2 />
        )}

        {tabActiva === 3 && (
          <Actividad3 />
        )}

        {tabActiva === 4 && (
          <Actividad4 />
        )}

        {tabActiva === 5 && (
          <Actividad5 />
        )}

        {tabActiva === 6 && (
          <Actividad6 />
        )}

        {tabActiva === 7 && (
          <Actividad7 />
        )}
      </div>
    </div>
  );
};