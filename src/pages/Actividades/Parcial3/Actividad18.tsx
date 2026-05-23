import { Terminal, ShieldAlert, Network, User, Cpu, ArrowRight, Download } from 'lucide-react';

export const Actividad18 = () => {
  return (
    <div className="actividad-content">
      {/* CABECERA DE LA ACTIVIDAD */}
      <header className="act-header">
        <div className="header-top">
          <span className="badge">Análisis de Intrusiones - Modelo Diamante</span>
          <a 
            href="./Actividades/Parcial3/act18-Equipo2.pdf" 
            download="act18-Equipo2.pdf"
            className="download-button"
          >
            <Download size={18} style={{ marginRight: '6px' }} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Análisis Forense: Caso Canvas</h2>
        <p className="text-slate-400 mt-2">
          Modelado estructurado de la intrusión masiva y exfiltración de datos perpetrada por el grupo ShinyHunters.
        </p>
      </header>

      {/* MÉTRICAS DE IMPACTO DEL INCIDENTE */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Volumen Exfiltrado</span>
          <span className="stat-value text-red-500">3.65 TB</span>
          <span className="stat-sub">Datos de Almacenamiento [cite: 423]</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Víctimas Afectadas</span>
          <span className="stat-value text-yellow-500">275M</span>
          <span className="stat-sub">Registros de 9,000 Escuelas [cite: 411, 425]</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Vector de Amenaza</span>
          <span className="stat-value text-blue-400">APT / 0-Day</span>
          <span className="stat-sub">Escalación de Privilegios </span>
        </div>
      </div>

      {/* CUATRO VÉRTICES DEL MODELO DIAMANTE */}
      <section className="section-block">
        <h3 className="section-title">Los Cuatro Elementos del Diamante</h3>
        <div className="analysis-grid">
          <div className="analysis-item" style={{ borderTop: '2px solid #ef4444' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <User size={18} className="text-red-400" />
              <h4>Adversario</h4>
            </div>
            <p><strong>ShinyHunters:</strong> Grupo de ciberdelincuencia organizada de élite. Utilizaron redes sociales (como X) publicando capturas de los paneles comprometidos para presionar públicamente el pago de extorsión[cite: 413, 414].</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #eab308' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Cpu size={18} className="text-yellow-400" />
              <h4>Capacidad (TTPs)</h4>
            </div>
            <p>Encadenamiento estratégico de vulnerabilidades[cite: 418]. Explotación de cuentas <em>"Free-for-Teacher"</em> combinado con un fallo de día cero (0-day) en el sistema de tickets de soporte para escalar privilegios.</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Network size={18} className="text-blue-400" />
              <h4>Infraestructura</h4>
            </div>
            <p>Compromiso directo de Buckets de AWS (Amazon Web Services) de Instructure[cite: 411, 416]. Empleo de servidores de Comando y Control (C2) ocultos y uso de la red cifrada TOX para las negociaciones del rescate.</p>
          </div>

          <div className="analysis-item" style={{ borderTop: '2px solid #a855f7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ShieldAlert size={18} className="text-purple-400" />
              <h4>Víctima</h4>
            </div>
            <p><strong>Primaria:</strong> Canvas (Instructure). <strong>Secundarias:</strong> Cerca de 9,000 instituciones educativas de todo el mundo y sus portales de autenticación de inicio de sesión durante exámenes finales[cite: 411, 425].</p>
          </div>
        </div>
      </section>

      {/* METACARACTERÍSTICAS DEL EVENTO */}
      <section className="section-block bg-darker" style={{ borderRadius: '12px', padding: '2rem' }}>
        <h3 className="section-title">Metacaracterísticas Forenses</h3>
        <ul className="actividad-texto" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li>⏱️ <strong>Marca de Tiempo:</strong> Del 30 de abril al 12 de mayo de 2026. El compromiso inicial fue el 30/04, el defacement masivo ocurrió el 07/05 y el cierre de la negociación fue el 11/05.</li>
          <li>📊 <strong>Dirección de Flujo:</strong> Multidireccional. Flujo <em>Outbound</em> para la exfiltración masiva de los 3.65 TB de datos e <em>Inbound</em> para la inyección y secuestro de portales de login.</li>
          <li>🎯 <strong>Persistencia Demostrada:</strong> Los atacantes volvieron a ingresar de manera exitosa el 7 de mayo para evadir y burlarse de las medidas de parcheo rápido de la organización, evidenciando una falta de saneamiento completo en la red[cite: 427].</li>
        </ul>
      </section>

      {/* RELACIÓN CON LA CYBER KILL CHAIN */}
      <section className="section-block">
        <h3 className="section-title">Mapeo de Eventos con Cyber Kill Chain</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Fase de la Kill Chain</th>
              <th>Evento Técnico Detectado</th>
              <th>Descripción en el Caso Real</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Entrega (Delivery)</strong></td>
              <td className="text-blue-400 font-bold">Envío de Phishing</td>
              <td>Correos dirigidos a personal de la organización con cuentas "Free-for-Teacher" para la obtención de accesos de vector inicial[cite: 429].</td>
            </tr>
            <tr>
              <td><strong>Instalación (Installation)</strong></td>
              <td className="text-yellow-400 font-bold">Detección de Malware</td>
              <td>Inyección de scripts maliciosos persistentes y herramientas encubiertas dentro del entorno operativo de soporte[cite: 430].</td>
            </tr>
            <tr>
              <td><strong>Explotación (Exploitation)</strong></td>
              <td className="text-red-400 font-bold">Ejecución de Código</td>
              <td>Aprovechamiento de la falla de día cero en el gestor de tickets para elevar privilegios hasta el nivel administrativo[cite: 430].</td>
            </tr>
            <tr>
              <td><strong>Comando y Control (C2)</strong></td>
              <td className="text-purple-400 font-bold">Conexión Externa</td>
              <td>Canal establecido entre la infraestructura comprometida de Canvas y el servidor C2 de ShinyHunters para coordinar acciones[cite: 430].</td>
            </tr>
            <tr className="total-row">
              <td><strong>Acciones sobre Objetivos</strong></td>
              <td style={{ color: 'white' }}>Exfiltración y Extorsión</td>
              <td style={{ color: '#94a3b8' }}>Robo de 275 millones de registros confidenciales y posterior secuestro (defacement) de los portales de autenticación escolar[cite: 431, 432, 433].</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ANÁLISIS ESTRATÉGICO DE PIVOTING */}
      <section className="section-block">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
          <Terminal size={22} className="text-blue-400" />
          <h3 className="section-title" style={{ margin: 0 }}>Análisis de Hilos de Actividad y Pivoting (Salto Lateral)</h3>
        </div>
        <p className="actividad-texto" style={{ marginBottom: '1.5rem' }}>
          El incidente demostró un claro escenario de <strong>Ataque Transversal</strong>, estructurado mediante dos hilos lógicos de actividad interconectados a través de los vértices del modelo forense[cite: 434, 450]:
        </p>
        
        <div className="compliance-grid" style={{ gap: '1.5rem' }}>
          <div className="compliance-box" style={{ borderLeft: '4px solid #ef4444' }}>
            <strong>Hilo 1: Compromiso Inicial (Host de Administración)</strong>
            <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
              El adversario realiza la infección inicial del host administrador mediante spearphishing[cite: 435, 439]. Tras la instalación del malware y establecer contacto con su servidor C2 externo [cite: 440, 441], reconfigura este equipo comprometido para usarlo como un <strong>Proxy / Jump Box</strong> interno[cite: 442].
            </p>
          </div>
          
          <div className="compliance-box" style={{ borderLeft: '4px solid #a855f7' }}>
            <strong>Hilo 2: Movimiento Lateral (Servidor de Bases de Datos)</strong>
            <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
              Habiendo ganado un pie de apoyo dentro de la red privada, el atacante inicia un escaneo interno saltándose las protecciones de los firewalls perimetrales corporativos[cite: 443, 444, 446]. Explota el servidor core de bases de datos y extrae los 3.65 TB de datos críticos enviándolos a través del túnel establecido[cite: 447, 448].
            </p>
          </div>
        </div>

        <div style={{ 
          background: '#020617', 
          padding: '16px', 
          borderRadius: '10px', 
          border: '1px solid #1e293b', 
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#e2e8f0'
        }}>
          <span>Atacante (ShinyHunters)</span>
          <ArrowRight size={16} className="text-red-400" />
          <span style={{ color: '#ef4444' }}>Víctima 1 (Jump Box / Admin)</span>
          <ArrowRight size={16} className="text-yellow-400" />
          <span style={{ color: '#a855f7' }}>Víctima 2 (Servidor Core Base de Datos - 3.65 TB)</span>
        </div>
        <p className="actividad-texto" style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>
          *Nota del Análisis: Mediante esta técnica de Pivoteo, la máquina de la Víctima 1 deja de operar puramente como un objetivo para mutar a infraestructura lógica del atacante[cite: 451]. De este modo, los logs de la Base de Datos registran al propio administrador legítimo como el origen del ataque[cite: 452].
        </p>
      </section>

      {/* PIE DE REPORTE */}
      <footer className="report-footer" style={{ marginTop: '2rem' }}>
        <p>Integrantes: J. López, A. Mata, E. Rodríguez, E. Morín, I. Ros, M. Salinas [cite: 408, 409]</p>
        <p>Universidad Politécnica de San Luis Potosí — Profesor: Servando López Contreras [cite: 409]</p>
      </footer>
    </div>
  );
};