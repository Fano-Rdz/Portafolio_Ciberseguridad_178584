import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab10 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (String Concatenation)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Exfiltración mediante Concatenación en Columna Única</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Extraer usuario y contraseña simultáneamente usando una sola columna de texto.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Operador Utilizado</span>
          <div className="sqli-stat-value" style={{ color: '#60a5fa' }}>|| (Concatenación)</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Delimitador</span>
          <div className="sqli-stat-value" style={{ fontFamily: 'monospace' }}>'~'</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          En escenarios donde la consulta original solo permite reflejar una columna de tipo texto, se emplea la <strong>concatenación de cadenas</strong>. 
          Utilizando el operador <code>||</code> (común en Oracle y PostgreSQL), se fusionan dos campos distintos (username y password) en un solo bloque 
          de texto continuo, separado por un delimitador. Esto permite eludir la restricción estructural de la interfaz y extraer 
          todo el set de credenciales en una sola interacción.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición mediante <strong>Burp Suite Proxy</strong> al filtrar categorías.</li>
          <li><span>2</span> Uso de <code>ORDER BY</code> para confirmar que la consulta devuelve exactamente 2 columnas.</li>
          <li><span>3</span> Identificación de la segunda columna como la única compatible con datos de tipo <code>string</code>.</li>
          <li><span>4</span> Inyección de un payload que une <code>username</code> y <code>password</code> mediante el operador <code>||</code>.</li>
          <li><span>5</span> Análisis de la respuesta HTML para localizar la cadena exfiltrada (ej. <code>administrator~s3cr3t</code>).</li>
          <li><span>6</span> Autenticación en el portal administrativo con las credenciales obtenidas para finalizar el laboratorio.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Final: <code>' UNION SELECT NULL, username||'~'||password FROM users--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra la cadena de texto de la consulta original.</li>
              <li><code>UNION SELECT NULL, ...</code> Respeta la estructura de 2 columnas, dejando la primera vacía (NULL).</li>
              <li><code>username||'~'||password</code> <strong>Núcleo del ataque:</strong> Fusiona ambos campos en uno solo, usando la tilde como separador visual.</li>
              <li><code>FROM users</code> Tabla de origen de las credenciales.</li>
              <li><code>--</code> Comentario para anular el resto del código SQL legítimo.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab10.png" 
            alt="Confirmación Lab Solved - String Concatenation" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Resolución exitosa: Credenciales de administrador exfiltradas mediante concatenación de columnas.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (Defensa en Profundidad)</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> para neutralizar la interpretación de metacaracteres. 
          Como medida adicional, aplicar una <strong>validación de entrada estricta</strong> (Allow-list) en el backend para asegurar 
          que el parámetro <code>category</code> solo contenga valores alfanuméricos autorizados por el negocio.
        </p>
      </div>
    </div>
  );
};