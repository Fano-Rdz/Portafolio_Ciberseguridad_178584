import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab12 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: Blind SQLi (Error-based Oracle)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Inferencia de Credenciales mediante Errores Inducidos</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Extraer la contraseña del administrador provocando errores 500 controlados.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Motor de BD</span>
          <div className="sqli-stat-value" style={{ color: '#f87171' }}>Oracle (v$version)</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Técnica</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>División por Cero (1/0)</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          En este escenario, la aplicación no altera su contenido visual según la veracidad de la consulta, pero es vulnerable a errores estructurales. 
          Al inyectar una sentencia condicional <code>CASE WHEN</code> en la cookie <code>TrackingId</code>, podemos forzar a la base de datos a ejecutar 
          una operación matemáticamente inválida (división por cero) solo cuando una letra de la contraseña es correcta. 
          Esto genera un error HTTP 500 que actúa como un "oráculo" de confirmación.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición y confirmación de vulnerabilidad mediante inyección de comilla simple (Error 500).</li>
          <li><span>2</span> Estabilización de la consulta usando <code>FROM dual</code> para confirmar el entorno <strong>Oracle</strong>.</li>
          <li><span>3</span> Diseño de una estructura <code>CASE</code> que evalúa <code>SUBSTR(password,1,1)</code> contra caracteres específicos.</li>
          <li><span>4</span> Implementación de <code>TO_CHAR(1/0)</code> como disparador de error para respuestas afirmativas.</li>
          <li><span>5</span> Automatización mediante script para recorrer las 20 posiciones de la contraseña del administrador.</li>
          <li><span>6</span> Reconstrucción de la clave <code>sa4294rne60goxujz6fi</code> y acceso exitoso al sistema.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Inferencia: <code>'||(SELECT CASE WHEN SUBSTR(password,1,1)='a' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>||</code> Operador de concatenación en Oracle usado para unir la inyección a la cookie original.</li>
              <li><code>CASE WHEN ... THEN</code> Estructura lógica que decide si ejecutar o no el código malicioso.</li>
              <li><code>SUBSTR(password,1,1)='a'</code> Pregunta lógica: "¿Es la primera letra de la contraseña una 'a'?".</li>
              <li><code>TO_CHAR(1/0)</code> <strong>Disparador:</strong> Si la pregunta es cierta, se intenta dividir por cero, colapsando el servidor y confirmando el carácter.</li>
              <li><code>ELSE '' END</code> Si la pregunta es falsa, no ocurre nada y el servidor responde con un 200 OK.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab12.png" 
            alt="Confirmación Lab Solved - Error-based SQLi" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Extracción de credenciales mediante inducción de errores HTTP 500 y compromiso de cuenta exitoso.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (OWASP)</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> para evitar que las cookies sean interpretadas como código. 
          Además, se debe configurar el servidor para que <strong>no muestre errores detallados</strong> al usuario final (error handling genérico), 
          lo que dificulta la identificación de oráculos basados en errores de base de datos.
        </p>
      </div>
    </div>
  );
};