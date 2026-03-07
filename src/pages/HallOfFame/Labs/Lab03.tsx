import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink } from 'lucide-react';

export const Lab03 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (Oracle Enumeration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Extracción de Versión del Motor de Base de Datos</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Determinar la versión y edición exacta del motor Oracle mediante enumeración.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Tecnología Detectada</span>
          <div className="sqli-stat-value" style={{ color: '#f87171' }}>Oracle Database</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Técnica</span>
          <div className="sqli-stat-value" style={{ color: '#60a5fa' }}>UNION SELECT</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          La vulnerabilidad en el parámetro <code>category</code> permite realizar una inyección de tipo <strong>UNION</strong>. 
          Al no existir sanitización, se inyectan comandos SQL que fuerzan a la base de datos a fusionar los resultados del catálogo 
          de productos con metadatos internos. En entornos Oracle, esto permite consultar vistas administrativas como 
          <code>v$version</code> para exponer detalles críticos de la infraestructura.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición con <strong>Burp Suite</strong> y envío a <strong>Repeater</strong>.</li>
          <li><span>2</span> <strong>Fase de Reconocimiento:</strong> Deducción de columnas inyectando valores nulos (usando la tabla <code>DUAL</code> de Oracle).</li>
          <li><span>3</span> Verificación de tipos de datos para confirmar qué columnas aceptan y renderizan cadenas de texto.</li>
          <li><span>4</span> Construcción de la carga útil dirigida a la vista del sistema <code>v$version</code>.</li>
          <li><span>5</span> Extracción y renderizado exitoso del <strong>banner</strong> de versión en la interfaz de la aplicación.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Utilizado: <code>' UNION SELECT banner, NULL FROM v$version--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Interrumpe la cadena de texto original del filtro.</li>
              <li><code>UNION SELECT</code> Fusiona la consulta legítima con la inyectada en una sola respuesta.</li>
              <li><code>banner, NULL</code> Cumple la regla de homogeneidad (2 columnas); extrae metadatos en la primera posición.</li>
              <li><code>FROM v$version</code> Apunta a la vista administrativa interna de Oracle Database.</li>
              <li><code>--</code> Comenta y anula el código residual de la aplicación para evitar errores sintácticos.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab03.png" 
            alt="Confirmación Lab Solved - Oracle Version Extraction" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Renderizado exitoso de la versión de Oracle Database tras la inyección UNION SELECT.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada</h3>
        <p>
          Implementar <strong>Consultas Parametrizadas</strong> para precompilar el código SQL y tratar las entradas como datos literales. 
          Complementariamente, aplicar <strong>Validación de Entradas</strong> (Allow-lists) en el parámetro <code>category</code> para bloquear 
          caracteres de escape y palabras clave de manipulación de datos como <code>UNION</code> y <code>SELECT</code>.
        </p>
      </div>
    </div>
  );
};