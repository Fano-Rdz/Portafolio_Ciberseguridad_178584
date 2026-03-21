import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { emailsSimulados } from '../data/simulacionEmails';
import './css/SimulacionEmails.css';

interface AmbienteCorreoProps {
  userAlias: string;
  onFinalizar: (score: number, errores: number[]) => void;
}

export const SimulacionEmails: React.FC<AmbienteCorreoProps> = ({ userAlias, onFinalizar }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [acerto, setAcerto] = useState<boolean | null>(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [idsFallados, setIdsFallados] = useState<number[]>([]);

  const mailActual = emailsSimulados[indiceActual];

  const handleDecision = (esPhishing: boolean) => {
  const resultado = esPhishing === mailActual.esPhishing;
  setAcerto(resultado);
  setRespondido(true);
  
  if (resultado) {
    setPuntuacion(prev => prev + 1);
  } else {
    setIdsFallados(prev => [...prev, mailActual.id]);
  }
};

  const handleTrapClick = (e: React.MouseEvent) => {
  e.preventDefault();

  if (mailActual.esPhishing && !respondido) {
    setAcerto(false);
    setRespondido(true);
  }
};

  const siguienteEscenario = () => {
    if (indiceActual < emailsSimulados.length - 1) {
      setIndiceActual(prev => prev + 1);
      setRespondido(false);
      setAcerto(null);
    } else {
        onFinalizar(puntuacion, idsFallados);
    }
  };

  return (
    <div className="ambiente-correo-container fade-in">
      <div className="user-sim-bar">
        <span>Usuario: <strong>{userAlias}</strong></span>
        <span>Progreso: {indiceActual + 1} / {emailsSimulados.length}</span>
        <span>Aciertos: {puntuacion}</span>
      </div>

      <div className="email-layout">
        {/* 2. Lista de correos (Simulada) */}
        <aside className="email-list">
          {emailsSimulados.map((mail, idx) => (
            <div 
              key={mail.id} 
              className={`email-item-preview ${idx === indiceActual ? 'active' : ''} ${idx > indiceActual ? 'pending' : 'completed'}`}
            >
              <div className="preview-header">
                <span className="preview-sender">{mail.remitente}</span>
                <span className="preview-date">{mail.fecha}</span>
              </div>
              <div className="preview-subject">{mail.asunto}</div>
            </div>
          ))}
        </aside>

        {/* 3. Visor de Correo Detallado */}
        <main className="email-viewer">
          <section className="email-detail-header">
            <h1 className="detail-subject">{mailActual.asunto}</h1>
            <div className="sender-profile">
              <div className="avatar">{mailActual.remitente[0]}</div>
              <div className="sender-text">
                <strong>{mailActual.remitente}</strong>
                <span>&lt;{mailActual.email_remitente}&gt;</span>
              </div>
            </div>
          </section>

          <section className="email-detail-body">
            {/* Renderizado del HTML del correo */}
            <div 
              className="html-content"
              onClick={handleTrapClick}
              dangerouslySetInnerHTML={{ __html: mailActual.cuerpo_html }} 
            />
          </section>

          {/* 4. Panel de Interacción / Feedback */}
          <footer className="email-footer-actions">
            {!respondido ? (
              <div className="decision-prompt">
                <p><Info size={16} /> Analiza los detalles técnicos (remitente, enlaces, adjuntos) antes de decidir.</p>
                <div className="btn-group">
                  <button className="btn-phish" onClick={() => handleDecision(true)}>
                    <AlertTriangle size={18} /> Reportar Phishing
                  </button>
                  <button className="btn-safe" onClick={() => handleDecision(false)}>
                    <ShieldCheck size={18} /> Marcar como Seguro
                  </button>
                </div>
              </div>
            ) : (
              <div className={`feedback-area ${acerto ? 'feedback-success' : 'feedback-error'}`}>
                <div className="feedback-header">
                  {acerto ? <CheckCircle /> : <AlertTriangle />}
                  <span>{acerto ? '¡Identificación Correcta!' : 'Identificación Incorrecta'}</span>
                </div>
                <p className="feedback-text">{mailActual.retroalimentacion}</p>
                <button className="btn-next" onClick={siguienteEscenario}>
                  Siguiente Escenario <ArrowRight size={18} />
                </button>
              </div>
            )}
          </footer>
        </main>
      </div>
    </div>
  );
};