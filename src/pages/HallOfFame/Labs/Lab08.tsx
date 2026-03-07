import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab08 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (Data Type Analysis)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Identificación de Columnas compatibles con Texto</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Identificar qué columna del set de resultados permite inyectar y visualizar strings.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Columna Compatible</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>Posición 2</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Cadena de Prueba</span>
          <div className="sqli-stat-value" style={{ fontFamily: 'monospace' }}>'QQ0yuu'</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          Una vez determinado el número de columnas, el siguiente paso crítico es encontrar una que admita el tipo de dato <code>string</code>. 
          Debido a que las bases de datos son estrictas con los tipos, intentar mostrar texto en una columna numérica provocará un error 500. 
          Inyectando una cadena aleatoria en cada posición (rodeada de valores <code>NULL</code>), podemos observar qué posición renderiza 
          el valor en la interfaz sin romper la lógica del servidor.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición con <strong>Burp Suite Proxy</strong> y envío a <strong>Repeater</strong>.</li>
          <li><span>2</span> Confirmación previa de 3 columnas mediante inyección de <code>NULL</code> sistemático.</li>
          <li><span>3</span> <strong>Prueba Posición 1:</strong> <code>' UNION SELECT 'a',NULL,NULL--</code> (Resultado: 500 Error - Tipo incompatible).</li>
          <li><span>4</span> <strong>Prueba Posición 2:</strong> <code>' UNION SELECT NULL,'QQ0yuu',NULL--</code> (Resultado: 200 OK).</li>
          <li><span>5</span> Confirmación visual: La cadena <strong>'QQ0yuu'</strong> aparece renderizada en la página de productos.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload de Validación: <code>'+UNION+SELECT+NULL,'QQ0yuu',NULL--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Rompe la cadena de búsqueda original.</li>
              <li><code>UNION SELECT</code> Prepara la fusión de la fila controlada por el atacante.</li>
              <li><code>'QQ0yuu'</code> Cadena de caracteres específica solicitada por el laboratorio para validar la columna 2.</li>
              <li><code>NULL</code> Actúa como comodín en las posiciones 1 y 3 para evitar errores de formato mientras se testea la posición central.</li>
              <li><code>--</code> Comentario para ignorar el código SQL posterior de la aplicación.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab08.png" 
            alt="Confirmación Lab Solved - Data Type Detection" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Validación exitosa: El sistema permite el renderizado de texto a través de la segunda columna de la consulta.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> (OWASP Standard) para asegurar que el motor de la base de datos no interprete 
          metacaracteres como instrucciones. Asimismo, se debe aplicar una <strong>validación de tipos</strong> en el código de la aplicación, 
          asegurando que el parámetro <code>category</code> cumpla con un formato esperado antes de procesar cualquier consulta.
        </p>
      </div>
    </div>
  );
};