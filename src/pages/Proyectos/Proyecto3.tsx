import { useState } from 'react';
import { Download } from 'lucide-react';
import { FaseContexto, FaseRiesgos, FaseTratamiento, FaseAuditoria } from './SeccionesPR03.tsx'; 
import './css/PR03.css'; // Reutilización de tus variables globales de diseño

export const PR03 = () => {
  const [faseActiva, setFaseActiva] = useState<'contexto' | 'riesgos' | 'tratamiento' | 'auditoria'>('contexto');

  return (
    <div className="parcial-container">
      {/* CABECERA PRINCIPAL */}
      <header className="act-header">
        <div className="header-top">
          <span className="badge">Proyecto Integrador — ISO/IEC 27001:2022</span>
          <a href="./Proyecto/PR03-Equipo2.pdf" download="PR03-Equipo2.pdf" className="download-button">
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">SGSI: Caso de Estudio Telegram Inc.</h2>
        <p className="text-slate-400 mt-2">
          Diseño e implementación de un Sistema de Gestión de Seguridad de la Información enfocado en el protocolo MTProto 2.0 y arquitectura distribuida.
        </p>
      </header>

      {/* SUB-NAVEGACIÓN BASADA EN LAS 4 FASES DEL CICLO DEMING (PDCA) */}
      <div className="tabs-wrapper" style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}>
        <button onClick={() => setFaseActiva('contexto')} className={`tab-button ${faseActiva === 'contexto' ? 'active' : ''}`}>
          1. Contexto & Alcance
        </button>
        <button onClick={() => setFaseActiva('riesgos')} className={`tab-button ${faseActiva === 'riesgos' ? 'active' : ''}`}>
          2. Análisis de Riesgos (SoA)
        </button>
        <button onClick={() => setFaseActiva('tratamiento')} className={`tab-button ${faseActiva === 'tratamiento' ? 'active' : ''}`}>
          3. Plan de Tratamiento
        </button>
        <button onClick={() => setFaseActiva('auditoria')} className={`tab-button ${faseActiva === 'auditoria' ? 'active' : ''}`}>
          4. No Conformidades & Mejora
        </button>
      </div>

      {/* CONTENEDOR DINÁMICO */}
      <div className="content-card" style={{ marginTop: '1.5rem' }}>
        {faseActiva === 'contexto' && <FaseContexto />}
        {faseActiva === 'riesgos' && <FaseRiesgos />}
        {faseActiva === 'tratamiento' && <FaseTratamiento />}
        {faseActiva === 'auditoria' && <FaseAuditoria />}
      </div>
    </div>
  );
};