import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink, Lock } from 'lucide-react';

export const Lab02 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: SQLi en el Inicio de Sesión</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Bypass de Autenticación de Administrador</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Obtener privilegios de administrador evadiendo la validación de contraseña.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Parámetro Vulnerable</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>username</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Severidad</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>Crítica</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          La función de inicio de sesión concatena directamente el nombre de usuario en la consulta SQL sin sanitización previa. 
          Esto permite introducir caracteres especiales que alteran la lógica de validación. Al seccionar la consulta, 
          se obliga al motor de la base de datos a verificar únicamente la existencia del usuario, anulando por completo 
          el requisito de la contraseña y permitiendo el acceso no autorizado.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición POST dirigida a la ruta de autenticación mediante <strong>Burp Suite</strong>.</li>
          <li><span>2</span> Envío de la solicitud a <strong>Repeater</strong> para manipulación iterativa.</li>
          <li><span>3</span> Inyección del vector de ataque en el parámetro <code>username</code> para truncar la consulta.</li>
          <li><span>4</span> Asignación de un valor arbitrario en el campo <code>password</code> (campo que será ignorado).</li>
          <li><span>5</span> Confirmación mediante recepción de código <strong>302 Found</strong> y asignación de token de administrador.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Utilizado: <code>administrator'--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Actúa como carácter de escape para finalizar prematuramente la cadena de texto del usuario.</li>
              <li><code>--</code> Operador de comentario que ordena al sistema ignorar el resto del código original (la validación de la contraseña).</li>
              <li><strong>Resultado:</strong> La consulta busca al usuario "administrator" y descarta absolutamente cualquier requisito posterior.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab02.png" 
            alt="Confirmación Lab Solved - Login Bypass" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Acceso exitoso como administrador tras evadir el mecanismo de validación de credenciales.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada (Defensa en Profundidad)</h3>
        <p>
          Se debe implementar obligatoriamente el uso de <strong>Consultas Preparadas</strong> o parametrizadas para asegurar que las entradas se traten como datos literales. 
          Complementariamente, se recomienda una validación de entradas basada en <strong>listas blancas</strong> para rechazar caracteres especiales en los campos de autenticación.
        </p>
      </div>
    </div>
  );
};