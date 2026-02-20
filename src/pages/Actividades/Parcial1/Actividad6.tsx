import './css/Actividad6.css';
import topologiaImg from '../../../../assets/Parcial1/Actividad6/Topología.png';
import CryptoMap from '../../../../assets/Parcial1/Actividad6/CryptoMap.png';
import ping from '../../../../assets/Parcial1/Actividad6/successPing.png';
import { Network, ShieldCheck, Lock, Terminal as TerminalIcon, Cpu, Zap, Download } from 'lucide-react';

export const Actividad6 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge terminal">Cisco IOS - VPN Site-to-Site</span>
          <a 
            href={`${import.meta.env.BASE_URL}Actividades/Parcial1/178584-act06.pdf`} 
            download="178584-act06.pdf"
            className="download-button terminal-btn"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Implementación de Túneles IPsec</h2>
        <p className="text-slate-400 mt-2">
          Configuración de una VPN segura sobre infraestructura pública utilizando protocolos ISAKMP y encapsulamiento ESP.
        </p>
      </header>

      <div className="image-container-full main-topology">
        <div className="image-header">
           <Network size={20} className="text-blue-500" />
           <span>Topología de Red establecida</span>
        </div>
        <img src={topologiaImg} alt="Topología de Red VPN" className="actividad-img" />
        <p className="image-caption">Infraestructura de red establecida entre R1, ISP y R3</p>
      </div>

      <div className="info-grid">
        <div className="info-card border-blue">
          <Cpu className="text-blue-500 mb-2" />
          <h4>Licenciamiento</h4>
          <p>Activación del paquete <code>securityk9</code> en routers Cisco 1900 para habilitar comandos criptográficos avanzados.</p>
        </div>
        <div className="info-card border-orange">
          <Lock className="text-orange-500 mb-2" />
          <h4>Fase 1: ISAKMP</h4>
          <p>Establecimiento de la política de seguridad, autenticación mediante <strong>PSK</strong> y Diffie-Hellman.</p>
        </div>
        <div className="info-card border-green">
          <ShieldCheck className="text-green-500 mb-2" />
          <h4>Fase 2: IPsec</h4>
          <p>Definición del <strong>Transform Set</strong> y creación del Crypto Map vinculando ACLs de tráfico interesado.</p>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Configuración Crítica (Cisco CLI)</h3>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">R1# show running-config</span>
          </div>
          <div className="terminal-body">
            <code>
              <span className="comment">! --- Fase 1: Política ISAKMP ---</span><br />
              crypto isakmp policy 10<br />
              &nbsp;encryption aes 256<br />
              &nbsp;hash sha256<br />
              &nbsp;authentication pre-share<br />
              &nbsp;group 5<br /><br />
              
              <span className="comment">! --- Fase 2: IPsec Transform Set ---</span><br />
              crypto ipsec transform-set ESP-AES-SHA esp-aes esp-sha-hmac<br /><br />
              
              <span className="comment">! --- Aplicación en Interfaz ---</span><br />
              interface GigabitEthernet0/0<br />
              &nbsp;crypto map MYMAP
            </code>
          </div>
        </div>
      </section>

      <div className="dual-image-grid">
        <div className="image-container-full">
          <div className="image-header">
             <TerminalIcon size={18} className="text-slate-400" />
             <span>Configuración Crypto Map (CLI)</span>
          </div>
          <img src={CryptoMap} alt="Configuración Crypto Map" className="actividad-img" />
        </div>

        <div className="image-container-full ping-card">
          <div className="image-header">
             <Zap size={18} className="text-yellow-500" />
             <span>Verificación de Conectividad</span>
          </div>
          <div className="ping-img-wrapper">
            <img src={ping} alt="Éxito de Ping" className="ping-img" />
          </div>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Análisis de Resultados</h3>
        <div className="explanation-list">
          <div className="exp-item">
            <ShieldCheck className="text-green-500" size={24} />
            <div>
              <strong>Negociación de Seguridad:</strong> Se observó que los primeros paquetes fallan (timeout) mientras los routers negocian la SA (Security Association).
            </div>
          </div>
          <div className="exp-item">
            <Lock className="text-blue-500" size={24} />
            <div>
              <strong>Tráfico Interesante:</strong> El uso de ACLs permitió segmentar qué datos debían ser cifrados (LAN a LAN) y cuáles podían viajar sin protección.
            </div>
          </div>
        </div>
      </section>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};
