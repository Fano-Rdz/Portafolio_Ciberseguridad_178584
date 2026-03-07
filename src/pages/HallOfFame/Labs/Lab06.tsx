import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink, } from 'lucide-react';

export const Lab06 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (Oracle Data Exfiltration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Exfiltración de Credenciales en Entorno Oracle</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Exfiltrar la tabla de usuarios completa y comprometer la cuenta de administrador.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Motor Detectado</span>
          <div className="sqli-stat-value" style={{ color: '#f87171' }}>Oracle SQL</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Tabla Crítica</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>USERS_IRAUIG</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Se explota el parámetro <code>category</code> mediante una inyección UNION. Al reflejar los resultados directamente en la interfaz, 
          es posible "grapar" los resultados de una tabla confidencial a los resultados de una consulta pública. En Oracle, esto requiere 
          una fase previa de enumeración usando vistas de sistema como <code>all_tables</code> para localizar tablas ofuscadas de usuarios 
          y sus columnas correspondientes.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición con <strong>Burp Suite Proxy</strong> y envío a <strong>Repeater</strong>.</li>
          <li><span>2</span> Determinación de columnas mediante <code>ORDER BY</code> (confirmado: 2 columnas).</li>
          <li><span>3</span> Verificación de tipos de datos <code>string</code> usando la tabla <code>DUAL</code>.</li>
          <li><span>4</span> Enumeración de tablas del sistema mediante <code>all_tables</code> (Hallazgo: <code>USERS_IRAUIG</code>).</li>
          <li><span>5</span> Mapeo de columnas mediante <code>all_tab_columns</code> (Hallazgo: <code>USERNAME_FBFFOG</code> y <code>PASSWORD_WKNSGM</code>).</li>
          <li><span>6</span> Ejecución del volcado de datos y compromiso del panel mediante la contraseña del administrador.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Final: <code>' UNION SELECT USERNAME_FBFFOG, PASSWORD_WKNSGM FROM USERS_IRAUIG--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra la cadena de texto de la categoría original.</li>
              <li><code>UNION SELECT</code> Fusiona los resultados de la tabla pública con la tabla privada de usuarios.</li>
              <li><code>FROM USERS_IRAUIG</code> Dirige la extracción hacia la tabla específica descubierta en la fase de enumeración.</li>
              <li><code>--</code> Comentario SQL para anular el resto del código residual de la aplicación.</li>
              <li><code>+</code> (En URL) Codificación para asegurar que los espacios sean interpretados correctamente por el servidor.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab06.png" 
            alt="Confirmación Lab Solved - Oracle Data Exfiltration" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Extracción exitosa de credenciales y validación de resolución del laboratorio.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          Implementar <strong>Consultas Preparadas</strong> para obligar al sistema a tratar las entradas como datos literales. 
          Adicionalmente, se recomienda aplicar <strong>validación de entradas mediante listas blancas</strong> en el lado del servidor 
          para asegurar que el parámetro <code>category</code> solo acepte valores alfanuméricos predefinidos.
        </p>
      </div>
    </div>
  );
};