import { useState } from 'react';
import { Lab01, Lab02, Lab03, Lab04, Lab05, Lab06, Lab07, Lab08, Lab09, Lab10, Lab11, Lab12, Lab13, Lab14, Lab15, Lab16 } from './Labs';
import './css/SQLInjection.css';
import { FileText } from 'lucide-react';

export const SQLInjection = () => {
  // Estado para controlar qué "Actividad" o sub-caso estamos viendo
  const [tabActiva, setTabActiva] = useState(1);

  // Lista de las 15 sub-secciones (puedes ir añadiendo los nombres reales)
  const subActividades = [
    { id: 1, nombre: "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data" },
    { id: 2, nombre: "SQL injection vulnerability allowing login bypass" },
    { id: 3, nombre: "SQL injection attack, querying the database type and version on Oracle" },
    { id: 4, nombre: "SQL injection attack, querying the database type and version on MySQL and Microsoft" },
    { id: 5, nombre: "SQL injection attack, listing the database contents on non-Oracle databases" },
    { id: 6, nombre: "SQL injection attack, listing the database contents on Oracle" },
    { id: 7, nombre: "SQL injection UNION attack, determining the number of columns returned by the query" },
    { id: 8, nombre: "SQL injection UNION attack, finding a column containing text" },
    { id: 9, nombre: "SQL injection UNION attack, retrieving data from other tables" },
    { id: 10, nombre: "SQL injection UNION attack, retrieving multiple values in a single column" },
    { id: 11, nombre: "Blind SQL injection with conditional responses" },
    { id: 12, nombre: "Blind SQL injection with conditional errors" },
    { id: 13, nombre: "Visible error-based SQL injection" },
    { id: 14, nombre: "Blind SQL injection with time delays" },
    { id: 15, nombre: "Blind SQL injection with time delays and information retrieval" },
    { id: 16, nombre: "Blind SQL injection with out-of-band interaction" },
  ];

  return (
    <div className="sqli-container">
      <header className="sqli-header">
        <h1 className="sqli-title">Hall of Fame: <span>SQL Injection</span></h1>
        <p className="sqli-subtitle">Explotación y mitigación de vulnerabilidades en bases de datos.</p>
      </header>

      {/* Selector de sub-actividades estilo Tabs (Referencia image_5141cb.png) */}
      <nav className="sqli-tabs-container">
        <div className="sqli-tabs-scroll">
          {subActividades.map((sub) => (
            <button
              key={sub.id}
              className={`sqli-tab-button ${tabActiva === sub.id ? 'active' : ''}`}
              onClick={() => setTabActiva(sub.id)}
            >
              Lab {sub.id}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenedor Principal de Contenido */}
      <main className="sqli-content-card">
        {tabActiva === 1 && <Lab01 />}
        {tabActiva === 2 && <Lab02 />} 
        {tabActiva === 3 && <Lab03 />}
        {tabActiva === 4 && <Lab04 />}
        {tabActiva === 5 && <Lab05 />}
        {tabActiva === 6 && <Lab06 />}
        {tabActiva === 7 && <Lab07 />}
        {tabActiva === 8 && <Lab08 />}
        {tabActiva === 9 && <Lab09 />}
        {tabActiva === 10 && <Lab10 />}
        {tabActiva === 11 && <Lab11 />}
        {tabActiva === 12 && <Lab12 />}
        {tabActiva === 13 && <Lab13 />}
        {tabActiva === 14 && <Lab14 />}
        {tabActiva === 15 && <Lab15 />}  
        {tabActiva === 16 && <Lab16 />} 
      </main>

      <footer className="sqli-footer">
        <div className="sqli-footer-content">
          <div className="sqli-footer-info">
            <FileText size={20} className="text-blue-400" />
            <div>
              <p className="footer-main-text">Reporte Consolidado SQL Injection</p>
              <p className="footer-sub-text">Incluye los 16 casos de explotación y mitigación.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};