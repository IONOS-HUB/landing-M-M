---
name: Estudio Jurídico Mira & Montesdeoca
description: Telar de Imbabura. Algodón índigo, urdimbre de retícula y trama en los azules de la marca.
colors:
  indigo-950: "#050f33"
  indigo-900: "#071746"
  indigo-800: "#0b1f5c"
  navy: "#093287"
  weft-cobalt: "#0b56c4"
  blue: "#0082ff"
  weft-azure: "#1aa0fb"
  sky: "#3abefd"
  cotton: "#f4f6f9"
  white: "#ffffff"
  ink: "#0d1733"
  ink-soft: "#3c4867"
  line: "#d9dfea"
  on-indigo: "#eef3ff"
  on-indigo-soft: "#b3c3ec"
typography:
  display:
    fontFamily: "Quattrocento, Book Antiqua, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display-index:
    fontFamily: "Quattrocento, Book Antiqua, Georgia, serif"
    fontSize: "clamp(3rem, 6.5vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Quattrocento, Book Antiqua, Georgia, serif"
    fontSize: "clamp(2rem, 3.8vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Quattrocento, Book Antiqua, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Quattrocento, Book Antiqua, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.8vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.35
  lede:
    fontFamily: "Quattrocento Sans, Gill Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Quattrocento Sans, Gill Sans, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Quattrocento Sans, Gill Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  none: "0"
  hairline: "1px"
spacing:
  warp: "14px"
  gutter: "clamp(1rem, 4vw, 3rem)"
  sp-1: "0.25rem"
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.5rem"
  sp-6: "2rem"
  sp-7: "3rem"
  sp-8: "4rem"
  sp-9: "6rem"
  sp-10: "8rem"
  sp-11: "11rem"
  space-datum: "{spacing.sp-1}"
  space-pair: "{spacing.sp-2}"
  space-group: "{spacing.sp-5}"
  space-lede: "clamp(1rem, 1.6vw, 1.5rem)"
  space-block: "clamp(3rem, 5vw, 4rem)"
  space-intro: "clamp(3rem, 7vw, 6rem)"
  section-l: "clamp(6rem, 13vw, 11rem)"
  section-m: "clamp(4rem, 9vw, 8rem)"
  section-s: "clamp(3rem, 6vw, 6rem)"
  header-clear: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.indigo-800}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.25rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.indigo-950}"
  button-primary-small:
    backgroundColor: "{colors.white}"
    textColor: "{colors.indigo-800}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  button-float:
    backgroundColor: "{colors.indigo-800}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  button-float-hover:
    backgroundColor: "{colors.navy}"
  link-thread:
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    padding: "0.4rem 0"
  weft-band:
    backgroundColor: "{colors.navy}"
    height: "42px"
  weft-band-thin:
    backgroundColor: "{colors.navy}"
    height: "14px"
  ghost-cell:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "1rem"
---

# Design System: Estudio Jurídico Mira & Montesdeoca

## Overview

**Creative North Star: "Telar de Imbabura"**

The page is a cloth being woven. Indigo cotton is the ground of the moments that carry conviction (hero, process, close, footer); cold raw cotton is the ground of the reading sections. Thin vertical warp threads are not decoration on top of the layout: they are the 12-column grid itself, drawn at each column line. Horizontal weft bands in the brand's own blues (the logo gradient, navy to sky) are woven between sections, so the separators are made of the same material as the mark.

Density is calm and editorial: generous section padding, asymmetric two-column splits, long ruled lists instead of cards. Everything is square-cornered and thread-thin: 1px rules, 1px dashed outlines, a 14px warp pitch that repeats from the weave tile to the loom to the map frame. Missing data is shown honestly as drawn ghost cells and highlighted placeholder text, never disguised as real content.

Motion is the loom at work: bands reveal by clipping left to right like a shuttle passing, the isotipo reveals bottom-up like threads filling in, and the process loom gains one weft pass per step on scroll. All of it collapses to static under reduced motion.

