// Artículos del blog, escritos directamente en el código.
// Son contenido DE EJEMPLO con información general: el estudio debe revisarlos,
// ajustarlos y firmarlos antes de publicar. Para agregar uno, copie un objeto
// y cambie el slug (será la URL: /blog/<slug>/).

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Familia' | 'Civil';
  date: string; // AAAA-MM-DD
  author: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'divorcio-por-mutuo-acuerdo-en-ecuador',
    title: 'Divorcio por mutuo acuerdo: cómo funciona en Ecuador',
    excerpt:
      'Cuando los dos están de acuerdo, el divorcio puede ser más rápido y menos doloroso. Le explicamos cuándo se hace en notaría, cuándo ante un juez y qué documentos necesita.',
    category: 'Familia',
    date: '2026-09-18',
    author: '[Nombre] Mira',
    body: [
      { p: 'Terminar un matrimonio nunca es sencillo, pero cuando ambos cónyuges están de acuerdo, la ley ecuatoriana ofrece un camino más corto y menos conflictivo: el divorcio por mutuo acuerdo.' },
      { h2: '¿En notaría o ante un juez?' },
      { p: 'Depende sobre todo de los hijos. Si la pareja no tiene hijos menores de edad o dependientes, o si la situación de esos hijos ya está resuelta (tenencia, visitas y pensión de alimentos), el divorcio puede tramitarse ante un notario.' },
      { p: 'Si hay hijos menores o dependientes cuya situación todavía no está definida, el trámite se presenta ante la Unidad Judicial de Familia, donde el juez revisa y aprueba los acuerdos sobre ellos.' },
      { h2: 'Documentos que normalmente se piden' },
      { ul: [
        'Cédulas de identidad de ambos cónyuges.',
        'Acta o partida de matrimonio actualizada del Registro Civil.',
        'Si hay hijos, sus partidas de nacimiento y, cuando corresponda, la resolución sobre tenencia, visitas y alimentos.',
        'La petición de divorcio firmada por los cónyuges y su abogado.',
      ] },
      { h2: '¿Y los bienes?' },
      { p: 'El divorcio disuelve el vínculo matrimonial, pero la sociedad conyugal (los bienes adquiridos durante el matrimonio) se liquida en un trámite aparte. Es importante planificar ambos pasos desde el inicio para evitar sorpresas.' },
      { note: 'Cada caso tiene particularidades. Antes de firmar cualquier acuerdo, revíselo con un abogado que le explique qué significa para usted y para sus hijos.' },
    ],
  },
  {
    slug: 'pension-de-alimentos-como-se-calcula',
    title: 'Pensión de alimentos: cómo se calcula y cómo pedirla',
    excerpt:
      'La pensión no es un favor: es un derecho de sus hijos. Así se calcula con la tabla del Consejo de la Judicatura y estos son los pasos para solicitarla.',
    category: 'Familia',
    date: '2026-09-04',
    author: '[Nombre] Mira',
    body: [
      { p: 'La pensión de alimentos cubre lo que un hijo necesita para vivir con dignidad: comida, salud, educación, vivienda, vestimenta y recreación. Es un derecho del niño, niña o adolescente, no de los padres.' },
      { h2: '¿Cómo se calcula el monto?' },
      { p: 'El juez se guía por la Tabla de Pensiones Alimenticias Mínimas que publica el Consejo de la Judicatura y que se actualiza periódicamente. La tabla considera principalmente los ingresos de quien debe pagar y el número y la edad de los hijos.' },
      { p: 'Por eso es clave demostrar los ingresos reales del obligado: roles de pago, afiliación al IESS, declaraciones de impuestos o cualquier otra prueba de su actividad económica.' },
      { h2: 'Pasos para solicitarla' },
      { ul: [
        'Reunir las partidas de nacimiento de los hijos y su cédula.',
        'Recopilar pruebas de los ingresos de la otra parte y de los gastos de los hijos.',
        'Presentar la demanda en la Unidad Judicial de Familia.',
        'Al calificar la demanda, el juez puede fijar una pensión provisional mientras dura el proceso.',
      ] },
      { h2: '¿Hasta cuándo se paga?' },
      { p: 'Por regla general, hasta los 18 años; y hasta los 21 si el hijo o hija sigue estudiando. Si el hijo tiene una discapacidad que le impide mantenerse, la obligación puede extenderse.' },
      { note: 'Los pagos se registran en el Sistema Único de Pensiones Alimenticias (SUPA). Si la pensión ya no corresponde a la realidad, se puede pedir un aumento o una rebaja.' },
    ],
  },
  {
    slug: 'posesion-efectiva-primer-paso-para-heredar',
    title: 'Posesión efectiva: el primer paso para heredar',
    excerpt:
      'Cuando fallece un familiar, sus bienes no pasan solos a los herederos. La posesión efectiva es el trámite que lo hace posible. Le contamos cómo se realiza.',
    category: 'Civil',
    date: '2026-08-21',
    author: '[Nombre] Montesdeoca',
    body: [
      { p: 'Tras el fallecimiento de un ser querido, uno de los primeros trámites legales es la posesión efectiva. Sin ella, los herederos no pueden vender, transferir ni administrar formalmente los bienes que dejó.' },
      { h2: '¿Qué es exactamente?' },
      { p: 'Es la declaración que reconoce a los herederos como poseedores de los bienes del fallecido. No reparte los bienes entre ellos: solo establece quiénes heredan. El reparto se hace después, en la partición.' },
      { h2: '¿Dónde se hace?' },
      { p: 'Se tramita ante un notario, que extiende el acta de posesión efectiva. Luego esa acta se inscribe en el Registro de la Propiedad del cantón donde están los inmuebles.' },
      { h2: 'Documentos habituales' },
      { ul: [
        'Partida de defunción del causante.',
        'Documentos que prueben el parentesco: partidas de nacimiento o de matrimonio.',
        'Cédulas de los herederos.',
        'Si existe, el testamento.',
      ] },
      { h2: 'Después de la posesión efectiva' },
      { p: 'Quedan pasos importantes: declarar ante el SRI lo que corresponda por la herencia y, si los herederos quieren dividir los bienes, realizar la partición, de común acuerdo o por vía judicial.' },
      { note: 'Una herencia bien planificada evita conflictos entre hermanos. Si hay desacuerdos, conviene buscar asesoría antes de que el problema crezca.' },
    ],
  },
  {
    slug: 'tenencia-y-regimen-de-visitas',
    title: 'Tenencia y régimen de visitas: qué decide el juez',
    excerpt:
      'Cuando los padres se separan, ¿con quién viven los hijos? La respuesta siempre parte del interés superior del niño. Esto es lo que el juez toma en cuenta.',
    category: 'Familia',
    date: '2026-08-07',
    author: '[Nombre] Mira',
    body: [
      { p: 'La tenencia define con cuál de los padres vive el hijo en el día a día. El régimen de visitas asegura que el otro progenitor mantenga una relación cercana y constante con él.' },
      { h2: 'El principio que manda: el interés superior del niño' },
      { p: 'El juez no decide en función de lo que quieren los padres, sino de lo que es mejor para el hijo: su estabilidad, su bienestar emocional, su entorno escolar y familiar, y los vínculos con cada progenitor.' },
      { h2: 'La opinión del hijo cuenta' },
      { p: 'Según su edad y madurez, el niño o adolescente puede ser escuchado durante el proceso. Su opinión no es la única que pesa, pero el juez la considera.' },
      { h2: 'Lo que ayuda a su caso' },
      { ul: [
        'Mostrar con hechos su participación en la vida del hijo: escuela, salud, rutina.',
        'Proponer un régimen de visitas realista y flexible.',
        'Evitar involucrar a los hijos en el conflicto entre adultos.',
      ] },
      { note: 'Siempre que sea posible, un acuerdo entre los padres es más rápido y menos doloroso para los hijos que un juicio largo.' },
    ],
  },
  {
    slug: 'union-de-hecho-derechos-y-registro',
    title: 'Unión de hecho: sus derechos y cómo formalizarla',
    excerpt:
      'Vivir juntos sin casarse también genera derechos. Conozca qué protege la unión de hecho y por qué conviene formalizarla.',
    category: 'Familia',
    date: '2026-07-24',
    author: '[Nombre] Mira',
    body: [
      { p: 'Muchas parejas en Ecuador conviven durante años sin casarse. La Constitución reconoce a la unión de hecho estable y monogámica los mismos derechos y obligaciones que tienen las familias constituidas mediante matrimonio.' },
      { h2: '¿Qué protege?' },
      { ul: [
        'Los bienes adquiridos durante la convivencia, que forman una sociedad de bienes.',
        'Derechos hereditarios entre los convivientes.',
        'Beneficios de seguridad social, como la afiliación del conviviente.',
      ] },
      { h2: '¿Por qué formalizarla?' },
      { p: 'Aunque la convivencia genera derechos, probarla después, por ejemplo tras una separación o un fallecimiento, puede ser difícil. Formalizarla ante un notario o un juez y registrarla en el Registro Civil le da certeza a la pareja y a su familia.' },
      { h2: '¿Y si termina?' },
      { p: 'La unión de hecho también se termina formalmente, y los bienes comunes se liquidan, de manera similar a lo que ocurre con la sociedad conyugal en un divorcio.' },
      { note: 'Si convive con su pareja y tienen bienes o hijos, revisar su situación legal hoy puede evitar un problema mañana.' },
    ],
  },
  {
    slug: 'antes-de-comprar-un-terreno-en-ibarra',
    title: 'Antes de comprar un terreno: documentos que debe revisar',
    excerpt:
      'Comprar un terreno o una casa es una de las decisiones más grandes de una familia. Estos documentos le ayudan a evitar sorpresas antes de firmar.',
    category: 'Civil',
    date: '2026-07-10',
    author: '[Nombre] Montesdeoca',
    body: [
      { p: 'Un inmueble con problemas legales puede convertirse en años de juicios. Antes de entregar dinero o firmar una promesa de compraventa, revise con calma esta lista.' },
      { h2: 'Documentos clave' },
      { ul: [
        'Certificado de gravámenes del Registro de la Propiedad: muestra quién es el dueño y si hay hipotecas, embargos o prohibiciones.',
        'Escritura e historia de dominio: confirma cómo llegó el bien al vendedor actual.',
        'Pago del impuesto predial al día en el municipio.',
        'Certificado de afectación o línea de fábrica: indica si el terreno está afectado por vías, quebradas u otras restricciones.',
        'Levantamiento o plano del terreno que coincida con lo que dice la escritura.',
      ] },
      { h2: 'Señales de alerta' },
      { p: 'Desconfíe si el vendedor no es quien figura en el Registro, si hay herederos que no han firmado, o si le piden pagar todo antes de la escritura. En esos casos, deténgase y pida asesoría.' },
      { h2: 'La firma y la inscripción' },
      { p: 'La compraventa de inmuebles se hace por escritura pública ante notario y solo queda completa cuando se inscribe en el Registro de la Propiedad. Hasta entonces, la transferencia no está terminada.' },
      { note: 'Una revisión legal antes de comprar cuesta mucho menos que un juicio después.' },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const readingTime = (post: Post) => {
  const words = post.body
    .map((b) => ('p' in b ? b.p : 'h2' in b ? b.h2 : 'note' in b ? b.note : b.ul.join(' ')))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' });

export const slugify = (text: string) =>
  text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
