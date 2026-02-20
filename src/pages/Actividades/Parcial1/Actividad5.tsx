import './css/Actividad5.css';
import { 
  ShieldAlert, Target, BarChart3, Workflow, 
  Layers, Milestone, Activity, Download 
} from 'lucide-react';

export const Actividad5 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge terminal">Análisis Técnico v2.0</span>
          <a 
           href={`${import.meta.env.BASE_URL}Actividades/Parcial1/178584-act05.pdf`} 
            download="178584-act05.pdf"
            className="download-button terminal-btn"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Estándares y Marcos de Pentesting</h2>
        <p className="text-slate-400 mt-2">
          Investigación comparativa detallada sobre las metodologías que rigen la seguridad informática profesional.
        </p>
      </header>

      <div className="methodology-column">
        {/* MITRE ATT&CK */}
        <div className="full-info-card border-blue">
          <div className="card-side-icon">
            <Target className="text-blue-500" size={40} />
          </div>
          <div className="card-main-content">
            <div className="card-header-flex">
              <h4>MITRE ATT&CK</h4>
              <span className="tag-version">v16 - Activo</span>
            </div>
            <p className="main-desc">Base de conocimiento global basada en observaciones del mundo real sobre tácticas y técnicas de adversarios.</p>
            
            <div className="tech-specs">
              <div className="spec-item">
                <Layers size={16} />
                <span><strong>Estructura:</strong> Matrices (Enterprise, Mobile, ICS) organizadas en Tácticas y Técnicas.</span>
              </div>
              <div className="spec-item">
                <Activity size={16} />
                <span><strong>Escenarios:</strong> Threat Hunting, Red Teaming y Emulación de Adversarios.</span>
              </div>
              <div className="spec-item">
                <Milestone size={16} />
                <span><strong>Objetivo:</strong> Categorizar el comportamiento del atacante para mejorar la detección.</span>
              </div>
            </div>
            <div className="card-footer-tags">
              <span className="footer-tag">Orientación: Purple Teaming</span>
              <span className="footer-tag">Org: MITRE Corp.</span>
            </div>
          </div>
        </div>

        {/* OWASP WSTG */}
        <div className="full-info-card border-green">
          <div className="card-side-icon">
            <ShieldAlert className="text-green-500" size={40} />
          </div>
          <div className="card-main-content">
            <div className="card-header-flex">
              <h4>OWASP WSTG</h4>
              <span className="tag-version">v4.2 / v5.0</span>
            </div>
            <p className="main-desc">Marco integral para evaluar la seguridad del software y aplicaciones web mediante pruebas estandarizadas.</p>
            
            <div className="tech-specs">
              <div className="spec-item">
                <Layers size={16} />
                <span><strong>Fases:</strong> Identidad, Autenticación, Sesión, Validación de Datos, Criptografía.</span>
              </div>
              <div className="spec-item">
                <Activity size={16} />
                <span><strong>Escenarios:</strong> Auditoría Web, Desarrollo Seguro (SDLC) y Bug Bounty.</span>
              </div>
            </div>
            <div className="card-footer-tags">
              <span className="footer-tag">Org: OWASP Foundation</span>
              <span className="footer-tag">Cert: Base para OSWE</span>
            </div>
          </div>
        </div>

        {/* PTES */}
        <div className="full-info-card border-purple">
          <div className="card-side-icon">
            <Workflow className="text-purple-500" size={40} />
          </div>
          <div className="card-main-content">
            <div className="card-header-flex">
              <h4>PTES (Penetration Testing Execution Standard)</h4>
              <span className="tag-version">Estándar de Facto</span>
            </div>
            <p className="main-desc">Define el estándar de calidad y los pasos técnicos mínimos para una prueba de penetración profesional.</p>
            
            <div className="tech-specs">
              <div className="spec-item">
                <Milestone size={16} />
                <span><strong>Fases:</strong> Pre-acuerdo, Inteligencia, Modelado, Vulnerabilidades, Explotación, Post-explotación y Reporte.</span>
              </div>
              <div className="spec-item">
                <Activity size={16} />
                <span><strong>Escenarios:</strong> Pentesting de red externo/interno y contratos de hacking ético.</span>
              </div>
            </div>
            <div className="card-footer-tags">
              <span className="footer-tag">Orientación: Ofensiva</span>
              <span className="footer-tag">Cert: eCPPT / PTP</span>
            </div>
          </div>
        </div>

        {/* OSSTMM */}
        <div className="full-info-card border-orange">
          <div className="card-side-icon">
            <BarChart3 className="text-orange-500" size={40} />
          </div>
          <div className="card-main-content">
            <div className="card-header-flex">
              <h4>OSSTMM</h4>
              <span className="tag-version">v3.0 / v4.0 Draft</span>
            </div>
            <p className="main-desc">Metodología científica que cuantifica la seguridad mediante la medición de la seguridad operativa (RAVs).</p>
            
            <div className="tech-specs">
              <div className="spec-item">
                <Layers size={16} />
                <span><strong>Canales:</strong> Humano, Físico, Inalámbrico, Telecomunicaciones y Redes de Datos.</span>
              </div>
              <div className="spec-item">
                <Activity size={16} />
                <span><strong>Escenarios:</strong> Auditorías integrales y cumplimiento normativo con métricas exactas.</span>
              </div>
            </div>
            <div className="card-footer-tags">
              <span className="footer-tag">Métrica: RAVs</span>
              <span className="footer-tag">Org: ISECOM</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Análisis de Vigencia (Status Check)</h3>
        <div className="terminal-window">
          <div className="terminal-body monospace">
            <div className="terminal-line"><span className="command">NIST SP 800-115</span> <span className="text-slate-500"></span> Vigente desde 2008 (Estándar Global)</div>
            <div className="terminal-line"><span className="command">ISSAF</span> <span className="text-red-500"></span> <span className="text-red-400">DESCONTINUADO</span> (Uso en entornos Legacy únicamente)</div>
          </div>
        </div>
      </section>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};
