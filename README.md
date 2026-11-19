# Triskel Café y Jardín: propuesta de sitio (Plan Premium)

Sitio multipágina para **Triskel Café y Jardín** (Santa Elena, San Isidro de Heredia). HTML, CSS y JS planos:
sin dependencias ni compilación. Se sube por FTP o arrastrando la carpeta.

> **Estado: demostración.** Tiene cinta amarilla, `noindex` y notas de propuesta. No publicar hasta revisar
> `PENDIENTES-CLIENTE.md` con Triskel.

## Cómo verlo

- Rápido: abrir `premium/index.html` con doble clic.
- Con servidor local, desde esta carpeta:

  ```bash
  python -m http.server 5539
  ```

  y abrir http://localhost:5539/premium/

## Qué incluye (Plan Premium → dónde está)

| Promesa del Plan Premium | Dónde está |
|---|---|
| Platillos con foto y descripción | `servicios.html`: 34 platillos en 4 secciones (22 con precio real), cada uno con su fuente (en modo demo). 4 ya tienen foto propia; el resto se agrega cuando Triskel envíe más (ver `PENDIENTES-CLIENTE.md` #1) |
| Portafolio tipo catálogo, por tipo | Filtros por sección (Brunch, Platos fuertes, Café y bebidas, Postres) y **búsqueda por problema** ("brunch", "cazuela", "café") |
| Cotización detallada (ocasión, zona, presupuesto) | `agendar.html#cotizar`: 4 pasos (qué estás planeando → zona → platillos → presupuesto) con resumen en vivo |
| Solicitud de reservas | `agendar.html#agendar`: día, cuántas personas, horario y primera visita |
| Enlace directo a reseñas de Google | Tarjeta de opiniones en la portada, pie de página, página de enlaces y QR del kit de mostrador |
| SEO local | Títulos por página, dirección con señas ("contiguo a Sibö Chocolate"), mapa, Waze, datos estructurados (JSON-LD `CafeOrCoffeeShop` + `Restaurant`) generados desde `NEGOCIO` |
| Versión bilingüe | Botón ES/EN en todas las páginas (`js/en.js`) |
| WhatsApp y redes | Cada botón con su propio mensaje; WhatsApp flotante, barra de acciones en celular y botones de Instagram/Facebook en el menú, el pie y la página de enlaces |
| Fidelización | `membresias.html`: Club Triskel (sin costo), 2 paquetes propuestos y tarjeta de regalo |
| Correo profesional y dominio | Recomendación en `PENDIENTES-CLIENTE.md` (todos los dominios con "triskel" están libres hoy) |
| 3 rondas de ajustes | `AJUSTES.md` |

**Extras incluidos:** kit de mostrador en PDF (`Kit de mostrador - Triskel.pdf`), página de enlaces para la bio
de Instagram (`premium/links.html`), imagen para compartir en WhatsApp (`og.jpg`), ícono de la marca, estado
"Abierto ahora", promoción del mes activa (menú especial patrio, con la evidencia real de Instagram), pestaña
"Ya reservé" para seguimiento, e investigación de mercado (`INVESTIGACION-MERCADO.md`).

## Estructura

```
index.html                  Redirige a premium/
README.md                   Este archivo
PENDIENTES-CLIENTE.md       Agenda de la reunión
INVESTIGACION-MERCADO.md    Mercado meta y decisiones
AJUSTES.md                  Rondas de ajustes del Plan Premium
CLAUDE.md                   Convenciones para futuras sesiones
Cotizacion-CT01-Triskel.pdf
assets/
  core.css                  Sistema visual. FUENTE ÚNICA
  core.js                   Datos del negocio (NEGOCIO) y utilidades. FUENTE ÚNICA
herramientas/
  sync_parciales.py         Copia íconos, encabezado y pie de index.html al resto de páginas
  og.html · icono.html      Plantillas de la imagen para compartir y del ícono
cotizacion/
  cotizacion.html           La cotización formal (4 páginas), ya con los datos de Triskel
premium/
  index.html                Inicio
  servicios.html            Menú (catálogo) y galería
  membresias.html           Club Triskel, paquetes y tarjeta de regalo
  agendar.html              Reservar · Cotizar evento · Ya reservé
  links.html                Enlaces para la bio de Instagram (noindex)
  kit-mostrador.html        Tarjetas con QR para imprimir (noindex)
  css/styles.css            Copia de assets/core.css
  css/site.css              Componentes del sitio + ajustes propios de este proyecto
  js/core.js                Copia de assets/core.js
  js/en.js                  Textos en inglés
  js/i18n.js                Motor bilingüe
  js/main.js                Motor del sitio (con 3 ajustes propios: ver CLAUDE.md)
  img/                      Íconos, QR, og.jpg y LEEME.txt (sin fotos del negocio todavía)
```

## Cómo se edita

**Datos del negocio:** todo vive en `NEGOCIO` (`assets/core.js`): contacto, horario, platillos, paquetes,
membresías, regalo y el mapa del cotizador. Un campo vacío oculta su elemento. Después de editar:

```bash
cp assets/core.js premium/js/core.js
cp assets/core.css premium/css/styles.css
```

**Banderas** (inicio de `premium/js/main.js`):

| Bandera | Valor | Qué hace |
|---|---|---|
| `MODO_DEMO` | `true` | Cinta, notas de propuesta y fuentes visibles. `false` al publicar. |
| `MOSTRAR_PRECIOS` | `true` | Precios reales del menú de Triskel indexado por Google (revisado 23-sep-2026); confirmar que siguen vigentes. |
| `MOSTRAR_HORARIO` | `true` | Horario confirmado por Instagram y por el estado en vivo de Google. |
| `MOSTRAR_DIRECTOR` | `true` | "En la cocina: Esteban Román y Carolina Marín" (bio de Instagram). |
| `CLUB` | `true` | Club Triskel, sin costo. Propuesta. |
| `TARJETA_REGALO` | `true` | Propuesta; no hay evidencia de que Triskel la ofreciera antes. |
| `GALERIA` | `true` | Sin fotos todavía: la sección se oculta sola hasta que `NEGOCIO.galeria` tenga elementos. |
| `FLAGS.chilaquiles` | `false` | Se ofrecieron "por tiempo limitado" en noviembre de 2025: construido y apagado. |
| `BILINGUE` (`js/i18n.js`) | `true` | Selector ES/EN. |

**Promoción del mes:** `NEGOCIO.promo` ya está **activa** con el menú especial del mes patrio (evidencia real
de Instagram, 4-sep-2026). Actualizarla cada vez que Triskel publique un nuevo menú de temporada — lo hacen casi
todos los meses (ver `INVESTIGACION-MERCADO.md` §5): `{ activa: true, texto: '…', textoEn: '…', wa: 'mensaje' }`.

**Fotos por platillo:** copiar a `premium/img/servicios/` y agregar `foto: 'img/servicios/nombre.jpg'` en ese
platillo. **Galería:** agregar `{ src, cat, titulo, tituloEn }` a `NEGOCIO.galeria`.

**Textos en inglés:** `premium/js/en.js`. Cada texto del HTML lleva `data-i18n="clave"`. Para revisar que no
falte ninguno:

```bash
python "C:\Users\JMMendez\.claude\skills\premium\scripts\claves_i18n.py" premium
```

**Encabezado, pie e íconos:** se editan solo en `premium/index.html` (entre `@sprite`, `@header` y `@footer`) y
se copian con:

```bash
python herramientas/sync_parciales.py
```

## Qué se confirmó y de dónde

No se inventó ningún dato. Lo que no tiene fuente quedó fuera o detrás de una bandera y está en
`PENDIENTES-CLIENTE.md`.

| Dato en el sitio | Fuente |
|---|---|
| Nombre, dirección con señas ("contiguo a Sibö Chocolate"), coordenadas, categoría, calificación 4,7, `place_id`, accesibilidad | Ficha de Google Business (dueño verificado), revisada el 23-sep-2026 |
| Lema "Un jardín y buena comida" | Bio de Instagram (@triskelcafejardin) |
| Horario miércoles a viernes 12 m.d.–6 p. m., sábado y domingo 9:30 a.m.–6 p. m. | Publicación de apertura en Instagram (5-mar-2025), coincide con el estado en vivo de Google el día de la revisión |
| Brunch servido de 9:30 a.m. a 1 p. m. | Instagram, 23-abr-2025 |
| 34 platillos: 8 de brunch con precio (₡5.500–₡7.900), entradas y platos fuertes, sándwiches en pan de masa madre, café y bebidas con precio, postrería con precio y el menú especial del mes patrio | Menú de Triskel indexado por Google (revisado 23-sep-2026) e Instagram, marzo 2025 a setiembre 2026 (fecha y fuente en cada tarjeta en modo demo) |
| Teléfono / WhatsApp +506 4082 2834 | Ficha de Google Business, dueño verificado (ver PENDIENTES-CLIENTE.md #2: hay dos números anteriores distintos) |
| Chefs: Esteban Román y Carolina Marín | Bio de Instagram |
| Pet-friendly | Bio de Instagram y descripción de un reel (29-may-2025) |
| Instagram y Facebook | Perfiles públicos indexados |
| Logo (triskel) | Reconstruido en SVG a partir de la foto de perfil de Instagram. Hay que pedir el original. |
| Fotos de 4 platillos (ceviche, pozol, tortas de yuca, leche de burra) y 1 de brunch | Instagram (@triskelcafejardin), fotos propias del perfil. Sin fotos del jardín, las mesas ni la fachada todavía (ver PENDIENTES-CLIENTE.md #1) |

## Decisiones de diseño

- **Identidad del negocio, no de plantilla:** verde musgo profundo y durazno cálido muestreados del propio logo
  de Instagram, sobre un marfil de jardín (no gris de oficina). Fraunces para títulos (cálida, con carácter) y
  Jost para texto.
- **El jardín como firma visual:** el triskel reconstruido y su ornamento separan secciones; la sección "El
  jardín" reemplaza a la típica vitrina de "tecnologías" de otros rubros, porque Triskel no vende marcas: vende
  el espacio y la cocina.
- **Todo termina en WhatsApp con contexto:** en Costa Rica el 96 % usa WhatsApp. Los formularios arman el
  mensaje completo (incluye cuántas personas van); con `endpoint` vacío nunca fingen haber guardado nada.
- **Servicio al cliente:** pestaña "Ya reservé" para confirmar, cambiar o consultar sin reescribir todo desde
  cero.
- **Accesibilidad:** navegación por teclado, foco visible, `aria-label` en controles, pestañas y visor
  accesibles, `prefers-reduced-motion` y modo oscuro por preferencia del sistema.
- **SEO:** metadatos por página, Open Graph y JSON-LD `CafeOrCoffeeShop` + `Restaurant` generado desde
  `NEGOCIO`, **sin calificaciones propias**.

## Antes de publicar

1. Reunión con `PENDIENTES-CLIENTE.md` y actualizar `NEGOCIO` (empezar por el número de WhatsApp vigente).
2. Banderas: `MODO_DEMO = false` y el resto según lo confirmado (en especial `MOSTRAR_PRECIOS` si Triskel decide publicar precios).
3. `robots`: `noindex,nofollow` → `index,follow` en inicio, menú, club y agendar.
4. Dominio: `NEGOCIO.dominio`, `og:image` absoluta, `sitemap.xml` y `robots.txt`.
5. Correo profesional con SPF, DKIM y DMARC.
6. Registro de solicitudes (`NEGOCIO.endpoint`) y aviso de privacidad (Ley 8968).
7. Fotos originales del jardín, las mesas y los platillos, y el logo original.
8. Arreglos a la ficha de Google (lista en `PENDIENTES-CLIENTE.md`).
9. Revisar de nuevo en 390 px y 1280 px, en español e inglés.
10. Imprimir el kit de mostrador y poner `links.html` en la bio de Instagram.
