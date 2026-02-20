import './css/Actividad3.css';
import { Shield, List, Hash, CheckCircle, Info, Download } from 'lucide-react';

export const Actividad3 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge terminal">Netfilter / iptables</span>
          <a 
            href={`${import.meta.env.BASE_URL}Actividades/Parcial1/178584-act02.pdf`} 
            download="178584-act03.pdf"
            className="download-button terminal-btn"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Políticas de Filtrado en Iptables</h2>
        <p className="text-slate-400 mt-2">
          Análisis, interpretación y traducción de reglas de firewall para la gestión de seguridad perimetral en Linux.
        </p>
      </header>

      <div className="info-grid">
        <div className="info-card border-blue">
          <Info className="text-blue-500 mb-2" />
          <h4>Flujo del Paquete</h4>
          <p>Al llegar al sistema, un paquete atraviesa una <strong>tabla</strong>, luego una <strong>cadena</strong> y finalmente ejecuta una <strong>regla/acción</strong>.</p>
        </div>
        <div className="info-card border-purple">
          <List className="text-purple-500 mb-2" />
          <h4>Tablas Principales</h4>
          <p>Uso de <code>FILTER</code> para bloqueo, <code>NAT</code> para redireccionamiento y <code>MANGLE</code> para manejo de QoS.</p>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Anatomía y Traducción de Comandos</h3>
        
        <div className="terminal-window mb-6">
          <div className="terminal-header">
            <span className="terminal-title">Analizando: iptables -A INPUT -p tcp --dports 80,443 -j ACCEPT</span>
          </div>
          <div className="terminal-body">
            <p className="text-green-400">Esta regla permite:</p>
            <p className="text-slate-300">
              Crear una regla en la tabla <strong>FILTER</strong> al final de la cadena de entrada que acepta paquetes 
              TCP con destino a los puertos 80 (HTTP) y 443 (HTTPS).
            </p>
          </div>
        </div>

        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Propósito</th>
                <th>Comando Técnico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Permitir tráfico HTTP</td>
                <td><code>iptables -A INPUT -p tcp --dport 80 -j ACCEPT</code></td>
              </tr>
              <tr>
                <td>Permitir tráfico saliente</td>
                <td><code>iptables -A OUTPUT -j ACCEPT</code></td>
              </tr>
              <tr>
                <td>Restringir SSH por IP</td>
                <td><code>iptables -A INPUT -p tcp --dport 22 -s 192.168.1.50 -j ACCEPT</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">Análisis de Regla Compleja</h3>
        <div className="analysis-card">
          <div className="card-icon">
            <Shield className="text-orange-500" size={32} />
          </div>
          <div className="card-content">
            <code className="block bg-black/40 p-3 rounded mb-3 text-orange-300">
              iptables -A INPUT -i eth0 -p tcp -m multiport --dports 22,80,443 -m state --state NEW,ESTABLISHED -j ACCEPT
            </code>
            <p className="text-slate-400">
              Esta política define que cualquier paquete TCP que ingrese por la interfaz <strong>eth0</strong> 
              hacia servicios críticos (SSH, HTTP, HTTPS) sea aceptado únicamente si es parte de una conexión 
              nueva o ya establecida, reforzando la seguridad mediante inspección de estados.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">Opciones de Gestión (CLI)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="command-box">
            <Hash className="text-slate-500" size={16} />
            <span><code>-L -n</code>: Ver reglas numéricamente (sin resolución DNS).</span>
          </div>
          <div className="command-box">
            <Hash className="text-slate-500" size={16} />
            <span><code>-L -v</code>: Ver contadores de paquetes y bytes.</span>
          </div>
          <div className="command-box">
            <Hash className="text-slate-500" size={16} />
            <span><code>--limit 5/minute</code>: Mitigación de ataques por fuerza bruta.</span>
          </div>
          <div className="command-box">
            <CheckCircle className="text-green-500" size={16} />
            <span><code>-j LOG</code>: Registrar intentos de acceso para auditoría.</span>
          </div>
        </div>
      </section>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};
