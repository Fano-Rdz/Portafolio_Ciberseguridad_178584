import { useState } from 'react';
import { Download, Eye, DollarSign, UserCheck } from 'lucide-react';

export const Actividad16 = () => {
  // Estado para controlar qué escenario se muestra dentro de la Actividad 16
  const [escenarioActivo, setEscenarioActivo] = useState<number>(1);

  return (
    <div className="actividad-content">
      {/* CABECERA DE LA ACTIVIDAD */}
      <header className="act-header">
        <div className="header-top">
          <span className="badge">Seguridad Informática II - Tarea Académica</span>
          <a 
            href="./Actividades/Parcial3/act16-Equipo2.pdf" 
            download="act16-Equipo2.pdf"
            className="download-button"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Dilemas Éticos de la Ciberseguridad</h2>
        <p className="text-slate-400 mt-2">
          Análisis estructurado de la toma de decisiones críticas, cumplimiento normativo y responsabilidad corporativa.
        </p>
      </header>

      {/* SUB-TABS INTERNAS PARA LOS ESCENARIOS */}
      <div className="tabs-wrapper" style={{ marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '5px' }}>
        <button 
          onClick={() => setEscenarioActivo(1)} 
          className={`tab-button ${escenarioActivo === 1 ? 'active' : ''}`}
          style={{ fontSize: '0.9rem', padding: '8px 16px' }}
        >
          Escenario 1: Acceso Interno
        </button>
        <button 
          onClick={() => setEscenarioActivo(2)} 
          className={`tab-button ${escenarioActivo === 2 ? 'active' : ''}`}
          style={{ fontSize: '0.9rem', padding: '8px 16px' }}
        >
          Escenario 2: Vulnerabilidad Financiera
        </button>
        <button 
          onClick={() => setEscenarioActivo(3)} 
          className={`tab-button ${escenarioActivo === 3 ? 'active' : ''}`}
          style={{ fontSize: '0.9rem', padding: '8px 16px' }}
        >
          Escenario 3: Límites OSINT
        </button>
      </div>

      {/* --- DESPLIEGUE DEL ESCENARIO 1 --- */}
      {escenarioActivo === 1 && (
        <div className="fade-in">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Contexto</span>
              <span className="stat-value text-blue-400" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={20} /> Interno
              </span>
              <span className="stat-sub">Auditoría de Logs</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Tipo de Delito</span>
              <span className="stat-value text-yellow-500" style={{ fontSize: '1.4rem' }}>Delito Informático</span>
              <span className="stat-sub">Acceso Ilícito a Sistemas</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Gravedad Ética</span>
              <span className="stat-value text-red-500">Crítica</span>
              <span className="stat-sub">Abuso de Credenciales</span>
            </div>
          </div>

          <section className="section-block">
            <h3 className="section-title">Identificación del Dilema</h3>
            <p className="actividad-texto">
              Un analista accede sin autorización a los correos privados del director general bajo el argumento de 
              "detectar posibles fugas de información". Se contrapone el deber percibido de protección frente al 
              respeto absoluto a la confidencialidad y el principio de privilegios mínimos.
            </p>
          </section>

          <section className="section-block">
            <h3 className="section-title">Evaluación bajo Marcos Éticos</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <h4>Ética Utilitarista</h4>
                <p>El beneficio individual de "intentar descubrir una fuga" no supera el daño colectivo. Permitir accesos arbitrarios destruye la confianza institucional y vulnera la gobernanza.</p>
              </div>
              <div className="analysis-item">
                <h4>Enfoque de Derechos</h4>
                <p>El director conserva el derecho fundamental a la privacidad de sus comunicaciones. Este solo puede suspenderse mediante una investigación oficial del comité de ética o área legal.</p>
              </div>
              <div className="analysis-item">
                <h4>Bien Común</h4>
                <p>La seguridad se sostiene sobre el respeto estricto a las políticas internas (Uso Aceptable). Si cada analista actúa bajo su propio criterio, se disuelve el orden operativo.</p>
              </div>
            </div>
          </section>

          <section className="section-block bg-darker">
            <h3 className="section-title">Incumplimiento Normativo</h3>
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Dimensión</th>
                  <th>Identificador / Control</th>
                  <th>Descripción del Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mandamiento Informático</strong></td>
                  <td>Mandamiento 3 y 10</td>
                  <td>"No indagarás en los archivos informáticos ajenos" y "Utilizarás las computadoras respetando a tus semejantes".</td>
                </tr>
                <tr>
                  <td><strong>Clasificación Legal</strong></td>
                  <td>Acceso ilícito a sistemas</td>
                  <td>Vulneración de la confidencialidad de los datos mediante el abuso de funciones de administración.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="section-block">
            <h3 className="section-title">Justificación y Postura Profesional</h3>
            <div className="compliance-grid">
              <div className="compliance-box" style={{ borderLeft: '4px solid #3b82f6' }}>
                <strong>Acción Técnica Correcta</strong>
                <p>Congelar y preservar las bitácoras (logs) para asegurar la cadena de custodia. Proceder al reporte inmediato ante el Comité de Ética o Dirección Jurídica siguiendo el Plan de Respuesta a Incidentes Internos, evitando confrontaciones directas.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* --- DESPLIEGUE DEL ESCENARIO 2 --- */}
      {escenarioActivo === 2 && (
        <div className="fade-in">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Contexto</span>
              <span className="stat-value text-blue-400" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <DollarSign size={20} /> Financiero
              </span>
              <span className="stat-sub">Pentesting Externo</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Tipo de Delito</span>
              <span className="stat-value text-yellow-500" style={{ fontSize: '1.4rem' }}>Asistido por Comp.</span>
              <span className="stat-sub">Fraude y Robo de Activos</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Gravedad Ética</span>
              <span className="stat-value text-red-500">Legal / Penal</span>
              <span className="stat-sub">Rompe Acuerdos NDA</span>
            </div>
          </div>

          <section className="section-block">
            <h3 className="section-title">Identificación del Dilema</h3>
            <p className="actividad-texto">
              Descubrimiento de una vulnerabilidad crítica que permite extraer dinero de un sistema financiero antes de firmar el contrato final. 
              El dilema se presenta entre el beneficio económico inmediato mediante la explotación invisible y la integridad profesional del auditor.
            </p>
          </section>

          <section className="section-block">
            <h3 className="section-title">Evaluación bajo Marcos Éticos</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <h4>Ética Utilitarista</h4>
                <p>La explotación causaría pérdidas masivas a los usuarios y la quiebra de la auditora. El reporte previene un impacto socioeconómico devastador, maximizando el bienestar colectivo.</p>
              </div>
              <div className="analysis-item">
                <h4>Enfoque de Derechos</h4>
                <p>Los cuentahabientes tienen derecho legítimo a la protección de su patrimonio y a la seguridad digital. Explotar el fallo vulnera directamente sus derechos de propiedad.</p>
              </div>
              <div className="analysis-item">
                <h4>Bien Común</h4>
                <p>El sistema financiero se basa en la confianza mutua. Mantener la solidez de estas plataformas digitales asegura la estabilidad económica de la sociedad en general.</p>
              </div>
            </div>
          </section>

          <section className="section-block bg-darker">
            <h3 className="section-title">Alineación con Buenas Prácticas</h3>
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Dimensión</th>
                  <th>Identificador / Control</th>
                  <th>Descripción del Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mandamiento Informático</strong></td>
                  <td>Mandamientos 1, 4 y 9</td>
                  <td>Se respetan de forma estricta al no usar la computadora para robar, dañar o ignorar las consecuencias sociales del diseño.</td>
                </tr>
                <tr>
                  <td><strong>Clasificación Legal</strong></td>
                  <td>Delito asistido por computadora</td>
                  <td>La explotación técnica se convierte en el medio ejecutor de delitos patrimoniales tradicionales (fraude).</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="section-block">
            <h3 className="section-title">Justificación y Postura Profesional</h3>
            <div className="compliance-grid">
              <div className="compliance-box" style={{ borderLeft: '4px solid #3b82f6' }}>
                <strong>Divulgación Responsable (Responsible Disclosure)</strong>
                <p>La ausencia de un contrato firmado no exime al profesional del acuerdo de confidencialidad previo (NDA) ni del principio de buena fe. Se debe detener toda interacción con el exploit, documentar detalladamente y reportar de urgencia por los canales oficiales.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* --- DESPLIEGUE DEL ESCENARIO 3 --- */}
      {escenarioActivo === 3 && (
        <div className="fade-in">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Contexto</span>
              <span className="stat-value text-blue-400" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserCheck size={20} /> OSINT
              </span>
              <span className="stat-sub">Fuentes Abiertas</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Tipo de Delito</span>
              <span className="stat-value text-yellow-500" style={{ fontSize: '1.4rem' }}>Asistido por Comp.</span>
              <span className="stat-sub">Extorsión y Acoso</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Gravedad Ética</span>
              <span className="stat-value text-red-500">Corporativa</span>
              <span className="stat-sub">Obediencia Debida</span>
            </div>
          </div>

          <section className="section-block">
            <h3 className="section-title">Identificación del Dilema</h3>
            <p className="actividad-texto">
              Un superior solicita utilizar datos personales obtenidos legítimamente vía OSINT (hábitos, familia) de un sospechoso de fraude 
              para ejercer presión psicológica. Choca la obediencia jerárquica contra el límite legal de la investigación (evitar la extorsión o doxxing).
            </p>
          </section>

          <section className="section-block">
            <h3 className="section-title">Evaluación bajo Marcos Éticos</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <h4>Ética Utilitarista</h4>
                <p>La coacción psicológica contamina el proceso legal. Si el sospechoso alega acoso, las pruebas válidas se desestiman en juicio (Fruto del árbol envenenado), dañando a la empresa.</p>
              </div>
              <div className="analysis-item">
                <h4>Enfoque de Derechos</h4>
                <p>Incluso un sospechoso conserva sus derechos fundamentales al debido proceso y a la dignidad humana. El analista de seguridad no posee facultades punitivas ni judiciales.</p>
              </div>
              <div className="analysis-item">
                <h4>Bien Común</h4>
                <p>Permitir que los departamentos de seguridad corporativa actúen como "justicieros" al margen de la ley degrada el estado de derecho y deslegitima por completo la profesión.</p>
              </div>
            </div>
          </section>

          <section className="section-block bg-darker">
            <h3 className="section-title">Evaluación de la Orden</h3>
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Dimensión</th>
                  <th>Identificador / Control</th>
                  <th>Descripción del Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mandamiento Informático</strong></td>
                  <td>Mandamientos 1 y 10</td>
                  <td>Violados al utilizar datos e infraestructura digital para infligir hostigamiento y daño psicológico a un semejante.</td>
                </tr>
                <tr>
                  <td><strong>Clasificación Legal</strong></td>
                  <td>Extorsión y amenazas</td>
                  <td>Uso de tecnologías de recolección informativa como el medio principal para perpetrar hostigamiento coercitivo.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="section-block">
            <h3 className="section-title">Justificación y Postura Profesional</h3>
            <div className="compliance-grid">
              <div className="compliance-box" style={{ borderLeft: '4px solid #3b82f6' }}>
                <strong>Negativa Asertiva e Institucional</strong>
                <p>Que la información sea pública no la hace utilizable para fines delictivos. Se debe presentar una negativa asertiva a la orden, entregar el reporte técnico objetivo al equipo legal y, si la presión del superior persiste, escalar a Recursos Humanos o canales de Whistleblowing.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PIE DE REPORTE */}
      <footer className="report-footer" style={{ marginTop: '2rem' }}>
        <p>Integrantes: J. López, A. Mata, E. Rodríguez, E. Morín, I. Ros, M. Salinas [cite: 3, 4, 5, 6, 7, 8, 9]</p>
        <p>Universidad Politécnica de San Luis Potosí — Profesor: Servando López Contreras [cite: 10]</p>
      </footer>
    </div>
  );
};