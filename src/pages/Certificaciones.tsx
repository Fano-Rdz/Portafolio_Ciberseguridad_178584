import { useState } from 'react';
import { Download } from 'lucide-react';
import './css/Parcial1.css';
import './css/Certificaciones.css'; // Estilos específicos para la reflexión, PDF y Badge

interface CertiData {
  id: number;
  nombreTab: string;
  badgeTag: string;
  tituloLargo: string;
  subtitulo: string;
  pdfUrl: string;
  pdfName: string;
  badgeImgUrl: string;
  badgeVerificationUrl: string; // Nueva propiedad para el enlace externo de validación
  reflexion: string;
}

export const Certificaciones = () => {
  const [tabActiva, setTabActiva] = useState<number>(1);

  // Datos estructurados de las 7 certificaciones requeridas con tu matrícula 178584
  const certificaciones: CertiData[] = [
    {
      id: 1,
      nombreTab: "1. Intro a Ciberseguridad",
      badgeTag: "Cisco NetAcad - Introducción a la Ciberseguridad",
      tituloLargo: "Introducción a la Ciberseguridad",
      subtitulo: "Fundamentos globales de seguridad digital, amenazas comunes y protección de datos.",
      pdfUrl: "./Certificaciones/cert01.pdf",
      pdfName: "Certificado_Intro_Ciberseguridad_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert01.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/95a222b5-9b2b-40fc-83dd-2cf8d28f3164", // Reemplazar con tus enlaces reales de verificación
      reflexion: "Este curso es un pilar extraordinario que todo ingeniero de software debería cursar; la claridad y profundidad de Cisco para introducir vectores de ataque globales es impecable. Como desarrollador Full-Stack, comprender la anatomía de las amenazas modernas ha transformado radicalmente mi visión al escribir código. El módulo me permitió asimilar que la seguridad no es una capa periférica que se añade al final, sino un principio de diseño fundamental desde la concepción de la base de datos hasta el despliegue en producción, impactando directamente en cómo protejo las sesiones de usuario y mitigo riesgos lógicos en el ecosistema de mis aplicaciones."
    },
    {
      id: 2,
      nombreTab: "2. Conceptos de Redes",
      badgeTag: "Cisco NetAcad - Networking Basics",
      tituloLargo: "Conceptos Básicos de Redes",
      subtitulo: "Arquitectura de redes, modelos de comunicación (OSI/TCP-IP) y encapsulamiento.",
      pdfUrl: "./Certificaciones/cert02.pdf",
      pdfName: "Certificado_Conceptos_Redes_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert02.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/e6a1b978-e089-4c75-aff4-74c33691cc45",
      reflexion: "La calidad didáctica de este módulo de Cisco superó por completo mis expectativas, desglosando arquitecturas complejas con una fluidez asombrosa. Para mi rol profesional en el desarrollo Full-Stack, dominar el encapsulamiento de datos, los modelos OSI y TCP/IP, y el enrutamiento es una competencia crítica. Esta base técnica me permite optimizar la comunicación entre el backend y el cliente, entender con precisión cómo viajan los paquetes a través de protocolos HTTP/HTTPS o WebSockets, y diagnosticar problemas de latencia o conectividad en entornos de servidores web y API REST con una solidez técnica impecable."
    },
    {
      id: 3,
      nombreTab: "3. Dispositivos y Config.",
      badgeTag: "Cisco NetAcad - Network Devices and Initial Configuration",
      tituloLargo: "Dispositivos de Red y Configuración Inicial",
      subtitulo: "Configuración básica del sistema operativo Cisco IOS, conmutadores y enrutadores.",
      pdfUrl: "./Certificaciones/cert03.pdf",
      pdfName: "Certificado_Configuracion_Inicial_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert03.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/1a69e74a-0e80-4ad0-924f-18147a6d0d85",
      reflexion: "Cisco demuestra por qué es el líder indiscutible en infraestructura a través de este curso, offering prácticas de simulación interactivas que aportan un valor técnico incalculable. Entender la configuración interna de switches y routers, así como el funcionamiento del sistema operativo Cisco IOS, expande drásticamente mi panorama como desarrollador Full-Stack. Esta inmersión me capacita para comprender la infraestructura base sobre la cual se montan y exponen mis servicios web, facilitando una interacción madura y estratégica con equipos de DevOps y redes al momento de aprovisionar entornos de desarrollo, staging o producción."
    },
    {
      id: 4,
      nombreTab: "4. Seguridad Terminales",
      badgeTag: "Cisco NetAcad - Endpoint Security",
      tituloLargo: "Seguridad en Terminales",
      subtitulo: "Protección de hosts, sistemas operativos distribuidos, control de acceso y endurecimiento.",
      pdfUrl: "./Certificaciones/cert04.pdf",
      pdfName: "Certificado_Seguridad_Terminales_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert04.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/e1bb15ff-38a8-4707-94df-8f6b36d91793",
      reflexion: "Este curso es una verdadera obra de arte en cuanto a la protección y endurecimiento de sistemas operativos y hosts distribuidos; las metodologías explicadas por Cisco son de un nivel técnico excepcional. En el desarrollo Full-Stack, donde frecuentemente interactúo con servidores Linux y contenedores para el despliegue del backend, las técnicas de Endurecimiento (Hardening) y control de acceso aprendidas aquí son vitales. Ahora cuento con las competencias críticas para configurar directivas seguras, restringir privilegios innecesarios y proteger el entorno donde residen mis microservicios contra intrusiones o escaladas de privilegios."
    },
    {
      id: 5,
      nombreTab: "5. Gestión de Amenazas",
      badgeTag: "Cisco NetAcad - Cyber Threat Management",
      tituloLargo: "Administración de Amenazas Cibernéticas",
      subtitulo: "Gobernanza de incidentes, análisis de vulnerabilidades, SIEM y marcos operativos de defensa.",
      pdfUrl: "./Certificaciones/cert05.pdf",
      pdfName: "Certificado_Gestion_Amenazas_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert05.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/a35bab9c-7f63-45c6-b197-a6bb5a248864",
      reflexion: "Un módulo fascinante y sumamente robusto; la forma en que Cisco aborda la gobernanza de incidentes y los marcos analíticos de defensa es simplemente brillante. Para mi perfil enfocado en el desarrollo Full-Stack, los conceptos de monitoreo y análisis de vulnerabilidades son sumamente enriquecedores. Integrar esta perspectiva me permite implementar estrategias avanzadas de Logging y auditoría dentro de mis aplicaciones backend, facilitando la detección temprana de comportamientos anómalos o intentos de explotación lógicos y asegurando que mis desarrollos se alineen con los estándares de respuesta a incidentes de la industria."
    },
    {
      id: 6,
      nombreTab: "6. Analista Junior",
      badgeTag: "Cisco NetAcad - Junior Cybersecurity Analyst Career Path",
      tituloLargo: "Carrera Profesional de Analista Junior en Ciberseguridad",
      subtitulo: "Integración de competencias analíticas para Centros de Operaciones de Seguridad (SOC).",
      pdfUrl: "./Certificaciones/cert06.pdf",
      pdfName: "Certificado_Analista_Junior_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert06.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/e68be964-5aa5-4520-9425-0a6e0461e64f",
      reflexion: "La ruta de aprendizaje trazada por Cisco en este trayecto profesional es impecable, logrando conectar de manera magistral la teoría analítica con los flujos de trabajo operativos de un SOC. Como desarrollador Full-Stack, este curso expandió exponencialmente mi visión sobre la trazabilidad de la información. Comprender cómo los analistas de seguridad correlacionan alertas y logs de aplicaciones me ha convertido en un mejor ingeniero de software; ahora estructuro logs de telemetría mucho más limpios, sigo de cerca el ciclo de vida del dato y diseño flujos lógicos que facilitan la auditoría interna ante cualquier anomalía del sistema."
    },
    {
      id: 7,
      nombreTab: "7. Hacker Ético",
      badgeTag: "Cisco NetAcad - Ethical Hacker",
      tituloLargo: "Hacker Ético",
      subtitulo: "Fases de la intrusión (reconocimiento, escaneo, explotación) bajo metodologías controladas.",
      pdfUrl: "./Certificaciones/cert07.pdf",
      pdfName: "Certificado_Hacker_Etico_178584.pdf",
      badgeImgUrl: "./Certificaciones/cert07.png",
      badgeVerificationUrl: "https://www.credly.com/earner/earned/badge/57dbcc3c-163c-49ee-96bc-a372d9efe46a",
      reflexion: "El curso de Hacker Ético es una experiencia cumbre, con laboratorios de vanguardia y un enfoque metodológico de Cisco que roza la perfección en la simulación de intrusiones. Para un desarrollador Full-Stack, adoptar la mentalidad de un atacante es la herramienta de defensa definitiva. El análisis profundo de las fases de reconocimiento, escaneo y explotación me capacita directamente para blindar mis API REST, erradicar fallas críticas de inyección de código y validar los mecanismos de autenticación y autorización bajo el estándar de OWASP, garantizando aplicaciones web altamente resilientes frente a ciberataques reales."
    },
  ];

  const datosActuales = certificaciones.find(c => c.id === tabActiva) || certificaciones[0];

  return (
    <div className="parcial-container">
      <header>
        <h1 className="titulo-parcial">PD05 - <span>Certificaciones</span></h1>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Reflexión profesional e integración de credenciales formales en Ciberseguridad.
        </p>
      </header>

      {/* Menú de pestañas dinámicas con Grid balanceado de 7 columnas */}
      <div className="tabs-wrapper">
        {certificaciones.map((cert) => (
          <button
            key={cert.id}
            onClick={() => setTabActiva(cert.id)}
            className={`tab-button ${tabActiva === cert.id ? 'active' : ''}`}
          >
            {cert.nombreTab}
          </button>
        ))}
      </div>

      {/* Tarjeta de Contenido Dinámica */}
      <div className="content-card">
        <div className="actividad-content">
          <header className="act-header">
            <div className="header-top">
              <span className="badge">{datosActuales.badgeTag}</span>
              <a 
                href={datosActuales.pdfUrl} 
                download={datosActuales.pdfName}
                className="download-button"
              >
                <Download size={18} />
                Descargar PDF
              </a>
            </div>
            <h2 className="text-3xl font-bold text-white mt-4">{datosActuales.tituloLargo}</h2>
            <p className="text-slate-400 mt-2">
              {datosActuales.subtitulo}
            </p>
          </header>

          <div className="certificacion-grid">
            
            {/* Sección de Reflexión */}
            <section className="reflexion-section">
              <h3>📝 Reflexión Profesional</h3>
              <p className="reflexion-text">
                {datosActuales.reflexion}
              </p>
            </section>

            {/* Renderizado de la Insignia Digital con Enlace de Verificación */}
            <div className="badge-card">
              <span className="badge-label">Badge Digital</span>
              <a 
                href={datosActuales.badgeVerificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Haz clic para verificar la credencial oficial"
                className="badge-image-container"
              >
                <img 
                  src={datosActuales.badgeImgUrl} 
                  alt={`Badge oficial de ${datosActuales.tituloLargo}`} 
                  className="badge-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/150x150/0f172a/cbd5e1?text=Cisco+Badge";
                  }}
                />
              </a>
            </div>

          </div>

          <footer className="report-footer">
            <p>Universidad Politécnica de San Luis Potosí - Ingeniería en Tecnologías de la Información</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Certificaciones;