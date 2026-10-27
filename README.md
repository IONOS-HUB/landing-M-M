# Landing — Estudio Jurídico Mira & Montesdeoca

Sitio de una sola página para el Estudio Jurídico Mira & Montesdeoca, abogados de derecho de familia y civil en Ibarra, Imbabura, Ecuador. Hecho con [Astro](https://astro.build) y exportado como sitio estático.

El diseño se llama **Telar de Imbabura**: fondo de algodón índigo con hilos de urdimbre sobre la retícula, bandas de trama con los azules del logo y la tipografía Quattrocento de la marca. Al recorrer la sección «Cómo trabajamos», cada paso teje una franja del telar.

## Secciones

El contenido sigue el PRD del cliente (`archivos/`, fuera de git) y trata al visitante de «tú».

1. **Inicio**: consulta gratis antes del titular, titular emocional, botón de WhatsApp y el logo grande.
2. **¿Te pasa algo de esto?**: seis situaciones en primera persona; cada una abre WhatsApp con el mensaje ya escrito.
3. **Cómo trabajamos**: la misma persona en los 5 pasos del caso (telar animado) y los tres valores.
4. **Servicios**: todas las áreas del derecho, con una lista propuesta **por confirmar**.
5. **Nosotros**: historia desde 2016 y los socios Alexander Mira y Melanie Montesdeoca.
6. **Testimonios** y **galería** del despacho: placeholders hasta recibir el material.
7. **Preguntas frecuentes**: las 10 preguntas del cliente, con respuestas en borrador.
8. **Consulta**: formulario de un solo paso (nombre, WhatsApp, tipo de caso, cantón y mensaje) que guarda cada consulta en Google Sheets mediante n8n.
9. **Ubicación**: Calle Bolívar y Oviedo, Edificio SAUD, segundo piso, con mapa.
10. **Cierre**: llamado a la primera consulta gratis.

La página aplica principios de neuromarketing (reciprocidad, autoidentificación, micro-compromiso, prueba social y regla pico-final) sin escasez inventada ni promesas de resultado. En el celular, el botón «Quiero mi consulta gratis» queda fijo abajo.

Los botones de WhatsApp llevan el mensaje «Hola, vengo de la página web…» para que el despacho cuente los mensajes que llegan desde el sitio, y un atributo `data-track` para sumar analítica más adelante.

## Requisitos

- Node.js 18.20 o superior (probado con Node 24)
- npm

## Uso

```bash
npm install       # instalar dependencias
npm run dev       # desarrollo en http://localhost:4321
npm run build     # generar el sitio estático en dist/
npm run preview   # previsualizar el build en local
```

## Editar el contenido

Casi todos los datos del estudio están en **`src/data/site.ts`**:

| Dato | Campo |
|---|---|
| WhatsApp, mensaje inicial, correo, dirección, horarios | `site` |
| Primera consulta gratis y sus condiciones | `site.freeConsult`, `site.freeConsultTerms` |
| Socios: nombre, cargo, grado de estudio y trayectoria | `partners` |
| Pasos de cómo trabajamos y valores | `steps`, `values` |
| Áreas del derecho | `areas` |
| Preguntas frecuentes | `faqs` |
| Testimonios y fotos de la galería | `testimonials`, `gallery` |

Los titulares y textos de cada sección están en **`src/pages/index.astro`**.

### Formulario de contacto

El formulario (`src/components/ContactForm.astro`) es de un solo paso y envía cada consulta a un **webhook de n8n**, que la guarda como una fila en **Google Sheets**. Si el webhook no está configurado, el formulario abre WhatsApp con el mensaje ya escrito; si el envío falla, ofrece WhatsApp como alternativa.

**1. Configurar la URL del webhook.** Copia `.env.example` a `.env` y pega la URL de producción del webhook:

```bash
PUBLIC_FORM_WEBHOOK=https://tu-n8n.com/webhook/consultas-mira-montesdeoca
```

`.env` está en `.gitignore`. Vuelve a ejecutar `npm run build` después de cambiarla, y en el hosting define la misma variable.

**2. Armar el flujo en n8n** (3 nodos):

1. **Webhook**: método `POST`, respuesta «Immediately». En *Options → Allowed Origins (CORS)* pon el dominio de la página (por ejemplo `https://tu-dominio.com`), o `*` mientras pruebas.
2. **Google Sheets → Append Row**: elige la hoja y mapea las columnas desde `{{ $json.body.<columna> }}`.
3. (Opcional) Un aviso por correo o WhatsApp al estudio cuando llega una consulta.

**3. Columnas de la hoja** (primera fila, en este orden; los nombres coinciden con lo que envía el formulario):

| Columna | Contenido |
|---|---|
| `fecha` | Fecha y hora del envío (ISO, UTC) |
| `nombre` | Nombre y apellido |
| `whatsapp` | Número tal como lo escribió, sin espacios |
| `canton` | Cantón o ciudad |
| `asunto` | Tipo de caso elegido |
| `mensaje` | Descripción breve del caso |
| `autoriza_contacto` | Siempre «Sí» (la casilla es obligatoria) |
| `origen` | «Formulario web» |
| `pagina` | URL desde la que se envió |
| `utm_source`, `utm_medium`, `utm_campaign` | Campaña de origen, si el enlace las traía |

El formulario envía los datos como formulario (`application/x-www-form-urlencoded`), no como JSON, para evitar la petición previa de CORS; n8n los entrega igual en `$json.body`. Incluye un campo trampa invisible (`empresa`): si un robot lo llena, el formulario simula el envío y no manda nada.

### Placeholders

Cualquier texto entre `[corchetes]` es un dato por confirmar y en la página se muestra resaltado en celeste. Al poner el dato real, quita los corchetes.

> ⚠️ Los testimonios incluidos son **de ejemplo**. Reemplázalos solo por testimonios reales con autorización escrita de cada cliente.

### Fotos de los socios y del despacho

> ⚠️ Las fotos actuales son **de muestra** (banco libre [Unsplash](https://unsplash.com/license)) y llevan la etiqueta «Foto de muestra». No son del estudio: reemplázalas antes de publicar.

Están en `public/fotos-muestra/`. Para poner las reales, guarda cada foto en `public/` y cambia su ruta en `src/data/site.ts` (campo `photo` de `partners` y `gallery`). Después quita la etiqueta «Foto de muestra» en `src/pages/index.astro`.

## Estructura

```
├── logos/                 Logos originales de la marca (SVG y PNG)
├── public/
│   ├── brand/             Logos optimizados y texturas (trama, máscara del isotipo)
│   └── favicon.svg
├── src/
│   ├── components/        Cabecera, pie, formulario, banda CTA, isotipo, iconos
│   ├── data/              site.ts (datos del estudio), nav.ts (menú)
│   ├── layouts/Base.astro HTML base, fuentes y metadatos
│   ├── lib/ph.ts          Utilidad para placeholders
│   ├── pages/index.astro  La landing
│   └── styles/global.css  Estilos y tokens de diseño
├── PRODUCT.md             Contexto del estudio y del público
└── DESIGN.md              Sistema visual: colores, tipografía y componentes
```

## Publicar

`npm run build` genera la carpeta `dist/` con archivos estáticos. Sube su contenido a cualquier hosting, por ejemplo IONOS, cPanel, Netlify o Vercel.

Antes de publicar, actualiza el dominio en `astro.config.mjs` (`site`).
