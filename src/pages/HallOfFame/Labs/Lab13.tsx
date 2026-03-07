import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab13 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: Error-Based SQLi (Type Conversion)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Exfiltración mediante Mensajes de Error Detallados</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Forzar un error de conversión de datos para que el motor SQL revele la contraseña en el mensaje de error.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Función Crítica</span>
          <div className="sqli-stat-value" style={{ color: '#f87171' }}>CAST() as INT</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Fuga de Información</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>Verbose Errors</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          La vulnerabilidad se encuentra en la cookie <code>TrackingId</code>. Al estar configurado el servidor para mostrar errores detallados, 
          podemos utilizar la función <code>CAST()</code> para intentar convertir una cadena de texto (como la contraseña del administrador) 
          en un número entero. Como esta operación es imposible, la base de datos genera un error de ejecución que, por diseño, 
          <strong>incluye el valor que intentó convertir</strong> dentro del mensaje de error devuelto al navegador.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición con <strong>Burp Suite Proxy</strong> y envío a <strong>Repeater</strong>.</li>
          <li><span>2</span> Confirmación de vulnerabilidad mediante una comilla simple (<code>'</code>), observando un error 500 detallado.</li>
          <li><span>3</span> Estabilización de la consulta usando comentarios (<code>--</code>) para limpiar la sintaxis residual.</li>
          <li><span>4</span> Implementación de la función <code>CAST()</code> sobre una subconsulta: <code>SELECT password FROM users LIMIT 1</code>.</li>
          <li><span>5</span> Depuración del payload: eliminación del valor original del <code>TrackingId</code> para evitar el truncamiento por límite de caracteres.</li>
          <li><span>6</span> Lectura de la contraseña directamente desde la respuesta del servidor en el campo de error: <code>invalid input syntax for integer: "..."</code>.</li>
          <li><span>7</span> Autenticación exitosa como <strong>administrator</strong> para validar el compromiso total.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Exfiltración: <code>' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>' AND 1=</code> Inicia una comparación lógica que obliga al motor a evaluar el lado derecho de la ecuación.</li>
              <li><code>CAST(... AS int)</code> <strong>El disparador:</strong> Intenta transformar la contraseña (texto) en un entero (número).</li>
              <li><code>SELECT password FROM users LIMIT 1</code> Subconsulta que recupera la credencial objetivo.</li>
              <li><strong>El Resultado:</strong> El motor SQL falla y responde: <em>"ERROR: invalid input syntax for integer: 'contraseña_extraída'"</em>.</li>
              <li><code>--</code> Anula el resto de la consulta original para evitar errores de sintaxis que oculten el mensaje deseado.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab13.png" 
            alt="Confirmación Lab Solved - Error-based Extraction" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Extracción exitosa: La contraseña es revelada por el propio motor de base de datos debido al fallo de conversión inducido.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (Defensa en Profundidad)</h3>
        <p>
          1. <strong>Consultas Parametrizadas:</strong> Utilizar Prepared Statements para neutralizar la entrada del usuario.<br />
          2. <strong>Generic Error Messages:</strong> Configurar el entorno de producción para mostrar mensajes de error genéricos que no revelen detalles internos del motor SQL.<br />
          3. <strong>Desactivar Verbose Errors:</strong> Asegurar que la directiva de visualización de errores esté desactivada en el servidor web.
        </p>
      </div>
    </div>
  );
};