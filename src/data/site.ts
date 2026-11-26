// Datos del estudio, tomados del PRD del cliente (archivos/, 2026-10-25).
// Todo valor entre corchetes es un dato por confirmar: reemplácelo por la
// información real antes de publicar.

export const site = {
  name: 'Estudio Jurídico Mira & Montesdeoca',
  city: 'Ibarra, Imbabura, Ecuador',
  since: 2016,
  experience: '10 años de experiencia',
  // Número en formato internacional, sin "+" ni espacios.
  whatsapp: '593968064619',
  whatsappDisplay: '+593 96 806 4619',
  // La marca «vengo de la página web» permite contar los mensajes que llegan desde el sitio.
  whatsappMessage: 'Hola, vengo de su página web. Deseo consultarles un tema legal.',
  email: 'dealexx799@gmail.com',
  address: 'Calle Bolívar y Oviedo',
  addressNote: 'Edificio SAUD, segundo piso',
  hours: [{ days: 'Horario de atención', time: '[por confirmar]' }],
  mapQuery: 'Calle Bolívar y Oviedo, Ibarra, Ecuador',
  cantons: ['Ibarra', 'Antonio Ante', 'Otavalo', 'Cotacachi', 'Urcuquí'],
  // URL del webhook de n8n que guarda cada consulta en Google Sheets.
  // Se define en .env como PUBLIC_FORM_WEBHOOK (ver .env.example y el README).
  // Si queda vacío, el formulario arma el mensaje y lo abre en WhatsApp.
  formEndpoint: import.meta.env.PUBLIC_FORM_WEBHOOK ?? '',
};

export const partners = [
  {
    name: 'Alexander Mira Quelal',
    title: 'Socio',
    photo: '/fotos/socio-alexander.webp',
    degree: 'MSc. Derecho Constitucional',
    bio: 'Especialista en las áreas de Penal y Constitucional.',
  },
  {
    name: 'Melanie Montesdeoca Rodríguez',
    title: 'Socia',
    photo: '/fotos/socia-melanie.webp',
    degree: 'MSc. Derecho Constitucional con mención en Derecho Procesal',
    bio: 'Especialista en las áreas de Violencia de Género y Civil.',
  },
];

// Lo que diferencia al estudio, en el orden en que una misma persona acompaña el caso.
export const steps = [
  {
    title: 'Te escuchamos',
    text: 'La primera conversación la tienes con quien va a llevar tu caso. No con una recepción ni con un asistente.',
  },
  {
    title: 'Estudiamos tu caso completo',
    text: 'Analizamos tu situación y su contexto a fondo antes de proponerte una estrategia.',
  },
  {
    title: 'Te explicamos los caminos',
    text: 'Qué está en juego, qué opciones hay y cuál te conviene. Una decisión que no se entiende es una apuesta.',
  },
  {
    title: 'Te defendemos desde el primer día',
    text: 'La estrategia se construye desde el inicio, y la misma persona que estudió tu caso te representará en cada trámite y audiencia.',
  },
  {
    title: 'Reportamos oportunamente tu caso',
    text: 'Te contactamos para reportar los avances, para que sepas qué pasa con tu proceso.',
  },
];

export const values = [
  { title: 'Discreción absoluta', text: 'Lo que nos cuentas queda entre tú y tu abogado.' },
  { title: 'Transparencia', text: 'Te mostramos el panorama completo, con sus riesgos y fortalezas, para que tomes la mejor decisión.' },
  { title: 'Compromiso real', text: 'Asumimos tu caso como propio, trabajando con rigor desde el minuto cero.' },
];

// Situaciones en segunda persona (redacción del cliente, 2026-11): el visitante
// reconoce su problema y escribe con el mensaje ya armado.
export const situations = [
  'Enfrentas una investigación o un proceso penal',
  'Sufres violencia en tu entorno familiar y necesitas protección',
  'Tienes documentos pendientes de cobro',
  'Estuviste involucrado en un accidente de tránsito',
  'Deseas divorciarte de manera segura',
  'Te despidieron sin justificación o no te han pagado tu liquidación',
];

// Pendiente: el cliente atiende «todas las áreas del derecho» pero no envió la
// lista. Estas áreas son una propuesta para confirmar con los socios.
export const areas = [
  { name: 'Familia', items: 'Divorcios, pensión de alimentos, tenencia, visitas, unión de hecho' },
  { name: 'Herencias y patrimonio', items: 'Posesión efectiva, partición, testamentos, protección de bienes' },
  { name: 'Civil y contratos', items: 'Contratos, compraventa de inmuebles, deudas, arriendos' },
  { name: 'Penal', items: 'Denuncias, defensa, citaciones y notificaciones' },
  { name: 'Laboral', items: 'Despidos, liquidaciones, reclamos ante el empleador' },
  { name: 'Derecho Constitucional', items: 'Garantías jurisdiccionales, vulneración de derechos, acciones de protección y defensa constitucional' },
];

