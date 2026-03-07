import { Terminal, ShieldCheck, Search, Code, AlertCircle} from 'lucide-react';

export const Lab16 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge" style={{ backgroundColor: '#4b5563' }}>Vulnerabilidad: Out-of-band SQLi (OAST)</div>
        <div className="status-pending" style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 'bold' }}>
          <AlertCircle size={16} /> Activity Interrupted
        </div>
      </div>

      <h2 className="sqli-section-title">Análisis de Inyección SQL Fuera de Banda (OAST) en Oracle</h2>
      
      {/* Resumen de Interrupción */}
      <div className="sqli-grid-info" style={{ border: '1px solid #4b5563', backgroundColor: 'rgba(75, 85, 99, 0.1)' }}>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Estado</span>
          <p className="sqli-text-sm" style={{ color: '#fca5a5' }}>No terminada (Restricción de Entorno)</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Causa Raíz</span>
          <div className="sqli-stat-value" style={{ fontSize: '14px' }}>Egress Filtering (Firewall)</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Limitación Técnica</span>
          <div className="sqli-stat-value" style={{ fontSize: '14px' }}>Burp Pro Collaborator Required</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Se identificó una vulnerabilidad en la cookie <code>TrackingId</code> que se procesa de forma asíncrona. 
          Al no haber respuesta visual ni temporal, se intentó un ataque <strong>Out-of-band (OOB)</strong>. 
          Este método busca forzar al motor <strong>Oracle</strong> a realizar una resolución de red externa (DNS/HTTP) mediante 
          funciones XML. Sin embargo, el firewall de salida del laboratorio bloquea cualquier interacción con dominios que 
          no pertenezcan a <code>oastify.com</code>, impidiendo la confirmación con herramientas gratuitas (Community Edition).
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Análisis del Vector de Ataque</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción del parámetro <code>TrackingId</code> mediante <strong>Burp Suite Proxy</strong>.</li>
          <li><span>2</span> Configuración de un receptor OAST externo (Interactsh) para monitorear peticiones DNS.</li>
          <li><span>3</span> Inyección de un payload basado en <code>EXTRACTVALUE</code> y <code>xmltype</code> de Oracle.</li>
          <li><span>4</span> Codificación URL y envío de la petición, recibiendo un <strong>HTTP 200 OK</strong> del servidor.</li>
          <li><span>5</span> <strong>Bloqueo Detectado:</strong> La ausencia de registros en el receptor confirma la presencia de un <strong>Egress Filter</strong> estricto en el perímetro del laboratorio.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload OOB (Oracle): <code>' UNION SELECT EXTRACTVALUE(xmltype('...'),'/l') FROM dual--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>' UNION SELECT</code> Inicia la concatenación de una consulta maliciosa.</li>
              <li><code>EXTRACTVALUE / xmltype</code> Funciones de Oracle para procesar XML que permiten gatillar solicitudes de red.</li>
              <li><code>%remote;</code> Directiva SYSTEM que obliga a la base de datos a intentar conectarse a una URL externa para resolver una entidad.</li>
              <li><code>FROM dual</code> Requerimiento sintáctico de Oracle para consultas que no apuntan a una tabla específica.</li>
              <li><code>--</code> Anulación del resto de la consulta original.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada</h3>
        <p>
          Para remediar este hallazgo, es imperativo implementar <strong>Consultas Parametrizadas</strong>. 
          Desde la perspectiva de infraestructura, se recomienda aplicar el <strong>Principio de Menor Privilegio</strong> 
          restringiendo permisos de red al usuario de la BD y manteniendo el <strong>Egress Filtering</strong> 
          para evitar la exfiltración de datos hacia dominios no autorizados.
        </p>
      </div>
    </div>
  );
};