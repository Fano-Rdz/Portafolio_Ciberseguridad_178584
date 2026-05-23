import { Shield, Server, Key, Users, FileCode, Download } from 'lucide-react';

export const Actividad17 = () => {
  return (
    <div className="actividad-content">
      {/* CABECERA DE LA ACTIVIDAD */}
      <header className="act-header">
        <div className="header-top">
          <span className="badge">Seguridad Informática II - CVSS v3.1</span>
          <a 
            href="./Actividades/Parcial3/act17-Equipo2.pdf" 
            download="act17-Equipo2.pdf"
            className="download-button"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Evaluación de Vulnerabilidades</h2>
        <p className="text-slate-400 mt-2">
          Cálculo y análisis del impacto de fallas de seguridad en sistemas web internos utilizando el estándar CVSS.
        </p>
      </header>

      {/* MÉTRICAS GLOBALES DEL SCORE */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Puntuación Base</span>
          <span className="stat-value text-yellow-500">4.7</span>
          <span className="stat-sub">Rango: 4.0 - 6.9</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Severidad</span>
          <span className="stat-value text-yellow-500" style={{ fontSize: '1.6rem' }}>Media (Medium)</span>
          <span className="stat-sub">Gravedad del Hallazgo</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Entorno</span>
          <span className="stat-value text-blue-400">Interno</span>
          <span className="stat-sub">Sistema Web Organizacional</span>
        </div>
      </div>

      {/* DESGLOSE DE LAS MÉTRICAS BASE */}
      <section className="section-block">
        <h3 className="section-title">Configuración de Métricas Base</h3>
        <div className="analysis-grid">
          <div className="analysis-item" style={{ borderTop: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Server size={18} className="text-blue-400" />
              <h4>Vector de Ataque (AV)</h4>
            </div>
            <p><strong>Red (Network - N):</strong> La vulnerabilidad es completamente explotable de forma remota a través de la infraestructura de red corporativa.</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Shield size={18} className="text-blue-400" />
              <h4>Complejidad (AC)</h4>
            </div>
            <p><strong>Baja (Low - L):</strong> No se requieren condiciones especiales ni configuraciones complejas para que el atacante ejecute el exploit con éxito.</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Key size={18} className="text-blue-400" />
              <h4>Privilegios (PR)</h4>
            </div>
            <p><strong>Altos (High - H):</strong> El atacante requiere credenciales con permisos elevados o de administrador para interactuar con el componente vulnerable.</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Users size={18} className="text-blue-400" />
              <h4>Interacción (UI)</h4>
            </div>
            <p><strong>Ninguna (None - N):</strong> El proceso de explotación es totalmente automatizado; no se requiere la acción o engaño a ningún usuario legítimo.</p>
          </div>
        </div>
      </section>

      {/* COMPONENTE DEL VECTOR STRING */}
      <section className="section-block bg-darker" style={{ padding: '1.5rem', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
          <FileCode size={20} className="text-blue-400" />
          <h3 className="section-title" style={{ margin: 0 }}>Vector String Oficial</h3>
        </div>
        <div style={{ 
          background: '#020617', 
          padding: '12px 18px', 
          borderRadius: '8px', 
          border: '1px solid #1e293b',
          fontFamily: 'monospace',
          color: '#3b82f6',
          fontSize: '0.95rem',
          overflowX: 'auto'
        }}>
          CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:L/I:L/A:L
        </div>
      </section>

      {/* TRÍADA DE IMPACTO */}
      <section className="section-block">
        <h3 className="section-title">Impacto en la Tríada de Seguridad (CIA)</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>Métrica CVSS</th>
              <th>Efecto Real en el Sistema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Confidencialidad (C)</strong></td>
              <td className="text-yellow-500 font-bold">Bajo (Low)</td>
              <td>Filtración limitada de datos. El atacante accede a cierta información sensible pero no compromete el core del sistema.</td>
            </tr>
            <tr>
              <td><strong>Integridad (I)</strong></td>
              <td className="text-yellow-500 font-bold">Bajo (Low)</td>
              <td>Modificaciones parciales. Es posible alterar ciertos registros o configuraciones secundarias sin romper el control total.</td>
            </tr>
            <tr>
              <td><strong>Disponibilidad (A)</strong></td>
              <td className="text-yellow-500 font-bold">Bajo (Low)</td>
              <td>Interrupciones menores. Puede generar degradación del servicio o caídas intermitentes sin provocar una denegación total de servicio.</td>
            </tr>
            <tr className="total-row">
              <td colSpan={2}>Alcance del Sistema (Scope - S)</td>
              <td style={{ color: '#94a3b8' }}><strong>Sin cambios (Unchanged - U):</strong> El impacto queda confinado estrictamente al recurso web interno examinado.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* INTERPRETACIÓN TÉCNICA */}
      <section className="section-block">
        <h3 className="section-title">Análisis de Amenazas y Conclusión</h3>
        <p className="actividad-texto" style={{ marginBottom: '1rem' }}>
          Aunque requiere privilegios elevados para su ejecución, esta vulnerabilidad representa un riesgo latente relevante[cite: 145]. Al ser de baja complejidad y no requerir interacción del usuario, puede ser explotada directamente si un atacante ya se encuentra dentro de la red corporativa[cite: 145].
        </p>
        <p className="actividad-texto">
          Los perfiles de atacante potenciales incluyen <strong>usuarios internos maliciosos</strong>, administradores con intenciones comprometidas o atacantes externos que hayan escalado privilegios mediante técnicas de <em>phishing</em> o robo de sesión[cite: 150]. No se clasifica como crítica, pero su remediación es prioritaria debido a que puede utilizarse en una <strong>cadena de exploits (exploit chaining)</strong> para ataques persistentes avanzados[cite: 152].
        </p>
      </section>

      {/* PIE DE REPORTE */}
      <footer className="report-footer" style={{ marginTop: '2rem' }}>
        <p>Integrantes: J. López, A. Mata, E. Rodríguez, E. Morín, I. Ros, M. Salinas</p>
        <p>Universidad Politécnica de San Luis Potosí — Profesor: Servando López Contreras</p>
      </footer>
    </div>
  );
};