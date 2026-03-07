import { useState } from 'react';
import { Shield, BarChart3, Users, CheckCircle, Lock, AlertTriangle, ExternalLink, ChevronRight, Download } from 'lucide-react';
import './css/PR02.css';

export const PR02 = () => {
  const [tabActiva, setTabActiva] = useState(1);

  const datosTecnicos = [
    { 
      nombre: "Hoxhunt", 
      capacidad: "IA adaptativa que personaliza el reto; integración con botones de reporte en el cliente.", 
      metricas: "Tasa de reporte vs. clics; Human Risk Score basado en comportamiento.", 
      entrenamiento: "Gamificación: los usuarios ganan estrellas y suben de nivel.",
      etico: "No punitivo; enfocado en celebrar el reporte proactivo." 
    },
    { 
      nombre: "KnowBe4", 
      capacidad: "Biblioteca de plantillas masiva; simulaciones de Smishing (SMS) y Vishing (Voz).", 
      metricas: "Phish-prone % (Probabilidad de caer); Benchmarking industrial.", 
      entrenamiento: "Contenido multimedia diverso y series tipo Netflix.",
      etico: "Transparencia; visibilidad total de progreso y mejoras." 
    },
    { 
      nombre: "Proofpoint", 
      capacidad: "Integración con Inteligencia de Amenazas (TAP) real para ataques actuales.", 
      metricas: "Resiliencia de los Very Attacked People (VAPs); tiempo de respuesta.", 
      entrenamiento: "Entrenamiento dirigido basado en los riesgos reales de la red.",
      etico: "Privacidad por diseño; protege la identidad del usuario." 
    },
    { 
      nombre: "Cofense", 
      capacidad: "Acondicionamiento del comportamiento y triaje de correos reportados.", 
      metricas: "Tasa de resiliencia y efectividad del centro de respuesta.", 
      entrenamiento: "Feedback inmediato en el error (Teachable Moments).",
      etico: "Empoderamiento: el empleado es defensa activa." 
    },
    { 
      nombre: "SANS Security", 
      capacidad: "Contenido técnico de alta fidelidad validado por expertos (MGT521).", 
      metricas: "Modelo de Madurez (Security Awareness Maturity Model).", 
      entrenamiento: "Enfoque en el cambio de cultura organizacional a largo plazo.",
      etico: "Rigor académico; comprender el 'por qué' del ataque." 
    },
    { 
      nombre: "Infosec IQ", 
      capacidad: "Simulaciones personalizadas por rol y pruebas de cumplimiento.", 
      metricas: "Reducción de riesgo por departamento y normativas.", 
      entrenamiento: "Cursos cortos vinculados a la detección de errores específicos.",
      etico: "Responsabilidad compartida; ética en el manejo de datos." 
    },
    { 
      nombre: "NINJIO", 
      capacidad: "Narrativa basada en micro-episodios inspirados en brechas reales.", 
      metricas: "Retención de conocimiento y compromiso (Engagement).", 
      entrenamiento: "Storytelling: utiliza la emoción para generar memoria.",
      etico: "Sensibilidad; impacto en la vida personal y profesional." 
    }
  ];

  return (
    <div className="pr02-container">
      <header className="pr02-header">
        <div className="header-badge">PROYECTO 02</div>
        <h1 className="titulo-principal">El eslabón más débil: diseño ético de una campaña de ingeniería social</h1>
        <p className="subtitulo">Gestión del Riesgo Humano y Simulaciones de Phishing • Seguridad Informática II</p>
      </header>

      <nav className="pr02-tabs">
        <button onClick={() => setTabActiva(1)} className={tabActiva === 1 ? 'active' : ''}>
          <Shield size={18} /> Investigación Técnica
        </button>
        <button onClick={() => setTabActiva(2)} className={tabActiva === 2 ? 'active' : ''}>
          <BarChart3 size={18} /> Simulación e Interacción
        </button>
      </nav>

      <main className="pr02-main-content">
        {tabActiva === 1 && (
          <div className="fade-in">
            {/* SECCIÓN 1: FUNDAMENTACIÓN */}
            <section className="info-card">
              <div className="section-header">
                <Lock className="section-icon" />
                <h2>1. Marco Teórico y Fundamentación</h2>
              </div>
              <div className="text-content">
                <p>
                  El phishing es un tipo de ataque de ingeniería social donde un atacante intenta engañar a un usuario para obtener credenciales mediante correos o páginas falsas. Las simulaciones educativas permiten medir el nivel de reconocimiento de amenazas y fortalecer la cultura de seguridad.
                </p>
                <div className="metrics-grid">
                  <div className="metric-box">
                    <div className="metric-header">
                      <span>Click Rate</span>
                      <AlertTriangle size={14} />
                    </div>
                    <p>Porcentaje de usuarios que caen en el enlace simulado.</p>
                  </div>
                  <div className="metric-box">
                    <div className="metric-header">
                      <span>Report Rate</span>
                      <CheckCircle size={14} />
                    </div>
                    <p>Usuarios que detectan y reportan proactivamente.</p>
                  </div>
                  <div className="metric-box">
                    <div className="metric-header">
                      <span>Risk Score</span>
                      <Shield size={14} />
                    </div>
                    <p>Índice de riesgo basado en el comportamiento histórico.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: TABLA COMPARATIVA EXPANSA */}
            <section className="info-card">
              <div className="section-header">
                <BarChart3 className="section-icon" />
                <h2>2. Análisis Comparativo de Plataformas</h2>
              </div>
              <div className="table-wrapper">
                <table className="tabla-tecnica">
                  <thead>
                    <tr>
                      <th>Plataforma</th>
                      <th>Capacidades Técnicas</th>
                      <th>Métricas Clave</th>
                      <th>Enfoque Ético</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosTecnicos.map((plat, idx) => (
                      <tr key={idx}>
                        <td className="col-name"><strong>{plat.nombre}</strong></td>
                        <td>{plat.capacidad}</td>
                        <td className="col-metrics">{plat.metricas}</td>
                        <td className="col-ethic"><em>{plat.etico}</em></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECCIÓN 3: ÉTICA Y CONCLUSIONES */}
            <section className="info-card ethical-section">
              <div className="section-header">
                <Shield className="section-icon" />
                <h2>3. Enfoque Ético y Conclusiones</h2>
              </div>
              <div className="ethical-grid">
                <div className="ethical-list">
                  <h3>Principios de Implementación</h3>
                  <ul>
                    <li><ChevronRight size={16} /> <strong>Transparencia:</strong> Sobre el alcance del programa.</li>
                    <li><ChevronRight size={16} /> <strong>Fines Educativos:</strong> Sin políticas punitivas o castigos.</li>
                    <li><ChevronRight size={16} /> <strong>Protección:</strong> Anonimización de métricas y hallazgos.</li>
                  </ul>
                </div>
                <div className="conclusion-text">
                  <h3>Resumen del Análisis</h3>
                  <p>
                    Las plataformas se posicionan como herramientas para mitigar el riesgo humano. La elección idónea recae en la madurez técnica, el tamaño de la cultura interna y los objetivos específicos del área formativa.
                  </p>
                  <button className="download-btn">
                    <a 
                                href="./Proyecto/PR02-178584.pdf" 
                                download="PR02-178584.pdf"
                                className="download-button"
                              >
                                <Download size={18} />
                                Importar PDF
                              </a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {tabActiva === 2 && (
          <div className="fade-in">
            <div className="empty-state">
              <Users size={48} className="empty-icon" />
              <h2>Diseño de Simulación Interactiva (Quiz)</h2>
              <span className="status-badge">PRÓXIMAMENTE</span>
              <p>
                Esta sección integrará un Phishing Quiz con 10 escenarios realistas, incorporando retroalimentación formativa y un sistema de puntuación global.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};