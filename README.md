# Landing — Estudio Jurídico Mira & Montesdeoca

Sitio de una sola página para el Estudio Jurídico Mira & Montesdeoca, abogados de derecho de familia y civil en Ibarra, Imbabura, Ecuador. Hecho con [Astro](https://astro.build) y exportado como sitio estático.

El diseño se llama **Telar de Imbabura**: fondo de algodón índigo con hilos de urdimbre sobre la retícula, bandas de trama con los azules del logo y la tipografía Quattrocento de la marca. Al recorrer la sección «Cómo trabajamos», cada paso teje una franja del telar.

## Secciones

1. **Inicio**: titular, CTA de WhatsApp e isotipo tejido.
2. **El estudio**: origen del nombre, significado del símbolo y los socios.
3. **Áreas**: Familia y Civil, cada una con su enlace directo a WhatsApp.
4. **Cómo trabajamos**: el proceso en 5 pasos.
5. **Testimonios**: de ejemplo, marcados como placeholders.
6. **Reconocimientos**: espacios para logos de clientes y premios.
7. **Ubicación**: mapa de Ibarra, dirección, horario y contacto.
8. **Cierre**: llamado final a WhatsApp.

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
| Número de WhatsApp (formato `593XXXXXXXXX`, sin `+`) y mensaje inicial | `site.whatsapp`, `site.whatsappMessage` |
| Teléfono, correo, dirección y horarios | `site.phoneDisplay`, `site.phoneHref`, `site.email`, `site.address`, `site.hours` |
| Coordenadas del mapa | `site.map` |
| Socios: nombre, cargo, matrícula y trayectoria | `partners` |
| Trámites de cada área | `areas` |
| Pasos del proceso | `steps` |
| Testimonios | `testimonials` |
| Logos de clientes y premios | `recognitions`, `awards` |

Unos pocos textos están directamente en **`src/pages/index.astro`**: las condiciones de la primera consulta, el año de fundación y el número de casos.

### Placeholders

Cualquier texto entre `[corchetes]` es un dato por confirmar y en la página se muestra resaltado en celeste. Al poner el dato real, quita los corchetes.

> ⚠️ Los testimonios incluidos son **de ejemplo**. Reemplázalos solo por testimonios reales con autorización escrita de cada cliente.

### Fotos de los socios y logos de clientes

Los espacios con borde punteado son marcadores para imágenes. Coloca las imágenes en `public/` y reemplaza el bloque `.ghost` correspondiente por una etiqueta `<img>`.

## Estructura

```
├── logos/                 Logos originales de la marca (SVG y PNG)
├── public/
│   ├── brand/             Logos optimizados y texturas (trama, máscara del isotipo)
│   └── favicon.svg
├── src/
│   ├── components/        Isotipo.astro, Icon.astro
│   ├── data/site.ts       Contenido editable
│   ├── layouts/Base.astro HTML base, fuentes y metadatos
│   ├── pages/index.astro  La landing
│   └── styles/global.css  Estilos y tokens de diseño
├── PRODUCT.md             Contexto del estudio y del público
└── DESIGN.md              Sistema visual: colores, tipografía y componentes
```

## Publicar

`npm run build` genera la carpeta `dist/` con archivos estáticos. Sube su contenido a cualquier hosting, por ejemplo IONOS, cPanel, Netlify o Vercel.

Antes de publicar, actualiza el dominio en `astro.config.mjs` (`site`).
