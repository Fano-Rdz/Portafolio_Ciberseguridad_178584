import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab14 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: Time-Based Blind SQLi (PostgreSQL)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Confirmación de Vulnerabilidad mediante Inferencia Temporal</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Confirmar la inyección SQL forzando un retraso de 10 segundos en la respuesta del servidor.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Función de Retardo</span>
          <div className="sqli-stat-value" style={{ color: '#60a5fa' }}>pg_sleep(10)</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Motor Detectado</span>
          <div className="sqli-stat-value" style={{ color: '#818cf8' }}>PostgreSQL</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Cuando una aplicación no refleja datos ni errores, se recurre a la <strong>Inyección Basada en Tiempo</strong>. Al manipular la cookie <code>TrackingId</code>, 
          se inyecta un comando que instruye a la base de datos a "dormir" o pausar su ejecución. Si el servidor web tarda exactamente el tiempo solicitado 
          en responder, se confirma que el motor SQL está ejecutando nuestro código. Esta técnica es el primer paso para exfiltrar datos carácter por 
          carácter mediante condiciones lógicas que activan o no dicho retardo.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición GET mediante el módulo <strong>Proxy de Burp Suite</strong>.</li>
          <li><span>2</span> Envío de la solicitud a <strong>Repeater</strong> para manipulación del encabezado <code>Cookie</code>.</li>
          <li><span>3</span> Identificación del parámetro <code>TrackingId</code> como vector de ataque.</li>
          <li><span>4</span> Inyección del payload <code>'||pg_sleep(10)--</code> para concatenar la función de suspensión de PostgreSQL.</li>
          <li><span>5</span> Ejecución y monitoreo del panel de respuesta para verificar el tiempo de latencia.</li>
          <li><span>6</span> Validación del éxito al observar un tiempo de respuesta de <strong>~10,000 ms</strong>, confirmando la vulnerabilidad.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Verificación: <code>x'||pg_sleep(10)--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>x'</code> Cierra la cadena literal del ID de seguimiento original.</li>
              <li><code>||</code> Operador de concatenación en PostgreSQL que permite ejecutar la función <code>pg_sleep</code> de forma secuencial.</li>
              <li><code>pg_sleep(10)</code> <strong>El disparador:</strong> Suspende el hilo de la consulta durante 10 segundos exactos.</li>
              <li><code>--</code> Símbolo de comentario que invalida cualquier fragmento de código residual programado por el desarrollador.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab14.png" 
            alt="Confirmación Lab Solved - Time-based SQLi" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Confirmación técnica: El servidor respondió tras un retraso inducido de 10 segundos, validando el punto de inyección.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          1. <strong>Consultas Parametrizadas:</strong> El uso de <code>Prepared Statements</code> es obligatorio para neutralizar la ejecución de funciones como <code>pg_sleep</code>.<br />
          2. <strong>Validación de Entradas:</strong> Implementar una <code>allowlist</code> estricta para asegurar que el ID de seguimiento solo contenga caracteres alfanuméricos esperados.<br />
          3. <strong>Principio de Menor Privilegio:</strong> Restringir los permisos del usuario de la BD para que no pueda ejecutar funciones de control de sistema o administración.
        </p>
      </div>
    </div>
  );
};