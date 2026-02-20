import './css/Actividad4.css';
import { ShieldCheck, Network, Lock, Download } from 'lucide-react';

export const Actividad4 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge terminal">Configuración de Firewall</span>
          <a 
            href="./Actividades/Parcial1/178584-act04.pdf" 
            download="178584-act04.pdf"
            className="download-button terminal-btn"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Administración de iptables</h2>
        <p className="text-slate-400 mt-2">
          Implementación de políticas de seguridad y filtrado de paquetes para servidores Linux.
        </p>
      </header>

      <div className="info-grid">
        <div className="info-card border-orange">
          <Lock className="text-orange-500 mb-2" />
          <h4>Política por Defecto</h4>
          <p>Uso de <strong>DROP</strong> en las cadenas INPUT, FORWARD y OUTPUT para establecer un entorno de confianza cero.</p>
        </div>
        <div className="info-card border-blue">
          <Network className="text-blue-500 mb-2" />
          <h4>Segmentación</h4>
          <p>Control específico para la red local 192.168.1.0/24 y servicios orientados a Internet.</p>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Script de Configuración (Netfilter)</h3>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">bash — iptables.sh</span>
          </div>
          <div className="terminal-body">
            <code><span className="comment"># 1. Establecer política restrictiva</span>
            <span className="command">iptables</span> -P INPUT DROP
            <span className="command">iptables</span> -P FORWARD DROP
            <span className="command">iptables</span> -P OUTPUT DROP

            <span className="comment"># 2. Permitir tráfico de conexiones establecidas</span>
            <span className="command">iptables</span> -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

            <span className="comment"># 3. Tráfico DNS saliente (Red Local)</span>
            <span className="command">iptables</span> -A OUTPUT -p tcp --dport 53 -s 192.168.1.0/24 -j ACCEPT

            <span className="comment"># 4. Servidor de Correo (SMTP)</span>
            <span className="command">iptables</span> -A INPUT -p tcp --dport 25 -j ACCEPT
            <span className="command">iptables</span> -A OUTPUT -p tcp --dport 25 -j ACCEPT

            <span className="comment"># 5. Servidor Web (HTTP/HTTPS)</span>
            <span className="command">iptables</span> -A INPUT -p tcp --dport 80 -j ACCEPT
            <span className="command">iptables</span> -A OUTPUT -p tcp --dport 80 -s 192.168.1.0/24 -j ACCEPT
            <span className="command">iptables</span> -A INPUT -p tcp --dport 443 -j ACCEPT

            <span className="comment"># 6. Acceso SSH Administrativo</span>
            <span className="command">iptables</span> -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT</code>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">Explicación de Reglas Críticas</h3>
        <div className="explanation-list">
          <div className="exp-item">
            <ShieldCheck className="text-green-500" size={20} />
            <div>
              <strong>Estado de Conexión:</strong> Se permite el tráfico <em>ESTABLISHED</em> para evitar que las respuestas a peticiones legítimas sean bloqueadas por la política DROP.
            </div>
          </div>
          <div className="exp-item">
            <ShieldCheck className="text-green-500" size={20} />
            <div>
              <strong>Restricción SSH:</strong> El acceso remoto está limitado exclusivamente a la red interna (192.168.1.0/24) para prevenir ataques de fuerza bruta desde el exterior.
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
