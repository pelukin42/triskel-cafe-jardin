# Triskel Café y Jardín: convenciones del proyecto

Propuesta de sitio **Plan Premium** (Axel Sites) para **Triskel Café y Jardín**, en Santa Elena, San Isidro de
Heredia. Sitio multipágina en `premium/`; el `index.html` de la raíz solo redirige.

Para rehacer o extender este tipo de sitio, usar el skill **`/premium`**.

## Reglas duras

**No inventar ningún dato del negocio.** Ni precios, garantías, plazos, correos, horarios, platillos ni
testimonios. Campo sin confirmar = vacío en `NEGOCIO` = el elemento no se dibuja. Todo lo pendiente está en
`PENDIENTES-CLIENTE.md` y la fuente de cada dato publicado, en `README.md`.

**Sin fotos propias todavía.** Ni Google (vista sin sesión, 0 fotos) ni Instagram (bloquea descarga sin sesión)
entregaron ninguna foto usable. Todo `<img data-ph="…">` corre con el marcador "Fotografía pendiente" hasta que
lleguen los originales. Nunca reemplazar por bancos de imágenes.

**Fidelización sin cuota.** El Club Triskel no cobra (rubro restaurantes: "club con beneficios, sin cuota" en
`references/fidelizacion.md` del skill). `membresias[0].precio = 0` es un valor real ("sin costo"), no un dato
pendiente: no confundir con `null` (precio por definir).

**Precios.** No hay ningún precio publicado por Triskel en 21 publicaciones revisadas. `MOSTRAR_PRECIOS = false`
y ningún `servicios[].precio` tiene valor. El cotizador solo pregunta el presupuesto del visitante.

**Propuestas marcadas.** El Club Triskel, los paquetes ("Brunch para dos", "Celebración en el jardín") y la
tarjeta de regalo son ideas de Axel Sites: en modo demo llevan nota, y en producción solo se encienden si
Triskel las aprueba.

**Opiniones.** Solo la cifra pública de Google (4,7), con enlace a la ficha. El total de reseñas no es visible
sin sesión: `google.total = 0` y `pintarRating()` (en `main.js`) omite el conteo en vez de mostrar "0 reseñas".
Sin `aggregateRating` propio en el JSON-LD.

**Tono.** Voseo costarricense, como publica Triskel ("Reservá", "Cotizá"). Sin frases vacías.

## Ajustes propios de este proyecto al motor genérico (`premium/js/main.js`)

El motor del skill trae vocabulario de spa/clínica en algunos puntos fijos. Para este rubro (restaurante) se
ajustaron 3 cosas puntuales, documentadas aquí para no perderlas si se vuelve a copiar `main.js` desde la
plantilla del skill:

1. **`pintarRating()`**: cuando `NEGOCIO.google.total` es `0`/falsy, ya no arma "· 0 reseñas" ni "· null
   reviews": muestra solo la calificación y el enlace. Útil para cualquier cliente cuya ficha no muestre el
   total sin sesión.
2. **`pintarPlanes()`**: si `membresias[].precio === 0` (estrictamente, no solo "falsy"), muestra "Sin costo /
   con beneficios" en vez de "Precio por definir con…". Sirve para cualquier club sin cuota.
3. **`initCita()`**: el campo "servicio" (qué platillo le interesa) pasó a ser opcional —ya no bloquea el envío
   si queda vacío— y se agregó un campo **personas** (cuántos comensales) al formulario de reserva, con su
   propia línea en el mensaje de WhatsApp y en `registrarSolicitud()`. Para un restaurante, cuántas personas
   son es más importante que forzar la elección de un platillo antes de reservar.
4. El texto fijo "Quiero mejorar" del resumen del cotizador (pensado para tratamientos estéticos) se cambió a
   **"Ocasión"**, más neutral entre rubros.

## Fuente única

- `assets/core.css` y `assets/core.js` son la fuente. Después de editarlos, re-copiar:

  ```bash
  cp assets/core.css premium/css/styles.css && cp assets/core.js premium/js/core.js
  ```

- Todos los datos viven en `NEGOCIO` (`assets/core.js`): contacto, horario, catálogo, zonas, paquetes,
  membresías y el mapa del cotizador. El JSON-LD se genera solo desde ahí (`jsonLD()` en `main.js`).
- **Bloques compartidos** (íconos, encabezado y pie) se editan solo en `premium/index.html`, entre los
  comentarios `@sprite`, `@header` y `@footer`, y se copian a las demás páginas con:

  ```bash
  python herramientas/sync_parciales.py
  ```

## Banderas (inicio de `premium/js/main.js`)

`MODO_DEMO`, `MOSTRAR_PRECIOS` (`false`: sin evidencia de precios), `MOSTRAR_HORARIO`, `MOSTRAR_DIRECTOR`
(repurpuesto para "quién cocina": Esteban Román y Carolina Marín), `CLUB`, `TARJETA_REGALO`, `GALERIA` (la
sección se autooculta igual, porque `NEGOCIO.galeria` está vacío) y `FLAGS.chilaquiles` (construido y apagado:
Instagram decía "últimas semanas disponible" hace 10 meses). `BILINGUE` está en `premium/js/i18n.js`.

`NEGOCIO.promo` está **activo** con el menú especial del mes patrio (Instagram, 4-sep-2026): es el mecanismo
real que Triskel ya usa cada mes con nombres distintos (ver `INVESTIGACION-MERCADO.md` §5).

## Bilingüe

El HTML está en español. Cada texto traducible lleva `data-i18n="clave"` o `data-i18n-attr="atributo:clave"`,
con su traducción en `premium/js/en.js`; el motor está en `premium/js/i18n.js`. Lo que se dibuja desde `NEGOCIO`
usa `L(obj, 'campo')`, que toma `campoEn` en inglés. Las notas de la propuesta (`demo.*`) quedan en español.

## Sistema visual

Identidad tomada del logo real de Instagram (triskel durazno sobre fondo verde musgo): verde profundo
(`--verde #3E7266`; texto en `--verde-fuerte #2C554A`), durazno cálido (`--durazno #C97B49`) y marfil de jardín
(`--fondo #FAF8F2`), en vez del turquesa/grafito de la plantilla original. Fraunces para títulos (cálida, con
carácter) y Jost para texto. El símbolo `#i-loto` del sprite se redibujó como un triskel de tres espirales
(antes era un loto, del ejemplo de belleza): es una reconstrucción aproximada del logo real, no una copia
exacta — pedir el archivo original (SVG o PNG con fondo transparente) en la reunión.

## Verificar

Servidor local: `.claude/launch.json` (puerto 5539), abrir `http://localhost:5539/premium/`.
Revisar consola sin errores, 390 px y 1280 px, ES y EN, y recorrer el cotizador, la reserva, el seguimiento y
la tarjeta de regalo. `python scripts/claves_i18n.py premium` (del skill) para las traducciones.
