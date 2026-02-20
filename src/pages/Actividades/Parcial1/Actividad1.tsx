import './css/Actividad1.css';
import { Download } from 'lucide-react';

export const Actividad1 = () => {
  return (
    <div className="actividad-content">
      <header className="act-header">
        <div className="header-top">
          <span className="badge">Caso de Estudio: PEMEX 2019</span>
          <a 
            href="./Actividades/Parcial1/act01-Equipo2.pdf" 
            download="act01-Equipo2.pdf"
            className="download-button"
          >
            <Download size={18} />
            Importar PDF
          </a>
        </div>
        <h2 className="text-3xl font-bold text-white mt-4">Análisis Forense y Estratégico</h2>
        <p className="text-slate-400 mt-2">
          Análisis de la "Deuda Técnica" y el impacto del ransomware DoppelPaymer.
        </p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Vector de Entrada</span>
          <span className="stat-value text-blue-400">CVE-2019-0604</span>
          <span className="stat-sub">SharePoint (RCE) </span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Dwell Time Est.</span>
          <span className="stat-value text-yellow-500">~2 Meses</span>
          <span className="stat-sub">Septiembre - Noviembre </span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Rescate Exigido</span>
          <span className="stat-value text-red-500">565 BTC</span>
          <span className="stat-sub">~$4.9 MDD (2019)</span>
        </div>
      </div>

      <section className="section-block">
        <h3 className="section-title">Análisis de Fallas Estructurales</h3>
        <div className="analysis-grid">
          <div className="analysis-item">
            <h4>Falla Técnica</h4>
            <p>
              Uso de sistemas <em>Legacy</em> (Windows Server 2003 y Windows 7) fuera de soporte desde 2015. 
              Omisión de parches críticos por más de 6 meses.
            </p>
          </div>
          <div className="analysis-item">
            <h4>Falla Humana</h4>
            <p>
              Se sospecha de campañas de <em>Spearphishing</em> dirigidas a empleados con altos privilegios, entregando credenciales de administrador de dominio.
            </p>
          </div>
          <div className="analysis-item">
            <h4>Falla Política</h4>
            <p>
              Ciberseguridad vista como gasto y no como prioridad. Falta de un Plan de Continuidad de Negocio (BCP) actualizado.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block bg-darker">
        <h3 className="section-title">Desglose de Costos (Estimados en MXN)</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Costo Est.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pérdidas Operativas</td>
              <td>Ineficiencia logística y ventas no realizadas.</td>
              <td>$804 - $1,149 MDP</td>
            </tr>
            <tr>
              <td>Costos Técnicos</td>
              <td>Recuperación, parches y licencias (SAP/IBM).</td>
              <td>~$1,000+ MDP</td>
            </tr>
            <tr>
              <td>Daño Reputacional</td>
              <td>Filtración de datos y pérdida de contratos.</td>
              <td>~$517 - $574 MDP</td>
            </tr>
            <tr className="total-row">
              <td colSpan={2}>Total Estimado (Valuación 2019) </td>
              <td>$2,567 - $3,170 MDP</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section-block">
        <h3 className="section-title">Relación con Marcos Internacionales</h3>
        <div className="compliance-grid">
          <div className="compliance-box">
            <strong>ISO 27001</strong>
            <p>Incumplimiento en controles de código malicioso (A.12.2.1) y gestión de respaldos (A.12.3.1).</p>
          </div>
          <div className="compliance-box">
            <strong>NIST CSF</strong>
            <p>Deficiencias en funciones de <em>Identify</em> (activos) y <em>Protect</em> (segmentación).</p>
          </div>
        </div>
      </section>

      <footer className="report-footer">
        <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
      </footer>
    </div>
  );
};
