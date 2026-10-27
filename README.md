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
8. **Consulta**: formulario en 2 pasos (primero el tipo de asunto con un toque, luego nombre, WhatsApp, cantón y mensaje).
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

El formulario (`src/components/ContactForm.astro`) valida los campos y, por defecto, abre WhatsApp con el mensaje ya escrito, así que no necesita servidor. Para que los mensajes lleguen por correo, cree un formulario en un servicio como [Formspree](https://formspree.io) y pegue su URL en `site.formEndpoint` (`src/data/site.ts`). En ese caso el formulario envía los datos ahí y, si algo falla, ofrece WhatsApp como alternativa.

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
