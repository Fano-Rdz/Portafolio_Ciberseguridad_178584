import './css/Actividad7.css';
import { Monitor, Search, Lock, UserX, AlertTriangle, Download } from 'lucide-react';

export const Actividad7 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge danger">Cibercrimen & Dark Web</span>
          <a 
            href="/Actividades/Parcial1/178584-act07.pdf" 
            download="178584-act07.pdf"
            className="download-button danger-btn"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">La Caída de OxyMonster</h2>
        <p className="text-slate-400 mt-2">
          Análisis forense y tácticas de investigación internacional que llevaron a la captura del administrador de Dream Market.
        </p>
      </header>

      <div className="case-grid">
        <div className="case-card main-info">
          <h4 className="flex items-center gap-2"><Search size={20} className="text-blue-400"/> Resumen de la Operación</h4>
          <p>
            La investigación fue iniciada por la <strong>Agencia Francesa A-2</strong> [cite: 65, 66] como parte de la 
            <strong> Operación Bayoneta</strong>, diseñada para desmantelar <strong>Dream Market</strong>[cite: 67, 68], 
            el mercado ilícito más grande de la época.
          </p>
        </div>

        <div className="case-card highlight">
          <h4 className="flex items-center gap-2"><Monitor size={20} className="text-purple-400"/> Reputación y Ecosistema</h4>
          <p>
            En Dream Market, los vendedores ganaban confianza mediante un <strong>sistema de estrellas y calificaciones</strong> [cite: 69-72]. 
            Para asegurar las transacciones, utilizaban el sistema <strong>Escrow</strong> (un tercero retiene el pago hasta la entrega)  
            y <strong>The Mixer</strong> para anonimizar criptomonedas.
          </p>
        </div>
      </div>

      <section className="section-block mt-8">
        <h3 className="section-title">Análisis de Errores y Detención</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-icon"><Lock size={18}/></div>
            <div className="timeline-content">
              <h5>El Error Crítico</h5>
              <p>
                <strong>Gal Vallerius</strong> (OxyMonster)  cometió el error de reutilizar una <strong>dirección de correo personal</strong> 
                y cuentas de redes sociales (Instagram/Twitter) que compartían estilos de escritura y metadatos vinculados a su identidad en la Dark Web[cite: 78, 80].
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"><UserX size={18}/></div>
            <div className="timeline-content">
              <h5>La Prueba Definitiva</h5>
              <p>
                Al ser detenido en el aeropuerto de Atlanta, se confiscó su laptop. La prueba reina fue el hallazgo de su 
                <strong> llave privada de PGP</strong> configurada en el dispositivo, la cual coincidía exactamente con la usada 
                por OxyMonster para firmar mensajes en Dream Market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="warning-box">
        <AlertTriangle className="text-orange-500" size={24} />
        <div>
          <strong>Conclusión Técnica:</strong> El caso demuestra que la seguridad técnica (Tor, PGP, Mezcladores) es inútil 
          frente a fallos en la <strong>OPSEC (Operational Security)</strong> y el rastro de identidad digital en la Clear Web.
        </div>
      </div>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};