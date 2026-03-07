import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab07 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (Column Enumeration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Determinación de la Estructura de Columnas</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Determinar el número exacto de columnas devueltas por la consulta original.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Método de Detección</span>
          <div className="sqli-stat-value" style={{ color: '#60a5fa' }}>NULL Injection</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Pre-requisito</span>
          <div className="sqli-stat-value">UNION-based Attack</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          La vulnerabilidad en el parámetro <code>category</code> permite insertar instrucciones adicionales que el motor de base de datos ejecuta como comandos legítimos. 
          Para que un ataque <strong>UNION</strong> sea exitoso, la consulta inyectada debe tener el mismo número de columnas que la original. 
          Esta fase consiste en inyectar sistemáticamente valores <code>NULL</code> hasta que el servidor deje de arrojar errores, revelando así la estructura interna de la tabla pública.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición GET mediante <strong>Burp Suite Proxy</strong>.</li>
          <li><span>2</span> Envío de la solicitud a <strong>Repeater</strong> para manipulación iterativa y controlada.</li>
          <li><span>3</span> Inyección de un primer payload: <code>' UNION SELECT NULL--</code> (Resultado: Error 500).</li>
          <li><span>4</span> Incremento de valores nulos: <code>' UNION SELECT NULL, NULL--</code> (Resultado: Error 500).</li>
          <li><span>5</span> Inyección del tercer valor: <code>' UNION SELECT NULL, NULL, NULL--</code> (Resultado: 200 OK).</li>
          <li><span>6</span> Confirmación: La consulta original consta de exactamente <strong>3 columnas</strong>.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Confirmación: <code>' UNION SELECT NULL, NULL, NULL--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra la cadena de texto de la categoría para habilitar la inyección.</li>
              <li><code>UNION SELECT</code> Intenta fusionar una fila adicional de datos en la respuesta.</li>
              <li><code>NULL, NULL, NULL</code> Se utilizan valores nulos porque son compatibles con casi cualquier tipo de dato (string, int, date), evitando errores por discrepancia de tipos.</li>
              <li><code>--</code> Comenta el resto de la consulta original para asegurar una ejecución limpia.</li>
            </ul>
          </div>
        </div>
      </div>

      

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab07.png" 
            alt="Confirmación Lab Solved - Column Enumeration" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Resolución exitosa tras determinar que la consulta original devuelve tres columnas mediante inyección de valores NULL.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> (Prepared Statements) para separar la lógica del código de los datos del usuario. 
          Al tratar la entrada como un literal inofensivo, se impide que el operador <code>UNION</code> sea interpretado como una instrucción de combinación de tablas.
        </p>
      </div>
    </div>
  );
};