// Preguntas frecuentes tal como las dio el cliente. Las respuestas son
// borradores generales: los socios deben validarlas antes de publicar.
export const faqs = [
  {
    q: '¿Lo que cuento queda en reserva?',
    a: 'Sí. La discreción absoluta es uno de nuestros valores: lo que nos cuentas queda entre tú y tu abogado.',
  },
  {
    q: '¿Vale la pena demandar o mejor llego a un acuerdo?',
    a: 'Depende de lo que está en juego, de las pruebas que tengas y de lo que estés dispuesto a sostener en el tiempo. En la primera consulta revisamos tu situación y te explicamos con honestidad las ventajas y los riesgos de cada camino.',
  },
  {
    q: '¿Cuánto me va a costar y cuánto tiempo va a tomar?',
    a: 'Cada caso es distinto, por eso no publicamos precios. Los honorarios y los tiempos estimados los conversamos en la primera consulta, antes de que tomes cualquier decisión.',
  },
  {
    q: '¿Qué pasa si pierdo? ¿Qué riesgo tengo?',
    a: 'Te lo decimos claro desde el inicio, aunque no sea lo que quieres oír. Conocer los riesgos te permite decidir con información y no a ciegas.',
  },
  {
    q: 'Me llegó una notificación o citación, ¿qué debo hacer y qué plazo tengo?',
    a: 'No la ignores. Los plazos pueden ser cortos y dependen del tipo de proceso. Escríbenos cuanto antes con una foto del documento y te orientamos sobre los siguientes pasos.',
  },
  {
    q: '¿Puedo firmar esto o me compromete a algo?',
    a: 'Antes de firmar un contrato, un acuerdo o cualquier documento importante, conviene que un abogado lo revise. Te explicamos qué obligaciones asumes y qué conviene cambiar.',
  },
  {
    q: '¿Cómo protejo mis bienes, mi negocio o mi herencia?',
    a: 'Hay herramientas legales para ordenar y proteger tu patrimonio, y la mejor depende de tu situación familiar y económica. Lo analizamos contigo caso por caso.',
  },
  {
    q: '¿Qué necesito para este trámite y qué documentos debo llevar?',
    a: 'Cuéntanos qué trámite necesitas y te enviamos la lista de documentos antes de la cita, para que no pierdas viajes.',
  },
  {
    q: '¿Esto prescribe? ¿Todavía estoy a tiempo?',
    a: 'Muchas acciones legales tienen plazos para ejercerse, y varían según el caso. Por eso es importante consultar pronto: revisamos tu situación y te decimos si todavía estás a tiempo.',
  },
  {
    q: '¿Puedo resolverlo sin ir a juicio?',
    a: 'Muchas veces sí: por acuerdo entre las partes, mediación o trámites notariales. Cuando hay un camino sin juicio que te conviene, te lo proponemos.',
  },
  {
    q: '¿Qué pasa con mis hijos, la casa o el negocio mientras avanza el proceso?',
    a: 'Existen medidas que protegen a tus hijos y a tus bienes mientras se resuelve el caso. Te explicamos cuáles aplican a tu situación y cómo pedirlas.',
  },
];

// Testimonios entregados por el estudio (2026-11), con iniciales para cuidar la reserva.
export const testimonials = [
  {
    quote:
      'Tenía valores pendientes de cobro y no sabía qué alternativas legales usar para recuperarlos. Recibí asesoría sobre las vías de reclamación y el acompañamiento para gestionar el cobro de forma formal y responsable. Una atención clara y profesional.',
    name: 'P.J.A.M.',
    matter: 'Recuperación de cartera vencida',
    place: 'Ibarra',
  },
  {
    quote:
      'Después de un accidente de tránsito no sabía cómo proceder ni cuáles eran mis derechos. Recibí asesoría oportuna, me explicaron las implicaciones legales y me ayudaron a afrontar el procedimiento con mayor seguridad y tranquilidad.',
    name: 'J.C.Q.P.',
    matter: 'Accidente de tránsito',
    place: 'Antonio Ante',
  },
  {
    quote:
      'Atravesar un proceso penal fue muy difícil para mi familia. Desde el inicio recibimos una explicación honesta de nuestra situación y una defensa seria y comprometida. Siempre tuvimos información sobre el proceso y sentimos que nuestros derechos fueron tomados en cuenta.',
    name: 'C.A.P.G.',
    matter: 'Proceso penal',
    place: 'Quito',
  },
  {
    quote:
      'Atravesaba una situación familiar complicada y necesitaba una solución que protegiera mis derechos y los de mi familia. Desde el primer momento recibí una atención cercana y profesional. Me explicaron cada paso con claridad, atendieron mis inquietudes y me acompañaron con mayor tranquilidad. Agradezco su sensibilidad, discreción y compromiso.',
    name: 'A.A.T.B.',
    matter: 'Pensión alimenticia y régimen de visitas',
    place: 'Ibarra',
  },
];

// Fotos del equipo en el despacho (public/fotos/). La primera es la grande.
export const gallery = [
  { photo: '/fotos/socios.webp', caption: 'Atención directa de socios.', alt: 'Alexander Mira Quelal y Melanie Montesdeoca Rodríguez en su despacho' },
  { photo: '/fotos/estudio-caso.webp', caption: 'Estudio técnico de cada expediente.', alt: 'Melanie Montesdeoca revisa un expediente junto a una estatua de la justicia' },
  { photo: '/fotos/firma.webp', caption: 'Estrategia y transparencia.', alt: 'Revisión y firma de un documento junto al portátil' },
  { photo: '/fotos/justicia.webp', caption: 'Ética y rigor profesional.', alt: 'Estatua de la justicia sobre el escritorio del despacho' },
  { photo: '/fotos/constitucion.webp', caption: 'Sustento jurídico.', alt: 'Códigos y la Constitución de 2008 en la biblioteca del estudio' },
];

export const waLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
