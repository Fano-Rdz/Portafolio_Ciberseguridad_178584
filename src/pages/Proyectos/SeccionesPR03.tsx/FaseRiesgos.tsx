import { ShieldAlert, ListFilter } from 'lucide-react';

export const FaseRiesgos = () => {
  return (
    <div className="fade-in">
      {/* 1. SECCIÓN DE ANÁLISIS DE RIESGOS */}
      <div className="info-card">
        <div className="section-header">
          <ShieldAlert className="section-icon" size={22} />
          <h2>1. Matriz de Identificación y Evaluación de Riesgos</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Basado en los procesos críticos definidos en el alcance, se evaluaron los activos lógicos de Telegram, aplicando la fórmula de impacto calculada sobre las dimensiones de Confidencialidad (C) y Disponibilidad (A):
        </p>

        {/* CONTENEDOR DE LA TABLA DE RIESGOS */}
        <div className="table-wrapper">
          <table className="tabla-tecnica">
            <thead>
              <tr>
                <th>ID</th>
                <th>Activo Crítico</th>
                <th>Amenaza Principal</th>
                <th>Vulnerabilidad</th>
                <th>C</th>
                <th>A</th>
                <th>Impacto Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>R-01</strong></td>
                <td className="col-name">Código Fuente de Aplicación (Cliente)</td>
                <td>Ingeniería Inversa y Descompilación</td>
                <td>Ausencia de mecanismos avanzados de ofuscación y firmado binario.</td>
                <td className="col-metrics">Alta</td>
                <td className="col-metrics">Baja</td>
                <td><span className="status-badge" style={{ backgroundColor: '#f59e0b', color: '#000' }}>Alto</span></td>
              </tr>
              <tr>
                <td><strong>R-02</strong></td>
                <td className="col-name">Protocolo Criptográfico MTProto 2.0</td>
                <td>Descubrimiento de fallas lógicas / Criptoanálisis</td>
                <td>Falta de auditorías externas e independientes periódicas sobre el diseño matemático.</td>
                <td className="col-metrics">Crítica</td>
                <td className="col-metrics">Crítica</td>
                <td><span className="status-badge" style={{ backgroundColor: '#ef4444', color: '#fff' }}>Crítico</span></td>
              </tr>
              <tr>
                <td><strong>R-03</strong></td>
                <td className="col-name">Servidores de Producción (Clústeres)</td>
                <td>Ataques Distribuidos de Denegación de Servicio (DDoS)</td>
                <td>Dependencia de enlaces de red perimetrales sin balanceo dinámico automatizado.</td>
                <td className="col-metrics">Baja</td>
                <td className="col-metrics">Crítica</td>
                <td><span className="status-badge" style={{ backgroundColor: '#f59e0b', color: '#000' }}>Alto</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. DECLARACIÓN DE APLICABILIDAD (SoA) */}
      <div className="info-card">
        <div className="section-header">
          <ListFilter className="section-icon" size={22} />
          <h2>2. Declaración de Aplicabilidad (Statement of Applicability - SoA)</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Selección y justificación de los controles específicos extraídos del **Anexo A de la norma ISO/IEC 27001:2022** para mitigar de forma directa las amenazas críticas identificadas:
        </p>

        {/* CONTENEDOR DE LA TABLA SOA */}
        <div className="table-wrapper">
          <table className="tabla-tecnica">
            <thead>
              <tr>
                <th>Control Anexo A</th>
                <th>Nombre del Control</th>
                <th>Estatus</th>
                <th>Justificación Técnica de Selección</th>
                <th>Mecanismo Práctico de Implementación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A.8.24</strong></td>
                <td className="col-name">Uso de Criptografía</td>
                <td className="col-ethic" style={{ fontWeight: 'bold' }}>Aplica</td>
                <td>Esencial para asegurar que el tráfico y las bases de datos locales no puedan ser descifrados ante intercepciones de red o inspecciones de servidores.</td>
                <td>Implementación estricta de curvas elípticas, intercambio Diffie-Hellman y rotación automatizada de llaves simétricas.</td>
              </tr>
              <tr>
                <td><strong>A.8.28</strong></td>
                <td className="col-name">Seguridad en el Ciclo de Vida del Desarrollo</td>
                <td className="col-ethic" style={{ fontWeight: 'bold' }}>Aplica</td>
                <td>Previene la inyección de fallas explotables por ingeniería inversa en las aplicaciones cliente antes de que los binarios se distribuyan masivamente.</td>
                <td>Integración de flujos obligatorios de revisión de código (code review) y políticas de ramificaciones protegidas en repositorios centrales.</td>
              </tr>
              <tr>
                <td><strong>A.5.15</strong></td>
                <td className="col-name">Control de Acceso</td>
                <td className="col-ethic" style={{ fontWeight: 'bold' }}>Aplica</td>
                <td>Evita la manipulación de la infraestructura distribuida global por parte de personal corporativo o administradores no autorizados.</td>
                <td>Despliegue de esquemas de autenticación multifactor (MFA), llaves de hardware SSH y segregación de credenciales por región geográfica.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CONCLUSIÓN DE RIESGOS */}
      <div className="conclusion-text">
        <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5', color: '#cbd5e1' }}>
          💡 <strong>Nota del Auditor:</strong> Al mapear con precisión el control <em>A.8.24 (Criptografía)</em> y ligarlo a la vulnerabilidad del diseño de <em>MTProto 2.0 (R-02)</em>, se establece el puente reglamentario exigido por la norma ISO 27001. Esto garantiza que las fases posteriores de Tratamiento y Auditoría se concentren de forma coherente en resolver la ausencia de validaciones sobre las rutinas criptográficas.
        </p>
      </div>
    </div>
  );
};