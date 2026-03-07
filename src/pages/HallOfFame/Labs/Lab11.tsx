import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab11 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: Blind SQLi (Conditional Responses)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Extracción de Credenciales mediante Inferencia Lógica</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Extraer la contraseña del administrador letra por letra mediante respuestas booleanas.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Vector de Ataque</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>Cookie: TrackingId</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Oráculo Visual</span>
          <div className="sqli-stat-value" style={{ color: '#10b981' }}>"Welcome back"</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          En este escenario, la aplicación no refleja datos de la base de datos ni errores. Sin embargo, el parámetro <code>TrackingId</code> en la cookie es vulnerable. 
          Al inyectar condiciones lógicas (Verdadero/Falso), observamos un <strong>Oráculo</strong>: si la condición es cierta, aparece el mensaje "Welcome back"; 
          si es falsa, el mensaje desaparece. Esto permite realizar un ataque de inferencia para reconstruir la contraseña del administrador carácter por carácter.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición HTTP y envío a <strong>Burp Repeater</strong> para analizar la cookie <code>TrackingId</code>.</li>
          <li><span>2</span> Confirmación de la vulnerabilidad inyectando <code>' AND '1'='1</code> (Mensaje presente) y <code>' AND '1'='2</code> (Mensaje ausente).</li>
          <li><span>3</span> Determinación de la longitud de la contraseña mediante la función <code>LENGTH()</code>.</li>
          <li><span>4</span> Uso de <code>SUBSTRING()</code> para aislar cada posición de la contraseña y compararla alfabéticamente.</li>
          <li><span>5</span> Automatización del proceso (Scripting/Intruder) para iterar sobre los 20 caracteres de la contraseña.</li>
          <li><span>6</span> Reconstrucción de la clave <code>zp5jy1l5taltb3wm7m9l</code> y acceso exitoso al panel administrativo.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Inferencia: <code>' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator') 'm'</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra la cadena original de la cookie.</li>
              <li><code>AND</code> Fuerza al sistema a evaluar una segunda condición de éxito.</li>
              <li><code>SUBSTRING(password,1,1)</code> Extrae exactamente un carácter de la base de datos para su análisis.</li>
              <li><code> 'm'</code> Realiza una comparación booleana. Si el carácter es mayor a 'm', el servidor responde con el mensaje de bienvenida.</li>
              <li><strong>Resultado:</strong> Mediante este "binario visual", se deduce el valor exacto de cada posición sin ver la tabla directamente.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab11.png" 
            alt="Confirmación Lab Solved - Blind SQLi Success" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Extracción completa de credenciales mediante inferencia booleana y acceso exitoso.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> en todos los puntos de entrada, incluyendo cabeceras y cookies. 
          Esto garantiza que el motor de BD trate el <code>TrackingId</code> como un literal. Además, se recomienda una 
          <strong>validación de entrada estricta</strong> para asegurar que las cookies sigan un formato y longitud predecibles.
        </p>
      </div>
    </div>
  );
};