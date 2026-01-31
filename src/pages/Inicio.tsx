import './css/Inicio.css';

export const Inicio = () => {
  return (
    <div className="inicio-container fade-in">
      <div className="inicio-layout">
        
        <section className="sobre-mi-section">
          <h1 className="titulo-principal">
            Sobre <span className="highlight">Mí</span>
          </h1>
          
          <div className="texto-presentacion">
            <p>
              Me llamo <strong>Estefano Alessandro Rodríguez Morin</strong> tengo 22 años y actualmente estoy cursando la 
              materia de Seguridad Informática. Mis hobbies son el futbol, los videojuegos, escuchar música y tocar la batería.
              Soy un apasionado por el desarrollo web y de aplicaciones, y por ello, sé que la seguridad informática es 
              primordial para brindar garantía sobre la seguridad de datos.
            </p>
          </div>

          <h2>Sobre esta web</h2>

            <div className="Texto de información">
                <p>
                    Este portafolio digital tiene como propósito documentar todo el progreso de las actividades relacionadas con la materia 
                    de ciberseguridad <strong>(Curso de Núcleo Optativo V)</strong>. A lo largo de el semestre recabaremos información sobre
                    hacking ético, análisis de vulnerabilidades, investigaciones sobre casos ocurridos en la vida real, entre otras actividades 
                    que serán decretadas por el profesor de la materia.
                </p>
            </div>
        </section>

        <aside className="info-sidebar">
          <h2 className="sidebar-titulo">Universidad Politécnica de San Luis Potosí</h2>
          
          <div className="info-lista">
            <div className="info-item">
              <span className="info-label">Curso de Núcleo Optativo 5:</span>
              <span className="info-valor">Seguridad Informática</span>
            </div>
            <div className="info-item">
              <span className="info-label">Semestre</span>
              <span className="info-valor">Primavera 2026</span>
            </div>
            <div className="info-item">
              <span className="info-label">Tecnologías utilizadas</span>
              <span className="info-valor-italic">React + TypeScript + Vite</span>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span className="status-text">Servidor Activo / Seguro</span>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};