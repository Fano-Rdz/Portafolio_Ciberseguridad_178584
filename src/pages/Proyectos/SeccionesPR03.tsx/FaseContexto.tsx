import { Shield, Users, Network, Code, Server, Globe } from 'lucide-react';

export const FaseContexto = () => {
  return (
    <div className="fade-in">
      {/* 1. SECCIÓN DE BIENVENIDA Y GENERALIDADES */}
      <div className="info-card">
        <div className="section-header">
          <Shield className="section-icon" size={22} />
          <h2>1. Entorno y Objetivos Estratégicos de Telegram Inc.</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
          Telegram se estructura como una organización altamente distribuida y eficiente, diseñada para evadir la coerción de jurisdicciones estatales únicas y garantizar la libre comunicación. Su modelo operativo destaca por mantener un equipo de ingeniería extremadamente compacto junto a una infraestructura de servidores geográficamente fragmentada.
        </p>

        {/* REJILLA DE MÉTRICAS OPERATIVAS */}
        <div className="metrics-grid">
          <div className="metric-box exitoso">
            <div className="metric-header">
              <span>ESTRUCTURA DE EQUIPO</span>
              <Users size={16} />
            </div>
            <p><strong>~30 Ingenieros Core:</strong> Un equipo compacto de alta especialización encargado del desarrollo y las decisiones arquitectónicas globales del protocolo.</p>
          </div>

          <div className="metric-box">
            <div className="metric-header">
              <span>INFRAESTRUCTURA</span>
              <Network size={16} />
            </div>
            <p><strong>Clústeres Distribuidos:</strong> Servidores repartidos en múltiples jurisdicciones internacionales para evitar un punto único de falla o confiscación legal.</p>
          </div>

          <div className="metric-box">
            <div className="metric-header">
              <span>CORE ASSET</span>
              <Code size={16} />
            </div>
            <p><strong>MTProto 2.0:</strong> Protocolo criptográfico propietario de desarrollo interno sobre el cual se sostiene la confidencialidad de la plataforma.</p>
          </div>
        </div>
      </div>

      {/* 2. ÁREAS Y PROCESOS ESPECÍFICOS A PROTEGER */}
      <div className="info-card">
        <div className="section-header">
          <Globe className="section-icon" size={22} />
          <h2>2. Procesos Operativos Críticos bajo el SGSI</h2>
        </div>
        <p style={{ marginBottom: '1.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
          Mapeo y segmentación de los flujos de trabajo organizacionales que interactúan directamente con los activos de información de la compañía:
        </p>

        <div className="ethical-grid">
          {/* PROCESO A */}
          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', color: '#60a5fa' }}>
              <Code size={20} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>Proceso A: SDLC Seguro</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Ciclo de Vida de Desarrollo de Software orientado a la protección del código fuente y empaquetado de aplicaciones:
            </p>
            <ul>
              <li>🔹 Control estricto de fusiones (merges) en repositorios centrales.</li>
              <li>🔹 Revisiones criptográficas constantes de las librerías del cliente.</li>
              <li>🔹 Ofuscación y firmas digitales en la compilación de binarios.</li>
            </ul>
          </div>

          {/* PROCESO B */}
          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', color: '#10b981' }}>
              <Server size={20} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>Proceso B: Gestión de Infraestructura</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Administración operativa de los centros de datos distribuidos y la replicación de bases de datos:
            </p>
            <ul>
              <li>🔹 Segmentación de llaves criptográficas de descifrado entre países.</li>
              <li>🔹 Gestión y sanitización de accesos remotos SSH con privilegios mínimos.</li>
              <li>🔹 Monitoreo automatizado de disponibilidad y mitigación de ataques DDoS.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. ALCANCE FORMAL DEL SGSI */}
      <div className="info-card">
        <div className="section-header">
          <Shield className="section-icon" size={22} />
          <h2>3. Delimitación y Alcance del SGSI (ISO/IEC 27001:2022)</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
          Para garantizar la trazabilidad requerida por la norma, el alcance de nuestro Sistema de Gestión se define con precisión milimétrica, abarcando las fronteras lógicas y organizacionales de la empresa:
        </p>

        <div className="conclusion-text">
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
            <strong>Frontera del Sistema:</strong> El alcance cubre de forma completa el <strong>diseño, desarrollo, mantenimiento y despliegue del Protocolo Criptográfico MTProto 2.0</strong>, así como la infraestructura de servidores de producción de los centros de datos distribuidos en Dubái, Europa y Singapur. 
            <br /><br />
            Se excluyen explícitamente del alcance las pasarelas de pago de terceros proveedores y los servicios de stickers de código abierto administrados por la comunidad, concentrando el 100% de los controles en la confidencialidad del tráfico de mensajería y la disponibilidad del ecosistema core.
          </p>
        </div>
      </div>
    </div>
  );
};