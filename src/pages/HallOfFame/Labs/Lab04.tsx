import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab04 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (MSSQL Enumeration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Extracción de Versión en Microsoft SQL Server</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Visualizar la cadena de texto de la versión exacta del motor de BD subyacente.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Variable de Sistema</span>
          <div className="sqli-stat-value" style={{ color: '#3b82f6' }}>@@version</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Tecnología</span>
          <div className="sqli-stat-value">MS SQL Server</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Se identifica que el parámetro <code>category</code> anexa directamente la entrada del usuario a la consulta interna sin neutralización. 
          Esta confianza implícita permite manipular la instrucción original mediante la cláusula <strong>UNION</strong>, forzando al sistema a ejecutar comandos 
          adicionales que extraen información sensible directamente desde el núcleo de la base de datos.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición HTTP mediante <strong>Burp Suite Proxy</strong> al interactuar con los filtros.</li>
          <li><span>2</span> Análisis iterativo en <strong>Repeater</strong> para descubrir la estructura de las tablas.</li>
          <li><span>3</span> Confirmación de dos columnas de datos con capacidad de procesar y mostrar texto.</li>
          <li><span>4</span> Inyección de carga útil diseñada para consultar las variables de entorno de <strong>Microsoft SQL Server</strong>.</li>
          <li><span>5</span> Validación de la explotación mediante el renderizado visible de la versión en la interfaz de usuario.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Utilizado: <code>'+UNION+SELECT+@@version,+NULL--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Actúa como interruptor para finalizar la entrada de texto normal y permitir nuevos comandos.</li>
              <li><code>UNION SELECT</code> Combina los resultados legítimos con una tabla de resultados controlada por el atacante.</li>
              <li><code>@@version</code> Variable global de MSSQL que revela la versión exacta y edición del servidor.</li>
              <li><code>NULL</code> Relleno estructural para cumplir con el requisito matemático de igualdad de columnas en la unión.</li>
              <li><code>--</code> Bloqueador de comentarios para ignorar el código original residual y evitar errores de sintaxis.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab04.png" 
            alt="Confirmación Lab Solved - MSSQL Version" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Explotación exitosa: La versión de Microsoft SQL Server es expuesta en la interfaz.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> para asegurar que el motor de BD trate la entrada exclusivamente como datos de lectura. 
          Adicionalmente, se recomienda el uso de <strong>Allow-lists</strong> para validar que el parámetro solo procese valores autorizados.
        </p>
      </div>
    </div>
  );
};