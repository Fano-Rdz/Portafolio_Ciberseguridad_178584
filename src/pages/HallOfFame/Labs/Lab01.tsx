import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab01 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: SQLi en Filtro de Productos</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Visualización de Inventario Oculto</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Evadir restricciones de la BD para visualizar artículos no publicados.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Parámetro Vulnerable</span>
          <div className="sqli-stat-value" style={{ color: '#60a5fa' }}>category</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Herramientas</span>
          <div className="sqli-stat-value">Burp Suite (Proxy & Repeater)</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Se identifica que el sistema inserta directamente el texto del usuario en la consulta SQL sin validación. 
          Al carecer de sanitización, es posible introducir caracteres especiales que alteran la estructura lógica original, 
          permitiendo reescribir las reglas de negocio que dictan qué información es pública.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición HTTP mediante <strong>Burp Suite Proxy</strong>.</li>
          <li><span>2</span> Identificación del parámetro <code>category</code> en la solicitud GET.</li>
          <li><span>3</span> Inyección de secuencia lógica (payload) para forzar una respuesta positiva de la BD.</li>
          <li><span>4</span> Confirmación mediante código <strong>200 OK</strong> y recepción de registros restringidos.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Utilizado: <code>'+OR+1=1--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra el campo de texto legítimo del sistema.</li>
              <li><code>OR 1=1</code> Condición matemática que siempre resulta verdadera, forzando la extracción total de datos.</li>
              <li><code>--</code> Comando de comentario para neutralizar el resto de la consulta original (filtros de visibilidad).</li>
              <li><code>+</code> Representación de espacios en blanco en formato URL.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única (image_5059c7.png) */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab01.png" 
            alt="Confirmación Lab Solved" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Validación de resolución exitosa del laboratorio mediante inyección SQL.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> (Prepared Statements). Esta estrategia garantiza que 
          el motor de la base de datos procese cualquier entrada exclusivamente como texto inofensivo, eliminando la 
          posibilidad de ejecución de comandos maliciosos.
        </p>
      </div>
    </div>
  );
};