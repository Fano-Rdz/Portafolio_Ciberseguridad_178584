import { Mail } from 'lucide-react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-global">
      <div className="footer-content">

        <div className="mision-container-mini">
          <p className="mision-texto-mini">
            "Proteger la integridad del activo más valioso: la información."
          </p>
        </div>

        <div className="contacto-mini">
          <button className="email-btn-mini" onClick={() => window.open('mailto:178584@upslp.edu.mx')}>
            <Mail size={16} />
            <span>Contacto</span>
          </button>
        </div>

      </div>
      <div className="footer-copyright">
        <p>© 2026 - Seguridad Informática</p>
      </div>
    </footer>
  );
};

export default Footer;