import React, { useEffect, useState } from 'react';
import { Trophy, User, Activity, BarChart3, ShieldAlert } from 'lucide-react';
import { db, ref, onValue } from '../firebase'; // Importamos de tu archivo configurado
import { emailsSimulados } from '../data/simulacionEmails'; // Para sacar el nombre del correo
import './css/SeccionScoreboard.css';

interface ScoreEntry {
  alias: string;
  score: number;
  fecha: string;
  idsFallados?: number[]; // El nuevo dato que estamos enviando
}

export const SeccionScoreboard: React.FC = () => {
  const [ranking, setRanking] = useState<ScoreEntry[]>([]);
  const [escenarioCritico, setEscenarioCritico] = useState<string>("Calculando...");

  useEffect(() => {
    const scoresRef = ref(db, 'ranking');
    
    return onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.values(data) as ScoreEntry[];
        setRanking(lista.sort((a, b) => b.score - a.score));
        
        // --- LÓGICA DE ANÁLISIS PROFUNDO (CRITERIO 03) ---
        const conteoErrores: { [key: number]: number } = {};
        
        lista.forEach(entry => {
          if (entry.idsFallados) {
            entry.idsFallados.forEach(id => {
              conteoErrores[id] = (conteoErrores[id] || 0) + 1;
            });
          }
        });

        // Encontrar el ID con más repeticiones
        const idMasFallado = Object.keys(conteoErrores).reduce((a, b) => 
          conteoErrores[Number(a)] > conteoErrores[Number(b)] ? a : b, "0"
        );

        const nombreEscenario = emailsSimulados.find(e => e.id === Number(idMasFallado))?.remitente || "Ninguno aún";
        setEscenarioCritico(nombreEscenario);
      }
    });
  }, []);

  const generarEstadisticas = (historico: ScoreEntry[]) => {
    if (historico.length === 0) return null;
    const promedio = (historico.reduce((acc, curr) => acc + curr.score, 0) / historico.length).toFixed(1);
    
    let tendencia = "Vulnerable";
    let clase = "vulnerable";
    if (parseFloat(promedio) >= 8) { tendencia = "Alta Resiliencia"; clase = "alta-resiliencia"; }
    else if (parseFloat(promedio) >= 5) { tendencia = "En Formación"; clase = "en-formacion"; }

    return { promedio, tendencia, clase, total: historico.length };
  };

  const stats = generarEstadisticas(ranking);

  return (
    <div className="scoreboard-container fade-in">
      <div className="scoreboard-header">
        <Trophy color="#facc15" size={40} />
        <h1>Dashboard de Inteligencia Colectiva</h1>
      </div>

      {stats && (
        <div className="analisis-estadistico-grid">
          <div className="stat-card">
            <div className="stat-icon-label"><BarChart3 size={16} color="#3b82f6" /> <span>Promedio Global</span></div>
            <span className="stat-value">{stats.promedio} / 10</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon-label"><Activity size={16} color="#10b981" /> <span>Resiliencia</span></div>
            <span className={`stat-tag ${stats.clase}`}>{stats.tendencia}</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon-label"><ShieldAlert size={16} color="#ef4444" /> <span>Escenario Crítico</span></div>
            <span className="stat-value" style={{ fontSize: '0.9rem', color: '#ffaa00' }}>{escenarioCritico}</span>
          </div>
        </div>
      )}

      <div className="table-responsive">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Rango</th>
              <th>Especialista</th>
              <th>Score</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {ranking.slice(0, 10).map((entry, index) => (
              <tr key={index} className={index === 0 ? 'top-player' : ''}>
                <td>{index + 1}º</td>
                <td className="player-cell"><User size={14} /> {entry.alias}</td>
                <td className="score-cell">{entry.score}</td>
                <td style={{fontSize: '0.8rem'}}>{entry.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};