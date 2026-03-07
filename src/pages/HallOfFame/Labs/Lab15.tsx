import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab15 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: Time-Based Blind SQLi (Data Exfiltration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Exfiltración de Credenciales mediante Inferencia Temporal en PostgreSQL</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Extraer la contraseña del administrador mediante respuestas temporales condicionales.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Vector</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>Cookie: TrackingId</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Oráculo Temporal</span>
          <div className="sqli-stat-value" style={{ color: '#f87171' }}>pg_sleep(3)</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Ante la ausencia de errores o cambios visuales, se explota la naturaleza síncrona de las consultas en <strong>PostgreSQL</strong>. 
          Al inyectar una estructura <code>CASE WHEN</code>, formulamos preguntas binarias a la base de datos. Si la condición (ej. la primera letra de la clave es 'a') 
          es verdadera, la base de datos ejecuta <code>pg_sleep(3)</code>. El analista deduce el contenido de la tabla de usuarios midiendo 
          estrictamente la latencia de la respuesta HTTP.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción y envío de la petición a <strong>Burp Repeater</strong> para validar el punto de inyección en la cookie.</li>
          <li><span>2</span> Confirmación de vulnerabilidad temporal con un payload simple de <code>pg_sleep</code>.</li>
          <li><span>3</span> Diseño de un script de automatización para iterar sobre cada posición de la contraseña (<code>SUBSTRING</code>).</li>
          <li><span>4</span> Evaluación de caracteres: Si la respuesta tarda &gt; 3s, el carácter es correcto; si es inmediata (~0s), se descarta.</li>
          <li><span>5</span> Reconstrucción secuencial de la credencial del usuario <strong>administrator</strong> tras completar el ciclo de inferencia.</li>
          <li><span>6</span> Acceso exitoso al panel administrativo utilizando la contraseña exfiltrada para validar el compromiso total.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Condicional: <code>x'%3BSELECT CASE WHEN (username='administrator' AND SUBSTRING(password,1,1)='a') THEN pg_sleep(3) ELSE pg_sleep(0) END FROM users--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>%3B (;)</code> Finaliza la consulta original e inicia una nueva sentencia (Stacked Query).</li>
              <li><code>CASE WHEN (...) THEN pg_sleep(3)</code> <strong>El Oráculo:</strong> Si la letra coincide, el servidor se "duerme" por 3 segundos.</li>
              <li><code>SUBSTRING(password,1,1)='a'</code> Aísla el primer carácter de la contraseña para compararlo con el valor de prueba.</li>
              <li><code>ELSE pg_sleep(0)</code> Si la letra es incorrecta, la respuesta es instantánea, permitiendo una iteración rápida.</li>
              <li><code>--</code> Comentario para neutralizar el código residual y evitar errores de sintaxis.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab15.png" 
            alt="Confirmación Lab Solved - Time-based Data Exfiltration" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Extracción exitosa de credenciales mediante el análisis de tiempos de respuesta y ejecución de scripts de inferencia.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (Estándar de Oro OWASP)</h3>
        <p>
          La solución definitiva es el uso de <strong>Consultas Preparadas (Prepared Statements)</strong>, que tratan toda entrada como datos literales. 
          Adicionalmente, se deben implementar <strong>validaciones de entrada</strong> con expresiones regulares para las cookies y aplicar el 
          <strong>Principio de Menor Privilegio</strong>, desactivando funciones de control de tiempo como <code>pg_sleep</code> para usuarios de aplicación.
        </p>
      </div>
    </div>
  );
};