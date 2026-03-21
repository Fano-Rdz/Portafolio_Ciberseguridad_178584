import React, { useState } from 'react';
import { Lock, User, Target, Shield, BarChart3, AlertCircle } from 'lucide-react';
import { SimulacionEmails } from './SimulacionEmails'; 
import { SeccionScoreboard } from './SeccionScoreboard';
// 1. IMPORTANTE: Importar las herramientas de Firebase que configuramos
import { db, ref, push } from '../firebase'; 
import './css/SeccionQuiz.css';

interface PantallaBienvenidaProps {
  onStartQuiz: () => void;
  userAlias: string;
  setUserAlias: (val: string) => void;
}

type FaseQuiz = 'bienvenida' | 'escenarios' | 'resultados';

const PantallaBienvenida: React.FC<PantallaBienvenidaProps> = ({ onStartQuiz, userAlias, setUserAlias }) => {
  const [error, setError] = useState<string>('');

  const handleStart = () => {
    if (!userAlias.trim()) {
      setError('Por favor, ingresa un alias o nombre para continuar.');
      return;
    }
    setError('');
    onStartQuiz();
  };

  return (
    <div className="bienvenida-container fade-in">
      <div className="consentimiento-card">
        <div className="card-header">
          <Lock size={32} className="consent-icon" />
          <h1>Consentimiento Informado</h1>
        </div>
        <div className="card-body">
          <p className="texto-principal">
            Bienvenido/a a la simulación interactiva de Phishing. Esta herramienta es de{" "}
            <strong>carácter estrictamente educativo</strong>.
          </p>
          <ul className="lista-puntos">
            <li><Target size={18} /> 10 escenarios que simulan una bandeja de entrada real.</li>
            <li><Shield size={18} /> Decide si el correo es <strong>Legítimo</strong> o <strong>Phishing</strong>.</li>
            <li><User size={18} /> No se capturarán contraseñas reales.</li>
            <li><BarChart3 size={18} /> Los resultados se usarán para el Ranking Global.</li>
          </ul>
        </div>
        <div className="card-footer">
          <label htmlFor="aliasInput" className="label-alias">Ingresa tu Alias o Nombre:</label>
          <div className="input-group">
            <User size={20} className="input-icon" />
            <input
              id="aliasInput"
              type="text"
              value={userAlias}
              onChange={(e) => setUserAlias(e.target.value)}
              placeholder="Ej. Estefano_Dev"
              className={`input-alias ${error ? 'input-error' : ''}`}
            />
          </div>
          {error && <p className="error-text"><AlertCircle size={14} /> {error}</p>}
          <button onClick={handleStart} className="btn-comenzar">Comenzar Simulación</button>
        </div>
      </div>
    </div>
  );
};

export const SeccionQuiz: React.FC = () => {
  const [faseQuiz, setFaseQuiz] = useState<FaseQuiz>('bienvenida');
  const [userAlias, setUserAlias] = useState<string>('');

  const finalizarSimulacion = (scoreFinal: number, errores: number[]) => {
    // 2. Lógica de envío a Firebase
    const nuevaEntrada = {
      alias: userAlias,
      score: scoreFinal,
      fecha: new Date().toLocaleDateString(),
      idsFallados: errores,
      timestamp: Date.now()
    };

    // Usamos las funciones de Firebase importadas
    push(ref(db, 'ranking'), nuevaEntrada);
    setFaseQuiz('resultados');
  };

  return (
    <div className="quiz-wrapper">
      {faseQuiz === 'bienvenida' && (
        <PantallaBienvenida 
          onStartQuiz={() => setFaseQuiz('escenarios')} 
          userAlias={userAlias} 
          setUserAlias={setUserAlias} 
        />
      )}

      {faseQuiz === 'escenarios' && (
        <SimulacionEmails 
            userAlias={userAlias} 
            onFinalizar={finalizarSimulacion} 
        />
      )}

      {faseQuiz === 'resultados' && (
        <div className="resultados-finales">
            <SeccionScoreboard />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => setFaseQuiz('bienvenida')} className="btn-reintentar">
                Volver a Intentar
              </button>
            </div>
        </div>
      )}
    </div>
  );
};