**Key Characteristics:**
- Two grounds only: indigo cotton and raw cotton, with white for the CTA and framed media.
- Warp threads at the 12-column lines on every indigo section.
- Weft bands in the five brand blues as section seams.
- Quattrocento bold for every heading; Quattrocento Sans for everything read.
- Zero radius on buttons, cells and frames; 1px rules and dashed thread outlines carry structure.
- Placeholders are visible, labeled, and part of the weave.

## Colors

A monochrome blue world: deep indigos for ground, the logo's navy-to-sky gradient for weft and accent, cool cotton for reading.

### Primary
- **Brand Navy** (navy): the weft's base thread, the index-scale area names, ledger labels, link-thread on cotton, ghost-cell tags, scrollbar thumb.
- **Signal Sky** (sky): the hottest thread. Focus ring, selection, CTA hover, step numerals, nav underline on hover, the floating button's border and icon.

### Secondary
- **Brand Blue** (blue): middle weft thread, quote marks, placeholder underline on cotton, ledger row hover tint (at 5%).
- **Weft Cobalt** and **Weft Azure** (weft-cobalt, weft-azure): intermediate weft passes between navy, blue and sky, used only inside weft bands and the loom.

### Neutral
- **Indigo Cotton** (indigo-800): primary dark ground, the CTA's text color, the floating button's ground.
- **Night Indigo** (indigo-900): mobile menu sheet, the loom bed, solid header (at 96%).
- **Deepest Indigo** (indigo-950): footer ground, loom beams, text on sky hover.
- **Raw Cotton** (cotton): reading-section ground and page ground.
- **White** (white): CTA face, map frame ground.
- **Ink** (ink) / **Soft Ink** (ink-soft): body text and secondary copy on cotton.
- **Thread Line** (line): every 1px rule on cotton (ledgers, area dividers, map frame).
- **On-Indigo** (on-indigo) / **On-Indigo Soft** (on-indigo-soft): text and secondary copy on indigo grounds; headings on indigo go to pure white.

### Named Rules
**The Logo Gradient Rule.** Every accent blue comes from the logo's own gradient (navy, cobalt, blue, azure, sky). No other hue enters the system; there is no gold, no warm accent.

**The Two Grounds Rule.** A section is either indigo cotton or raw cotton. Indigo is for conviction (hero, process, close); cotton is for reading and evidence.

## Typography

**Display Font:** Quattrocento (with Book Antiqua, Georgia)
**Body Font:** Quattrocento Sans (with Gill Sans, Segoe UI)

**Character:** The logotype's own serif, set bold and tight for every heading, paired with its humanist sans sibling for plain-spoken reading. Brand-binding: the logotype is Quattrocento.

### Hierarchy
- **Display** (700, clamp 2.6–5.25rem, 1.02, -0.02em): the hero headline only, max ~13ch.
- **Display Index** (700, clamp 3–5.75rem, 0.95, -0.03em, navy): practice-area names used as giant index words.
- **Headline** (700, clamp 2–3.4rem, 1.08, -0.015em): section titles, balanced wrap.
- **Title** (700, 1.5rem): partner names, step titles (1.55rem), award titles (1.15rem).
- **Quote** (400 display, clamp 1.3–1.55rem, 1.35): testimonials; the lead quote scales to clamp 1.8–2.75rem.
- **Lede** (400 sans, clamp 1.1–1.3rem, 1.55): hero and section intros, 32–36rem measure.
- **Body** (400 sans, 1.0625rem, 1.6; 1rem under 680px): reading copy, pretty wrap, ~36rem measure.
- **Label** (700 sans, 1rem, 0.01em): buttons, link-threads, ledger terms, captions' names.

### Named Rules
**The Serif Emphasis Rule.** Emphasis inside sans copy switches to Quattrocento bold in navy (not italics, not color alone).

**The Numeral Rule.** Step numbers and registry numbers use tabular figures; step numerals are display serif in sky.

## Layout

A centered 1240px wrap with fluid gutter (clamp 1–3rem). Indigo sections draw a warp rule at each of 12 column lines inside that wrap, plus a fine 7px-pitch fiber texture across the full bleed.

