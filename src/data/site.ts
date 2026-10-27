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
  whatsappMessage: 'Hola, vengo de la página web. Quisiera contarles mi caso.',
  // Pendiente: el cliente indicó dos correos distintos (…789 y …799). Confirmar cuál se publica.
  email: '[correo por confirmar]',
  address: 'Calle Bolívar y Oviedo',
  addressNote: 'Edificio SAUD, segundo piso',
  hours: [{ days: 'Horario de atención', time: '[por confirmar]' }],
  mapQuery: 'Calle Bolívar y Oviedo, Ibarra, Ecuador',
  cantons: ['Ibarra', 'Antonio Ante', 'Otavalo', 'Cotacachi', 'Urcuquí'],
  freeConsult: 'Primera consulta en línea gratis',
  freeConsultTerms: '[duración y medio por confirmar]',
  // Opcional: URL de un servicio de formularios (p. ej. https://formspree.io/f/xxxx).
  // Si queda vacío, el formulario arma el mensaje y lo abre en WhatsApp.
  formEndpoint: '',
};

export const partners = [
  {
    name: 'Alexander Mira',
    title: 'Socio',
    photo: '/fotos-muestra/socio-alexander.webp',
    degree: '[Título, universidad y año]',
    bio: '[Breve trayectoria y áreas en las que más trabaja.]',
  },
  {
    name: 'Melanie Montesdeoca',
    title: 'Socia',
    photo: '/fotos-muestra/socia-melanie.webp',
    degree: '[Título, universidad y año]',
    bio: '[Breve trayectoria y áreas en las que más trabaja.]',
  },
];

// Lo que diferencia al estudio, en el orden en que una misma persona acompaña el caso.
export const steps = [
  {
    title: 'Te escuchamos',
    text: 'La primera conversación la tienes con quien va a llevar tu caso. No con una recepción ni con un departamento.',
  },
  {
    title: 'Estudiamos tu caso completo',
    text: 'No aplicamos recetas. Leemos tu situación en su contexto antes de proponerte nada.',
  },
  {
    title: 'Te explicamos los caminos',
    text: 'En palabras normales: qué está en juego, qué opciones hay y cuál conviene. Una decisión que no se entiende es una apuesta.',
  },
  {
    title: 'Te defendemos desde el primer día',
    text: 'La estrategia se prepara en serio desde el inicio, y la misma persona la sostiene en cada trámite y audiencia.',
  },
  {
    title: 'Te contamos cómo va',
    text: 'Te llamamos para informarte del avance. No tienes que perseguir a nadie para saber qué pasa con lo tuyo.',
  },
];

export const values = [
  { title: 'Discreción absoluta', text: 'Lo que nos cuentas queda entre tú y tu abogado.' },
  { title: 'Honestidad', text: 'Te decimos también lo que no te conviene oír.' },
  { title: 'Defensa preparada', text: 'Trabajamos tu caso en serio desde el primer día.' },
];

// Situaciones en primera persona: el visitante reconoce su problema y escribe
// con el mensaje ya armado (autoidentificación + cero fricción).
export const situations = [
  'Me llegó una citación y no sé qué plazo tengo',
  'No me pagan la pensión de mis hijos',
  'Falleció un familiar y hay bienes por repartir',
  'Me piden firmar un contrato y tengo dudas',
  'Me despidieron y no me liquidaron',
  'Quiero proteger mis bienes o mi negocio',
];

// Pendiente: el cliente atiende «todas las áreas del derecho» pero no envió la
// lista. Estas áreas son una propuesta para confirmar con los socios.
export const areas = [
  { name: 'Familia', items: 'Divorcios, pensión de alimentos, tenencia, visitas, unión de hecho' },
  { name: 'Herencias y patrimonio', items: 'Posesión efectiva, partición, testamentos, protección de bienes' },
  { name: 'Civil y contratos', items: 'Contratos, compraventa de inmuebles, deudas, arriendos' },
  { name: 'Penal', items: 'Denuncias, defensa, citaciones y notificaciones' },
  { name: 'Laboral', items: 'Despidos, liquidaciones, reclamos ante el empleador' },
  { name: 'Negocios', items: 'Constitución de compañías, contratos comerciales, cobros' },
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

// Testimonios de EJEMPLO: no son reales. Reemplázalos solo con testimonios
// autorizados por escrito por cada cliente (la discreción es un valor del estudio).
export const testimonials = [
  {
    quote:
      'Me explicaron cada paso con palabras que entendí, y siempre supe con quién hablar. [Texto de ejemplo]',
    name: '[Nombre o iniciales]',
    matter: 'Familia',
    place: 'Ibarra',
  },
  {
    quote:
      'Me dijeron la verdad sobre mi caso desde el primer día, aunque no era lo que quería oír. [Texto de ejemplo]',
    name: '[Nombre o iniciales]',
    matter: 'Herencia',
    place: 'Otavalo',
  },
  {
    quote:
      'Nunca tuve que llamar a preguntar cómo iba mi proceso: me llamaban ellos. [Texto de ejemplo]',
    name: '[Nombre o iniciales]',
    matter: 'Contratos',
    place: 'Antonio Ante',
  },
];

// Fotos profesionales del equipo y del despacho (pendientes de recibir).
// Mientras tanto se muestran fotos de MUESTRA de Unsplash (public/fotos-muestra/):
// no son del estudio. Reemplázalas por las fotos reales antes de publicar.
export const gallery = [
  { label: 'Foto del despacho', ratio: 'wide', photo: '/fotos-muestra/despacho.webp' },
  { label: 'Foto de los socios', ratio: 'tall', photo: '/fotos-muestra/socios.webp' },
  { label: 'Foto de reunión con cliente', ratio: 'square', photo: '/fotos-muestra/reunion.webp' },
  { label: 'Foto de la sala de espera', ratio: 'square', photo: '/fotos-muestra/sala-espera.webp' },
  { label: 'Foto del edificio SAUD', ratio: 'wide', photo: '/fotos-muestra/edificio.webp' },
];

export const waLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
