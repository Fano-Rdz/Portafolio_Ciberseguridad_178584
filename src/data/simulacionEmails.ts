export interface EmailEscenario {
  id: number;
  remitente: string;
  email_remitente: string;
  asunto: string;
  fecha: string;
  snippet: string;
  cuerpo_html: string;
  esPhishing: boolean;
  retroalimentacion: string;
  vector: string;
}


export const emailsSimulados: EmailEscenario[] = [
  {
    id: 1,
    remitente: "Seguridad Microsoft",
    email_remitente: "alerts@microsoft-security.net",
    asunto: "ACCIÓN REQUERIDA: Intento de acceso bloqueado",
    fecha: "08:15 AM",
    snippet: "Alguien intentó acceder a tu cuenta desde Moscú, RU...",
    vector: "MFA / Subdominios",
    cuerpo_html: `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; color: #333; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden; max-width: 500px;">
        <div style="background: #0078d4; padding: 15px; color: white; font-weight: bold;">Microsoft Account Security</div>
        <div style="padding: 20px;">
          <h2 style="color: #d83b01; margin-top: 0;">¿Fuiste tú?</h2>
          <p>Detectamos un inicio de sesión inusual en tu cuenta de Microsoft desde <strong>Moscú, Rusia (IP: 95.161.226.242)</strong>.</p>
          <p>Si no fuiste tú, por favor deniega el acceso de inmediato para proteger tu información:</p>
          <div style="text-align: center; margin: 30px 0;">
            <button style="background: #0078d4; color: white; padding: 12px 25px; border: none; font-weight: bold; cursor: pointer; border-radius: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">DENEGAR ACCESO</button>
          </div>
          <p style="font-size: 12px; color: #666; border-top: 1px solid #eee; pt-15px;">Este es un aviso automático de seguridad.</p>
        </div>
      </div>`,
    esPhishing: true,
    retroalimentacion: "El dominio 'microsoft-security.net' es fraudulento. Los ataques de MFA fatigue buscan que el usuario actúe por miedo."
  },
  {
    id: 2,
    remitente: "Nóminas Corporativas",
    email_remitente: "rrhh@portal-empleados.com",
    asunto: "URGENTE: Error en el cálculo de tu quincena",
    fecha: "09:30 AM",
    snippet: "Revisa el ajuste salarial adjunto para la próxima fecha...",
    vector: "Adjuntos / Urgencia",
    cuerpo_html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #444;">
        <p>Estimado colaborador,</p>
        <p>Se ha detectado una discrepancia en el cálculo de sus percepciones correspondientes a la segunda quincena del mes. Hemos aplicado un ajuste a su favor que será depositado el día de hoy.</p>
        <p><strong>Es indispensable</strong> que revise el desglose adjunto y confirme que los datos bancarios sean correctos antes de las 13:00 hrs.</p>
        <div style="background: #f8f9fa; border: 2px dashed #dee2e6; padding: 20px; text-align: center; border-radius: 10px; margin: 20px 0;">
          <div style="font-size: 40px;">📄</div>
          <div style="font-weight: bold; color: #212529;">Ajuste_Salarial_Final_2026.pdf.exe</div>
          <div style="font-size: 12px; color: #6c757d;">Tipo: Documento PDF (Comprimido) | Tamaño: 1.42 MB</div>
          <button style="margin-top: 10px; background: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Descargar y Revisar</button>
        </div>
        <p style="color: #dc3545; font-weight: bold;">⚠️ Si no se recibe confirmación, el pago se retendrá hasta el próximo periodo.</p>
      </div>`,
    esPhishing: true,
    retroalimentacion: "¡Cuidado! El archivo tiene doble extensión (.pdf.exe). Es un ejecutable diseñado para instalar malware."
  },
  {
    id: 3,
    remitente: "Soporte TI Interno",
    email_remitente: "soporte@empresa.com",
    asunto: "Mantenimiento de Servidores de Correo",
    fecha: "10:00 AM",
    snippet: "Aviso informativo sobre la ventana de mantenimiento...",
    vector: "Legítimo",
    cuerpo_html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 20px;">
        <h3 style="color: #2980b9;">Aviso de Mantenimiento Programado</h3>
        <p>Hola equipo,</p>
        <p>Les informamos que realizaremos una actualización en nuestros clústeres de Exchange para mejorar la estabilidad del servicio.</p>
        <table style="width: 100%; background: #ecf0f1; border-radius: 5px; margin: 15px 0;">
          <tr><td style="padding: 10px;"><strong>Inicio:</strong> Sábado 21 de Marzo, 02:00 AM</td></tr>
          <tr><td style="padding: 10px;"><strong>Fin:</strong> Sábado 21 de Marzo, 04:00 AM</td></tr>
        </table>
        <p>Durante este periodo el acceso vía Webmail y Outlook móvil podría presentar intermitencias. <strong>No es necesario realizar ninguna acción.</strong></p>
        <p>Atentamente,<br/><strong>Departamento de IT Interno</strong></p>
      </div>`,
    esPhishing: false,
    retroalimentacion: "Este es un correo legítimo. El remitente es interno, no pide datos y no contiene enlaces sospechosos."
  },
  {
    id: 4,
    remitente: "CEO Office",
    email_remitente: "director.general@outlook-office.com",
    asunto: "Solicitud confidencial - Transferencia",
    fecha: "11:20 AM",
    snippet: "Necesito que realices un pago urgente a un proveedor...",
    vector: "Whaling / Urgencia",
    cuerpo_html: `
      <div style="font-family: 'Courier New', Courier, monospace; color: #000; padding: 10px;">
        <p>Estefano,</p>
        <p>Te escribo desde mi cel, estoy entrando a una junta de consejo y surgió un tema crítico con un proveedor nuevo. Necesito que liberes una transferencia electrónica por <strong>$50,000.00 MXN</strong> como anticipo para asegurar un contrato.</p>
        <p>Los datos de la cuenta están en el portal, avísame en cuanto quede el comprobante para yo reenviarlo.</p>
        <p><strong>Por favor, maneja esto con total discreción, es un tema estratégico.</strong></p>
        <p>Enviado desde mi iPhone</p>
      </div>`,
    esPhishing: true,
    retroalimentacion: "Este es un ataque de 'Whaling' o fraude del CEO. Utiliza la autoridad y la urgencia para saltarse protocolos de seguridad."
  },
  {
    id: 5,
    remitente: "Notificaciones LinkedIn",
    email_remitente: "messages-noreply@lnkedin.com",
    asunto: "Tienes 3 nuevas solicitudes de conexión pendientes",
    fecha: "01:20 PM",
    snippet: "Varios reclutadores de tech han visto tu perfil...",
    vector: "Typosquatting / Ingeniería Social",
    cuerpo_html: `
      <div style="background-color: #f3f2ef; padding: 30px; font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="background: white; border-radius: 8px; max-width: 450px; margin: 0 auto; overflow: hidden; border: 1px solid #ddd;">
          <div style="padding: 20px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" width="80" style="margin-bottom: 20px;" />
            <h3 style="margin: 0; color: #000;">Estefano, amplía tu red profesional</h3>
            <p style="color: #666; font-size: 14px;">3 reclutadores de <strong>Empresas Tech Globales</strong> quieren conectar contigo.</p>
            <div style="margin: 20px 0; border-top: 1px solid #eee; padding-top: 15px;">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="background: #ccc; width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;"></div>
                <div style="font-size: 13px;"><strong>Reclutador Senior</strong> - Amazon Web Services</div>
              </div>
            </div>
            <a href="#" style="display: block; background: #0a66c2; color: white; text-align: center; padding: 10px; border-radius: 20px; text-decoration: none; font-weight: bold;">Ver todas las invitaciones</a>
          </div>
          <div style="background: #f9f9f9; padding: 15px; font-size: 11px; color: #999; text-align: center;">
            LinkedIn Corporation, 1000 W Maude Ave, Sunnyvale, CA 94085
          </div>
        </div>
      </div>`,
    esPhishing: true,
    retroalimentacion: "¡Atención al detalle! El dominio es 'lnkedin.com' (falta la letra 'i'). Es un caso clásico de typosquatting para robar credenciales profesionales."
  },
  {
    id: 6,
    remitente: "Netflix Support",
    email_remitente: "info@mailer.netflix.com",
    asunto: "Tu suscripción ha sido cancelada",
    fecha: "03:45 PM",
    snippet: "No pudimos procesar el pago de tu última factura...",
    vector: "Legítimo (Control)",
    cuerpo_html: `
      <div style="background: #000; padding: 40px; font-family: Helvetica, Arial, sans-serif; text-align: center;">
        <img src="https://assets.nflxext.com/us/email/logo/netflix_logo_v2.png" width="120" style="margin-bottom: 30px;" />
        <div style="background: white; padding: 40px; border-radius: 4px; text-align: left;">
          <h1 style="font-size: 24px; color: #333;">Actualiza tu método de pago</h1>
          <p>Lamentamos informarte que hemos tenido problemas con tu suscripción actual debido a un error en el cargo automático a tu tarjeta bancaria.</p>
          <p>Para evitar la interrupción de tu servicio y seguir disfrutando de tus series favoritas, por favor valida tu información:</p>
          <a href="https://www.netflix.com/YourAccount" style="display: inline-block; background: #E50914; color: white; padding: 15px 30px; text-decoration: none; border-radius: 2px; font-weight: bold; margin: 20px 0;">REVISAR MI CUENTA</a>
          <p style="font-size: 12px; color: #999;">Si necesitas ayuda, visita el Centro de Ayuda o contáctanos.</p>
        </div>
      </div>`,
    esPhishing: false,
    retroalimentacion: "Este correo es legítimo. El dominio 'netflix.com' es correcto y el enlace sugerido apunta directamente al dominio oficial sin redirecciones extrañas."
  },
  {
    id: 7,
    remitente: "Servicio de Paquetería FedEx",
    email_remitente: "delivery@fedex-tracking-portal.net",
    asunto: "Paquete retenido: Error en la dirección de entrega",
    fecha: "05:10 PM",
    snippet: "Tu envío #MX-99281 requiere una confirmación de datos...",
    vector: "Smishing/Phishing de Logística",
    cuerpo_html: `
      <div style="font-family: sans-serif; border: 1px solid #ddd; max-width: 500px;">
        <div style="background: #4D148C; padding: 10px;">
          <span style="color: white; font-weight: bold; font-size: 24px;">FedEx</span>
        </div>
        <div style="padding: 20px;">
          <h3 style="color: #4D148C;">Estado del Envío: Pendiente de Acción</h3>
          <p>Su paquete con número de guía <strong>MX-99281-RT</strong> ha sido retenido en nuestro centro de distribución regional.</p>
          <p><strong>Motivo:</strong> Dirección de entrega incompleta o errónea.</p>
          <p>Se requiere un pago por cargos de almacenamiento y re-etiquetado por la cantidad de <strong>$15.00 MXN</strong> para liberar el paquete.</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="#" style="background: #ff6200; color: white; padding: 12px 20px; text-decoration: none; font-weight: bold; border-radius: 4px;">PAGAR RE-ENVÍO</a>
          </div>
          <p style="color: #666; font-size: 12px;">* Si no se liquida el cargo en menos de 24 horas, el paquete será destruido o devuelto.</p>
        </div>
      </div>`,
    esPhishing: true,
    retroalimentacion: "Este es un fraude muy común. Las empresas de paquetería no usan dominios '.net' genéricos ni solicitan pagos pequeños de último momento mediante enlaces externos."
  },
  {
    id: 8,
    remitente: "Departamento de IT",
    email_remitente: "admin@tu-universidad.edu.mx",
    asunto: "Migración obligatoria de correo institucional",
    fecha: "Ayer",
    snippet: "Todos los estudiantes deben migrar a la nueva plataforma...",
    vector: "Ataque Dirigido (Spear Phishing)",
    cuerpo_html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="background: white; border-top: 5px solid #003366; padding: 25px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h2 style="color: #003366; margin-top: 0;">Aviso de Migración Digital 2026</h2>
          <p>Estimado estudiante,</p>
          <p>Como parte de la actualización de nuestra infraestructura tecnológica, todos los correos institucionales serán migrados a la nueva plataforma <strong>Cloud-EDU</strong>.</p>
          <p>Es <strong>obligatorio</strong> realizar el respaldo y la validación de sus credenciales para evitar la pérdida permanente de sus correos y tareas entregadas.</p>
          <div style="background: #fff3cd; color: #856404; padding: 15px; border: 1px solid #ffeeba; margin: 20px 0;">
            Fecha límite: <strong>Domingo 22 de marzo a las 23:59 hrs.</strong>
          </div>
          <p style="text-align: center;">
            <a href="http://login-portal-estudiantes.xyz" style="color: #003366; font-weight: bold; text-decoration: underline;">Acceder al Portal de Migración Segura</a>
          </p>
        </div>
      </div>`,
    esPhishing: true,
    retroalimentacion: "Aunque el remitente parece real, el enlace usa protocolo HTTP (no seguro) y un dominio '.xyz', lo cual es una señal clara de un sitio de cosecha de credenciales."
  },
  {
    id: 9,
    remitente: "Amazon.com.mx",
    email_remitente: "confirmacion@amazon.com.mx",
    asunto: "Confirmación de tu pedido #702-1123445",
    fecha: "Ayer",
    snippet: "Gracias por tu compra. Tu pedido está en camino...",
    vector: "Legítimo (Control)",
    cuerpo_html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <div style="background: #232f3e; padding: 15px; text-align: left;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" width="100" style="filter: brightness(0) invert(1);" />
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #c45500;">Confirmación de envío</h2>
          <p>Hola <strong>Estefano</strong>, tu pedido ha sido enviado y está en camino.</p>
          <div style="border: 1px solid #eee; padding: 15px; border-radius: 4px;">
            <p style="margin-top: 0;"><strong>Detalles del envío:</strong></p>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td><strong>Pedido:</strong> #702-1123445</td>
                <td style="text-align: right;"><strong>Total:</strong> $4,500.00 MXN</td>
              </tr>
            </table>
          </div>
          <p>Puedes rastrear tu paquete en la sección 'Mis pedidos' desde tu cuenta de Amazon.</p>
          <p style="font-size: 12px; color: #888;">Amazon.com.mx, Inc. San Luis Potosí, SLP.</p>
        </div>
      </div>`,
    esPhishing: false,
    retroalimentacion: "Este es un correo legítimo. No incluye enlaces sospechosos, el dominio es el oficial y te invita a revisar la información en la aplicación oficial del servicio."
  },
  {
    id: 10,
    remitente: "Google Workspace Alerta",
    email_remitente: "no-reply@accounts.google.com.co",
    asunto: "Alerta de seguridad: Se vinculó un nuevo dispositivo",
    fecha: "Hace 2 días",
    snippet: "Un dispositivo Linux se vinculó a tu cuenta de Google...",
    vector: "Browser-in-the-Browser",
    cuerpo_html: `
      <div style="font-family: Roboto, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 500px; margin: 20px auto; overflow: hidden;">
        <div style="padding: 30px;">
          <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="75" />
          <h1 style="font-size: 20px; font-weight: 500; margin-top: 25px;">¿Fuiste tú quien inició sesión?</h1>
          <p style="color: #5f6368;">Se acaba de iniciar sesión en tu cuenta de Google <strong>estefano.rodriguez@gmail.com</strong> desde un dispositivo nuevo.</p>
          <div style="background: #f8f9fa; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <table style="width: 100%; font-size: 14px; color: #3c4043;">
              <tr><td>💻 <strong>Dispositivo:</strong></td><td>Kali Linux / Chrome Browser</td></tr>
              <tr><td>📍 <strong>Ubicación:</strong></td><td>San Luis Potosí, SLP, México</td></tr>
              <tr><td>🕒 <strong>Hora:</strong></td><td>Hace 10 minutos</td></tr>
            </table>
          </div>
          <p>Si no fuiste tú, haz clic en el siguiente botón para asegurar tu cuenta:</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="background: #1a73e8; color: white; padding: 10px 24px; text-decoration: none; border-radius: 4px; font-weight: 500; display: inline-block;">Revisar Actividad</a>
          </div>
        </div>
      </div>`,
    esPhishing: true,
    retroalimentacion: "¡Ataque avanzado! El atacante usa un dominio regional (.com.co) para confundir. Además, el enlace abriría una ventana emergente falsa que imita el login de Google para robar tu contraseña."
  }
];