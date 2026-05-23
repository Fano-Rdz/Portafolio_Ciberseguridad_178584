import { AlertCircle, CheckCircle2, RotateCcw, FileText, Activity, ShieldAlert } from 'lucide-react';

export const FaseAuditoria = () => {
  return (
    <div className="fade-in">
      {/* 1. INDICADORES DE AUDITORÍA INTERNA */}
      <div className="metrics-grid">
        <div className="metric-box crítico">
          <div className="metric-header">
            <span>HALLAZGOS DETECTADOS</span>
            <AlertCircle size={16} />
          </div>
          <p><strong>1 No Conformidad Mayor:</strong> Ruptura en la trazabilidad del control criptográfico del Anexo A sobre el núcleo de MTProto 2.0.</p>
        </div>

        <div className="metric-box advertencia">
          <div className="metric-header">
            <span>PLANES CORRECTIVOS</span>
            <RotateCcw size={16} />
          </div>
          <p><strong>Ejecutados al 100%:</strong> Acciones de mitigación desplegadas en dos fases lógicas (Auditoría externa + Bot preventivo).</p>
        </div>

        <div className="metric-box exitoso">
          <div className="metric-header">
            <span>EVALUACIÓN DE EFICACIA</span>
            <CheckCircle2 size={16} />
          </div>
          <p><strong>Dictamen: Eficaz.</strong> Cierre completo de la desviación tras un ciclo de monitoreo de integridad de 30 días.</p>
        </div>
      </div>

      {/* 2. REPORTE FORMAL DE NO CONFORMIDAD */}
      <div className="info-card" style={{ marginTop: '1.5rem' }}>
        <div className="section-header">
          <ShieldAlert className="section-icon" size={22} style={{ color: '#ef4444' }} />
          <h2>1. Informe de No Conformidad (Hallazgo de Auditoría Interna)</h2>
        </div>
        
        <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ef4444', marginBottom: '1.5rem' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>
            <strong style={{ color: '#ef4444' }}>Descripción de la Desviación:</strong> Durante la auditoría interna del SGSI, se detectó que el proceso operativo de desarrollo de software (SDLC) permitió la fusión de cambios en el protocolo criptográfico core <strong>MTProto 2.0</strong> sin contar con una validación matemática o revisión independiente de seguridad de terceros. 
          </p>
          <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#94a3b8' }}>
            <strong>Cláusula / Control Afectado:</strong> ISO/IEC 27001:2022 — Control Anexo <strong>A.8.24 (Uso de Criptografía)</strong> en relación con el requisito de diseño seguro del protocolo.
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>
            <strong>Causa Raíz Analizada:</strong> Dependencia excesiva en revisiones internas del equipo compacto de ingeniería (~30 ingenieros) y ausencia de un canal normativo automatizado que exija la certificación de una firma de ciberseguridad externa antes del empaquetado de las ramas de producción.
          </p>
        </div>
      </div>

      {/* 3. PLAN DE ACCIONES CORRECTIVAS Y VALIDACIÓN */}
      <div className="info-card">
        <div className="section-header">
          <FileText className="section-icon" size={22} />
          <h2>2. Plan de Acciones Correctivas (Tratamiento del Hallazgo)</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Para subsanar la causa raíz y garantizar que la inyección de vulnerabilidades por ingeniería inversa sea contenida, se diseñó e implementó la siguiente estructura dual:
        </p>

        <div className="ethical-grid">
          {/* CONTROL ORGANIZACIONAL */}
          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', color: '#3b82f6' }}>
              <FileText size={20} />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>Acción A: Certificación Externa</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Se formalizó un contrato de auditoría de caja blanca periódica con un laboratorio criptográfico independiente. Ninguna actualización mayor al core de MTProto puede pasar a producción sin que el hash del código coincida con la firma digital emitida por el auditor externo.
            </p>
          </div>

          {/* CONTROL DE SOPORTE AUTOMATIZADO */}
          <div className="ethical-list" style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', color: '#10b981' }}>
              <Activity size={20} />
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>Acción B: Bot de Monitoreo Continuo</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Como mecanismo de persistencia técnica, se inyectó un bot automatizado en el sistema de control de versiones que escanea cada <strong>60 minutos</strong> las reglas de protección de las ramas. Ante una desactivación de políticas o cambios sin firma dual, bloquea los accesos de inmediato.
            </p>
          </div>
        </div>
      </div>

      {/* 4. EVALUACIÓN DE EFICACIA DEL CICLO DE MEJORA */}
      <div className="info-card">
        <div className="section-header">
          <CheckCircle2 className="section-icon" size={22} style={{ color: '#10b981' }} />
          <h2>3. Evaluación de Eficacia (Cierre del Hallazgo)</h2>
        </div>
        <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
          Transcurridos 30 días desde el despliegue del plan de tratamiento (Corte de evaluación: 18 de mayo de 2026), el área de Seguridad Informática ejecutó las pruebas de cumplimiento normativo:
        </p>

        <div className="conclusion-text" style={{ borderColor: '#10b981', background: 'rgba(16, 185, 129, 0.04)' }}>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>✔️ <strong>Validación de Logs:</strong> Se analizaron 8 fusiones (merges) de código aplicadas al protocolo core en este periodo. En el 100% de los casos, los entornos de CI/CD exigieron y validaron de manera estricta la firma dual de la auditoría externa.</li>
            <li>✔️ <strong>Persistencia del Bot:</strong> El script automatizado operó sin caídas ni falsos negativos, disparando alertas de auditoría preventiva de manera correcta en el dashboard de monitoreo.</li>
            <li>🚀 <strong>Conclusión de Cumplimiento:</strong> La acción correctiva se evalúa formalmente como <strong>EFICAZ</strong>. Se da por cerrada la No Conformidad Mayor al haber restituido la trazabilidad completa exigida por la norma ISO/IEC 27001:2022.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};