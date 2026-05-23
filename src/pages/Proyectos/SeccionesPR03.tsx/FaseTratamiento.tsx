import { ClipboardList, ShieldCheck, UserCheck, Calendar, HardDrive } from 'lucide-react';

export const FaseTratamiento = () => {
  return (
    <div className="fade-in">
      {/* 1. DISEÑO DE CONTROLES DE SEGURIDAD (POLÍTICAS) */}
      <div className="info-card">
        <div className="section-header">
          <ShieldCheck className="section-icon" size={22} />
          <h2>1. Diseño Técnico de Controles de Seguridad (ISO 27001 Anexo A)</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Para dar cumplimiento a la Declaración de Aplicabilidad, la dirección de Telegram establece los criterios obligatorios de diseño de ingeniería para blindar los dos macroprocesos del alcance:
        </p>

        <div className="ethical-grid">
          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#60a5fa', margin: '0 0 10px 0', fontSize: '1rem' }}>Política de Criptografía Rígida (A.8.24)</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
              Queda estrictamente prohibida la alteración de las rutinas criptográficas del núcleo de MTProto 2.0 por parte del equipo de ingeniería sin un dictamen de validación formal. Toda actualización debe ser respaldada por simulaciones matemáticas de resistencia ante ataques de texto claro escogido (CPA).
            </p>
          </div>

          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#10b981', margin: '0 0 10px 0', fontSize: '1rem' }}>Política de Ingeniería Segura (A.8.28)</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
              El control de cambios exige un flujo de integración continua (CI/CD) donde ninguna rama de código fuente pueda integrarse a producción si cuenta con warnings de descompilación abierta. Se implementan esquemas de firmas electrónicas duales para el empaquetado final de las APKs/Apps.
            </p>
          </div>
        </div>
      </div>

      {/* 2. PLAN DE TRATAMIENTO DE RIESGOS (TABLA PRINCIPAL CORREGIDA) */}
      <div className="info-card">
        <div className="section-header">
          <ClipboardList className="section-icon" size={22} />
          <h2>2. Cronograma de Despliegue y Asignación de Recursos</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Estrategia formalizada de mitigación de riesgos. Se corrigen las desviaciones acoplando soluciones de gobernanza y tecnología con responsables específicos y fechas compromiso reales:
        </p>

        {/* CONTENEDOR DE LA TABLA DE TRATAMIENTO */}
        <div className="table-wrapper">
          <table className="tabla-tecnica">
            <thead>
              <tr>
                <th>Riesgo Asociado</th>
                <th>Acción de Tratamiento (Salvaguarda Técnica)</th>
                <th>Responsable Ejecutor</th>
                <th>Recursos Requeridos</th>
                <th>Fecha Límite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>R-01 (Ingeniería Inversa)</strong></td>
                <td>Implementación de herramientas de ofuscación de código de nivel militar (ProGuard avanzado / DexGuard) en el empaquetado del cliente.</td>
                <td className="col-name">Líder de Desarrollo Mobile</td>
                <td>Licencias de Software de Ofuscación + 40 horas de testing.</td>
                <td className="col-metrics">12 / Mayo / 2026</td>
              </tr>
              <tr>
                {/* AQUÍ CORREGIMOS EL ERROR DE TRAZABILIDAD INTRODUCIENDO LA AUDITORÍA CERCANA */}
                <td><strong>R-02 (Fallas MTProto)</strong></td>
                <td><strong style={{ color: '#60a5fa' }}>Fase 1:</strong> Contratación de una firma externa e independiente para auditoría de caja blanca criptográfica.<br />
                <strong style={{ color: '#10b981' }}>Fase 2:</strong> Despliegue de un Bot de Git para monitoreo de integridad de ramas de configuración cada 60 min.</td>
                <td className="col-name">Chief Cryptographer / CISO</td>
                <td>Presupuesto asignado para consultoría externa especializada de terceros.</td>
                <td className="col-metrics" style={{ color: '#ef4444' }}>15 / Mayo / 2026</td>
              </tr>
              <tr>
                <td><strong>R-03 (Ataques DDoS)</strong></td>
                <td>Despliegue de balanceadores de carga distribuidos globalmente con mitigación perimetral automatizada Anycast.</td>
                <td className="col-name">Director de Infraestructura</td>
                <td>Servicios Cloud perimetrales + reconfiguración de DNS Core.</td>
                <td className="col-metrics">18 / Mayo / 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MÉTRICAS DE RESUMEN DEL TRATAMIENTO */}
      <div className="metrics-grid">
        <div className="metric-box exitoso">
          <div className="metric-header">
            <span>PRESUPUESTO</span>
            <HardDrive size={16} />
          </div>
          <p><strong>Aprobado:</strong> Los recursos financieros para la firma auditora y las licencias de software han sido autorizados al 100% por la alta dirección.</p>
        </div>

        <div className="metric-box advertencia">
          <div className="metric-header">
            <span>HITOS CRÍTICOS</span>
            <Calendar size={16} />
          </div>
          <p><strong>Ventana Corta:</strong> Las fechas están parametrizadas justo antes del cierre de evaluaciones del Tercer Parcial para validar su efectividad real.</p>
        </div>

        <div className="metric-box exitoso">
          <div className="metric-header">
            <span>GOBERNANZA</span>
            <UserCheck size={16} />
          </div>
          <p><strong>Matriz RACI:</strong> Cada control cuenta con un dueño del rol técnico específico asignado, eliminando vacíos de responsabilidad de seguridad.</p>
        </div>
      </div>
    </div>
  );
};