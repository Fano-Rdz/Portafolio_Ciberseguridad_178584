import { Terminal, ShieldCheck, Search, Code, CheckCircle, ExternalLink} from 'lucide-react';

export const Lab05 = () => {
  return (
    <div className="sqli-fade-in">
      <div className="sqli-card-header">
        <div className="sqli-badge">Vulnerabilidad: UNION-based SQLi (Schema Enumeration)</div>
        <div className="status-solved">
          <CheckCircle size={16} /> Lab Solved
        </div>
      </div>

      <h2 className="sqli-section-title">Extracción de Credenciales mediante Enumeración de Esquema</h2>
      
      {/* Resumen Ejecutivo */}
      <div className="sqli-grid-info">
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Objetivo</span>
          <p className="sqli-text-sm">Enumerar tablas y columnas para extraer la contraseña del administrador.</p>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Tabla Ofuscada Detectada</span>
          <div className="sqli-stat-value" style={{ color: '#fbbf24' }}>users_qbvywo</div>
        </div>
        <div className="sqli-stat-box">
          <span className="sqli-stat-label">Impacto</span>
          <div className="sqli-stat-value" style={{ color: '#ef4444' }}>Crítico (Full Takeover)</div>
        </div>
      </div>

      {/* Explicación Técnica */}
      <div className="sqli-info-section">
        <h3><Search size={18} /> Explicación Técnica</h3>
        <p>
          El parámetro <code>category</code> es vulnerable a una inyección SQL que permite el uso del operador <strong>UNION</strong>. 
          Debido a la falta de parametrización, un atacante puede forzar a la base de datos a consultar el <code>information_schema</code>, 
          un repositorio de metadatos que contiene la estructura de todas las tablas y columnas. Esto permite mapear la base de datos 
          y localizar tablas de usuarios con nombres ofuscados para extraer credenciales en texto plano.
        </p>
      </div>

      {/* Procedimiento */}
      <div className="sqli-procedimiento">
        <h3><Terminal size={18} /> Procedimiento Paso a Paso</h3>
        <ul className="sqli-list-steps">
          <li><span>1</span> Intercepción de la petición con <strong>Burp Suite</strong> y envío a <strong>Repeater</strong>.</li>
          <li><span>2</span> Consulta a <code>information_schema.tables</code> para listar las tablas existentes en la BD.</li>
          <li><span>3</span> Identificación de la tabla de usuarios objetivo: <code>users_qbvywo</code>.</li>
          <li><span>4</span> Mapeo de columnas mediante <code>information_schema.columns</code> para hallar <code>username_pqbuks</code> y <code>password_uqpynv</code>.</li>
          <li><span>5</span> Ejecución del payload final de extracción de datos para obtener la contraseña del administrador.</li>
          <li><span>6</span> Compromiso de la cuenta <strong>administrator</strong> mediante el uso de las credenciales extraídas.</li>
        </ul>
      </div>

      {/* Payload y Análisis */}
      <div className="sqli-payload-container">
        <div className="code-header"><Code size={16} /> Payload Final: <code>'+UNION+SELECT+username_pqbuks,+password_uqpynv+FROM+users_qbvywo--</code></div>
        <div className="payload-grid">
          <div className="payload-explanation">
            <ul>
              <li><code>'</code> Cierra la cadena de texto de la consulta legítima.</li>
              <li><code>UNION SELECT</code> Combina los resultados originales con la extracción de datos sensibles.</li>
              <li><code>username_pqbuks, password_uqpynv</code> Columnas específicas descubiertas durante la fase de enumeración.</li>
              <li><code>FROM users_qbvywo</code> Tabla objetivo que almacena las credenciales ofuscadas.</li>
              <li><code>--</code> Comentario para neutralizar el resto del código SQL de la aplicación.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evidencia Única */}
      <div className="sqli-evidence-section">
        <h3><ExternalLink size={18} /> Evidencia de Resolución</h3>
        <div className="evidence-container-single">
          <img 
            src="./HallOfFame/SQLInjection/Lab05.png" 
            alt="Confirmación Lab Solved - Account Compromise" 
            className="evidence-img-fluid"
          />
          <p className="evidence-caption">Acceso exitoso al panel de administración tras la extracción de credenciales de la base de datos.</p>
        </div>
      </div>

      {/* Mitigación */}
      <div className="sqli-mitigacion-box">
        <h3><ShieldCheck size={18} color="#10b981" /> Mitigación Recomendada</h3>
        <p>
          La medida defensiva principal es la implementación de <strong>Consultas Parametrizadas</strong>, asegurando que 
          las entradas del usuario se traten estrictamente como datos literales. Como defensa en profundidad, se recomienda 
          restringir los privilegios del usuario de la base de datos para que no tenga acceso de lectura al 
          <code>information_schema</code> si no es estrictamente necesario para la operación del negocio.
        </p>
      </div>
    </div>
  );
};