Every two-part composition sits on that same 12-column grid with **no column gap**: the space between blocks is one whole empty column, so every content edge lands on a warp thread. Placements: hero copy 1–7 / isotipo 8–12; section head title 1–7 / deck 9–12 (bottom-aligned); estudio, ubicación, consulta and recon intro 1–5 / evidence 7–12; proceso copy 1–6 / loom 8–12; testimonials lead 1–6 / stacked quotes 8–12; article prose 1–8 / aside 10–12; footer brand 1–6 / nav 8–12. Recognitions read as a register: intro 1–5, awards ledger 7–12, and a full-width strip of six ghost logo cells sharing one dashed thread.

**Spacing is a 4px scale** (`--sp-1` 4px … `--sp-11` 176px) used through named roles, never raw values:
- **datum** (4px): inside one fact (name + role, date + reading time).
- **pair** (8px): label to field, step title to text.
- **group** (24px): pieces of one group (form fields of one block, quote parts).
- **lede** (16–24px): headline to its own deck. Tight on purpose: the headline and its deck are one unit.
- **block** (48–64px): between groups within a section.
- **intro** (48–96px): section head to its content.
- **section** in three sizes by role: **L** 96–176px for conviction (estudio, proceso, consulta, close), **M** 64–128px for reading (áreas, testimonios, blog, ubicación), **S** 48–96px for brief evidence (recon). Bottom padding is 72% of top, so each section breathes upward into its headline.

Ledgers have two densities: data ledgers (contact, awards, TOC, practice items) use 8–12px rows; prose ledgers (process steps, guides) use 32px rows. Weft bands sit between cotton sections as seams.

Responsive: below 961px every grid is a single column (12-column placement only applies from 961px up). Between 961 and 1100px the partners drop below the estudio intro. At 960px the nav becomes a full-screen indigo sheet with display-serif links, the hero isotipo becomes a 22%-opacity watermark behind the copy, and the sticky loom is replaced by a thin weft bar under each step. At 680px the header CTA drops to icon-only and primary CTAs go full width.

### Named Rules
**The Warp Is The Grid Rule.** Vertical threads on indigo grounds sit exactly on the 12 column lines of the wrap. Never draw decorative verticals off-grid.

**The Empty Column Rule.** Two-part layouts never use a gap: they leave one whole grid column empty, so the gutter is itself a unit of the weave and edges align with the warp.

**The Upward Breath Rule.** More space above a heading than below it: section bottom padding is 72% of the top, article subheads get 64px above and 16px below, and a headline sits tight to its deck.

**The 14px Pitch Rule.** The warp pitch (14px) is the shared module of the weave tile, loom threads, ghost-cell hatching and the map frame's graph paper.

## Elevation & Depth

Flat by construction: depth comes from the two grounds and from weave texture (fiber lines, the shaded weft passes), not from raised surfaces. Soft, dark ambient shadows appear only on objects that physically sit above the cloth.

