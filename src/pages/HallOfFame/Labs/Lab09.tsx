import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink, } from 'lucide-react';

export const Lab09 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (User Data Exfiltration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Extracción de Base de Datos y Compromiso de Cuentas</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Exfiltrar credenciales de todos los usuarios y acceder a la cuenta de administrador.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Tabla Objetivo</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>users</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Impacto</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>Crítico (Privilege Escalation)</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          La vulnerabilidad en el parámetro <code>category</code> permite manipular la solicitud original ("muéstrame productos") para incluir una orden maliciosa 
          adicional ("y también muéstrame usuarios"). Al no sanitizar la entrada, la base de datos obedece ambas órdenes y la aplicación renderiza 
          información confidencial (nombres de usuario y contraseñas) dentro de las etiquetas HTML destinadas originalmente al catálogo de productos.
        </p>
      </div>

      

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición HTTP mediante <strong>Burp Suite Proxy</strong>.</li>
          <li><span>2</span> Reconocimiento estructural en <strong>Repeater</strong> confirmando 2 columnas compatibles con texto.</li>
          <li><span>3</span> Inyección del operador <code>UNION SELECT</code> para unificar la consulta de productos con la tabla de usuarios.</li>
          <li><span>4</span> Análisis de la respuesta HTML para localizar las credenciales inyectadas en el cuerpo de la página.</li>
          <li><span>5</span> Aislamiento de la contraseña en texto plano del usuario <strong>administrator</strong>.</li>
          <li><span>6</span> Autenticación exitosa en el portal administrativo, confirmando el compromiso total del sistema.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Final: <code>'+UNION+SELECT+username,+password+FROM+users--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Carácter de escape que cierra la cadena de búsqueda legítima.</li>
              <li><code>UNION SELECT</code> Combina los resultados de productos con la consulta arbitraria del atacante.</li>
              <li><code>username, password</code> Columnas extraídas. Al ser dos, coinciden con la estructura de la consulta original.</li>
              <li><code>FROM users</code> Especifica la tabla de almacenamiento de credenciales como origen de los datos.</li>
              <li><code>--</code> Comentario SQL que anula el resto del código programado, evitando errores de sintaxis.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab09.png" 
            alt="Confirmación Lab Solved - Full Account Compromise" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Resolución exitosa: Acceso privilegiado obtenido tras el volcado de la tabla de usuarios.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (Estándar OWASP)</h3>
        <p>
          La defensa principal es la implementación de <strong>Consultas Parametrizadas</strong>, asegurando que el motor de BD trate 
          la entrada exclusivamente como un valor de datos inofensivo. Complementariamente, se debe aplicar <strong>Validación de Entradas 
          mediante Listas Blancas</strong> para que el parámetro de categoría solo acepte valores predefinidos y conocidos por el negocio.
        </p>
      </div>
    </div>
  );
};