import './css/Actividad2.css';
import { Shield, Book, Zap, AlertTriangle,Download } from 'lucide-react';

export const Actividad2 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge secondary">Marcos: X.800 & RFC 4949</span>
          <a 
            href={`${process.env.PUBLIC_URL}/Actividades/Parcial1/178584-act02.pdf`} 
            download="178584-act02.pdf"
            className="download-button secondary"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4"> Arquitectura de Seguridad y Terminología </h2>
        <p className="text-slate-400 mt-2">
          Análisis de servicios de seguridad y mecanismos de defensa basados en estándares internacionales.
        </p>
      </header>

      <div className="foundations-grid">
        <div className="foundation-card">
          <div className="icon-wrapper blue">
            <Shield size={24} />
          </div>
          <h3>ITU-T X.800</h3>
          <p>Define sistemáticamente los servicios de seguridad (autenticación, integridad, confidencialidad) para el modelo OSI.</p>
        </div>
        <div className="foundation-card">
          <div className="icon-wrapper purple">
            <Book size={24} />
          </div>
          <h3>RFC 4949</h3>
          <p>Glosario fundamental que establece la terminología técnica precisa para la comunicación profesional de incidentes.</p>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Análisis de Escenarios Críticos</h3>
        <div className="scenarios-container">

          <div className="scenario-item">
            <div className="scenario-header">
              <Zap size={20} className="text-yellow-400" />
              <h4>Escenario: Ransomware LockBit</h4>
            </div>
            <p className="scenario-desc">Cifrado masivo y exfiltración de datos sensibles con amenaza de publicación.</p>
            <div className="impact-tags">
              <span className="tag">Control de Acceso</span>
              <span className="tag">Confidencialidad</span>
              <span className="tag">Disponibilidad</span>
            </div>
            <div className="control-box">
              <strong>Control Recomendado:</strong> Backups offline y cifrado de datos en reposo.
            </div>
          </div>

          <div className="scenario-item">
            <div className="scenario-header">
              <AlertTriangle size={20} className="text-red-400" />
              <h4>Escenario: Abuso de Privilegios</h4>
            </div>
            <p className="scenario-desc">Empleado con acceso legítimo extrae y vende bases de datos aprovechando privilegios excesivos.</p>
            <div className="impact-tags">
              <span className="tag">Insider Threat</span>
              <span className="tag">Confidencialidad</span>
            </div>
            <div className="control-box">
              <strong>Control Recomendado:</strong> Principio de Privilegio Mínimo y soluciones DLP.
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-darker">
        <h3 className="section-title">Matriz de Mitigación Técnica</h3>
        <table className="analysis-table">
          <thead>
            <tr>
              <th>Tipo de Amenaza</th>
              <th>Vector de Ataque</th>
              <th>Impacto (RFC 4949)</th>
              <th>Estrategia de Defensa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Externa (Phishing)</td>
              <td>Robo de credenciales</td>
              <td>Masquerade / Auth Failure</td>
              <td>MFA / Tokens físicos</td>
            </tr>
            <tr>
              <td>Cadena de Suministro</td>
              <td>Inyección de código </td>
              <td>Manipulación de productos</td>
              <td>Verificación de fuentes </td>
            </tr>
            <tr>
              <td>Error de Configuración</td>
              <td>Exposición en la nube</td>
              <td>Data Exposure</td>
              <td>Monitoreo CSPM</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};