### Shadow Vocabulary
- **Mark lift** (`filter: drop-shadow(0 30px 40px rgb(0 0 0 / 0.35))`): the woven isotipo in the hero.
- **Loom drop** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.7)`): the process loom.
- **Header settle** (`box-shadow: 0 10px 30px -18px rgb(0 0 0 / 0.6)`): fixed header once scrolled.
- **Float** (`box-shadow: 0 12px 28px -10px rgb(5 15 51 / 0.55)`): floating WhatsApp button.

### Named Rules
**The Flat Cloth Rule.** Cards, cells, lists and buttons are flat. Shadows are soft, negative-spread and dark-blue/black, reserved for the mark, the loom and fixed chrome.

## Shapes

Square corners everywhere: buttons, ghost cells, map frame, loom, menu button (0). The only radius is a 1px softening on the focus ring and placeholder highlights. Structure is drawn in thread: 1px solid rules for ledgers and dividers, 1px dashed lines for things that are pending or interactive (ghost cells, the CTA's thread outline). The isotipo is the one organic silhouette, rendered as a mask filled with the logo gradient and cut into vertical threads.

## Components

### Buttons
Square, white, stitched.
- **Shape:** square (0) with a 1px solid edge and a 1px dashed outline offset 4px, the "thread border".
- **Primary (WhatsApp CTA):** white face, indigo-800 label, navy icon, label typography, 1.1rem 1.6rem (large) or 0.7rem 1rem (small). One per section at most; it is the only filled button.
- **Hover / Focus:** face, edge and dashed outline all turn sky with indigo-950 text (0.25s ease-out); active lightens to #8fdaff. Focus uses the global 2px sky ring offset 3px.
- **Floating:** indigo-800 face, white label, 1px sky edge with dashed sky outline offset 3px; hover to navy. Only below 961px (on desktop the header CTA is always present). Appears after 70% of the hero has scrolled and tucks away while the form, a CTA band, the close or the footer is on screen; the footer reserves room for it.

### Link-thread
Secondary actions as a bold label on a 1px underline thread with a trailing arrow; on hover the thread thickens to 2px and the arrow gap widens. White on indigo, navy on cotton.

### Ruled Ledgers (lists)
Practice items, steps, contact rows and awards are ruled lists, not cards: 1px rule above the list and under each row, ~1rem row padding. Practice items carry a small three-thread weft swatch (navy, blue, sky) as the bullet; hover tints the row with blue at 5% and indents it.

### Navigation
Sans 0.97rem in on-indigo-soft over a transparent fixed header; hover goes white with a 1px sky thread drawn in from the left. The header turns solid indigo-900 (96%) after 24px of scroll. Mobile: square bordered menu button, full-screen indigo sheet with warp texture and 1.9rem display-serif links divided by faint rules.

### Weft Band (signature)
A full-bleed horizontal band of woven passes: navy, navy, cobalt, blue, azure, sky at 7px each, shaded per pass and overlaid with the 14px weave tile. 42–56px tall as the hero and closing seam, 14px as the thin seam between cotton sections. Enters with a left-to-right shuttle clip.

### Loom (signature)
In the process section, a sticky loom (indigo-900 bed, 2px warp threads at 14px pitch, indigo-950 side beams and top/bottom bars edged in sky) holds five bands that weave in left to right as each step is reached, ramping from navy to sky. Each band carries a small dark label with the step number and title.

### Ghost Cell and Placeholder Mark
Pending content is drawn, not faked. Ghost cells: square, 1px dashed navy border at 45%, faint warp hatching on a 3% blue wash, a small uppercase navy tag naming the asset type (e.g. "Foto profesional") and a centered label. Inline pending data gets a placeholder mark: sky (on indigo) or blue (on cotton) wash with a 1px underline in the same hue and a "Dato por confirmar" title.

## Do's and Don'ts

### Do:
- **Do** keep every section on one of the two grounds: indigo-800 cotton with warp, or raw cotton (#f4f6f9).
- **Do** separate cotton sections with a thin (14px) weft band and open or close indigo moments with a full (42–56px) one.
- **Do** draw warp threads only on the 12 column lines of the 1240px wrap.
- **Do** set every heading in Quattrocento 700 with tight negative tracking; keep reading text in Quattrocento Sans.
- **Do** make the white, square, dash-outlined WhatsApp button the only filled button on a surface.
- **Do** show missing data as ghost cells and placeholder marks until real content exists.
- **Do** honor reduced motion: weave reveals render complete and static.

### Don't:
- **Don't** add any hue outside the logo's navy-to-sky gradient; no gold or warm accent.
- **Don't** round buttons, cells or frames; the system's only radius is the 1px on focus and placeholder marks.
- **Don't** wrap content in shadowed cards; use ruled ledgers and flat cells.
- **Don't** present placeholder testimonials, logos or figures as real; they always carry the placeholder mark or ghost cell.
- **Don't** use the dashed thread outline for decoration on static containers other than ghost cells; it marks either the CTA or pending content.
