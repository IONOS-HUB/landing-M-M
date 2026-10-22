// Datos del estudio. Todo valor entre corchetes es un placeholder:
// reemplácelo por la información real antes de publicar.

export const site = {
  name: 'Estudio Jurídico Mira & Montesdeoca',
  city: 'Ibarra, Imbabura, Ecuador',
  // Número en formato internacional, sin "+" ni espacios (593 + número sin el 0 inicial).
  whatsapp: '593900000000',
  whatsappMessage: 'Hola, quisiera agendar una consulta con el Estudio Mira & Montesdeoca.',
  phoneDisplay: '[(06) 000 0000]',
  phoneHref: 'tel:+59360000000',
  email: '[contacto@dominio.ec]',
  address: '[Calle Bolívar 0-00 y Calle Oviedo]',
  addressNote: '[Edificio / piso / oficina]',
  hours: [
    { days: 'Lunes a viernes', time: '[08:30 – 13:00 · 14:30 – 18:00]' },
    { days: 'Sábados', time: '[Con cita previa]' },
  ],
  // Coordenadas aproximadas del centro de Ibarra; ajuste a la oficina real.
  map: { lat: 0.3517, lon: -78.1223 },
  founded: '[año]',
  // Opcional: URL de un servicio de formularios (p. ej. https://formspree.io/f/xxxx).
  // Si queda vacío, el formulario arma el mensaje y lo abre en WhatsApp.
  formEndpoint: '',
};

export const partners = [
  {
    name: '[Nombre] Mira',
    title: 'Abogado/a · Socio/a fundador/a',
    registry: 'Matrícula Foro de Abogados [N.º 00-0000-0000]',
    focus: 'Derecho de familia',
    bio: '[Breve trayectoria: universidad, años de ejercicio y el tipo de casos que más acompaña.]',
  },
  {
    name: '[Nombre] Montesdeoca',
    title: 'Abogado/a · Socio/a fundador/a',
    registry: 'Matrícula Foro de Abogados [N.º 00-0000-0000]',
    focus: 'Derecho civil',
    bio: '[Breve trayectoria: universidad, años de ejercicio y el tipo de casos que más acompaña.]',
  },
];

export const areas = [
  {
    id: 'familia',
    name: 'Familia',
    lead: 'Cuando lo que está en juego son sus hijos, su pareja o su hogar.',
    items: [
      'Divorcio por mutuo acuerdo y contencioso',
      'Pensión de alimentos: fijación, aumento y rebaja',
      'Tenencia, patria potestad y régimen de visitas',
      'Unión de hecho: reconocimiento y terminación',
      'Reconocimiento e impugnación de paternidad',
      'Disolución y liquidación de sociedad conyugal',
    ],
  },
  {
    id: 'civil',
    name: 'Civil',
    lead: 'Cuando se trata de sus bienes, sus contratos o una herencia.',
    items: [
      'Herencias, testamentos y posesión efectiva',
      'Partición de bienes entre herederos',
      'Compraventa e inscripción de inmuebles',
      'Prescripción adquisitiva de dominio',
      'Contratos de arriendo, promesa y compraventa',
      'Cobro de deudas y obligaciones',
    ],
  },
];

export const steps = [
  {
    title: 'Nos escribe',
    text: 'Por WhatsApp o por teléfono nos cuenta, en pocas palabras, qué está pasando. Le respondemos y coordinamos una cita.',
  },
  {
    title: 'Le escuchamos',
    text: 'En la primera consulta revisamos su situación y sus documentos con calma. Le explicamos sus opciones sin tecnicismos.',
  },
  {
    title: 'Acordamos por escrito',
    text: 'Recibe una propuesta clara: qué haremos, cuánto tiempo puede tomar y cuáles son los honorarios. Sin sorpresas.',
  },
  {
    title: 'Llevamos su caso',
    text: 'Preparamos escritos, le acompañamos a audiencias y trámites, y le informamos de cada avance sin que tenga que preguntar.',
  },
  {
    title: 'Cerramos juntos',
    text: 'Le entregamos la resolución y los documentos finales, y le explicamos qué sigue para usted y su familia.',
  },
];

// Testimonios de EJEMPLO: no son reales. Reemplácelos solo con testimonios
// autorizados por escrito por los clientes.
export const testimonials = [
  {
    quote:
      'Llegué sin entender nada del proceso de alimentos. Me explicaron cada paso y nunca me sentí sola. [Texto de ejemplo]',
    name: '[Nombre del cliente]',
    matter: 'Pensión de alimentos',
    place: 'Ibarra',
  },
  {
    quote:
      'Resolvimos la herencia de mis padres entre cinco hermanos sin pelearnos. Eso no tiene precio. [Texto de ejemplo]',
    name: '[Nombre del cliente]',
    matter: 'Posesión efectiva y partición',
    place: 'Otavalo',
  },
  {
    quote:
      'Un divorcio de mutuo acuerdo rápido y con respeto para los dos. Siempre supimos cuánto iba a costar. [Texto de ejemplo]',
    name: '[Nombre del cliente]',
    matter: 'Divorcio por mutuo acuerdo',
    place: 'Atuntaqui',
  },
];

export const recognitions = [
  { label: '[Logo de cliente o institución]' },
  { label: '[Logo de cliente o institución]' },
  { label: '[Logo de cliente o institución]' },
  { label: '[Logo de cliente o institución]' },
  { label: '[Logo de cliente o institución]' },
  { label: '[Logo de cliente o institución]' },
];

export const awards = [
  { title: '[Nombre del reconocimiento]', by: '[Entidad que lo otorga]', year: '[Año]' },
  { title: '[Nombre del reconocimiento]', by: '[Entidad que lo otorga]', year: '[Año]' },
];

export const waLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
