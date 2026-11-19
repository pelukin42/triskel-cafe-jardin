/* ==========================================================================
   Núcleo compartido del sitio Premium — TRISKEL CAFÉ Y JARDÍN (FUENTE ÚNICA)
   - Configuración única del negocio: todo dato real vive aquí
   - WhatsApp con mensaje contextual, idioma, horario, registro de solicitudes
   - Placeholders de fotografía, header, menú móvil y animaciones
   Copiar a premium/js/core.js después de editar.
   La fuente de cada dato está en README.md y PENDIENTES-CLIENTE.md.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) CONFIGURACIÓN DEL NEGOCIO
   Campo vacío = ese elemento o sección NO se dibuja. Nunca se rellena.
   -------------------------------------------------------------------------- */
const NEGOCIO = {
  nombre: 'Triskel',
  nombreCompleto: 'Triskel Café y Jardín',
  nombresAlternos: ['Triskel CafeJardin', 'Triskel Café Jardín', 'Triskel Cafetería'],
  ciudad: 'San Isidro de Heredia',
  eslogan: 'Un jardín y buena comida', esloganEn: 'A garden and good food',
  schemaTipo: ['CafeOrCoffeeShop', 'Restaurant'],
  clubNombre: 'Club Triskel',
  // Vocabulario del rubro: restaurantes y cafés → platillo/platillos · comensal
  vocab: { uno: 'platillo', varios: 'platillos', unoEn: 'dish', variosEn: 'dishes',
           cliente: 'comensal', clienteEn: 'guest',
           regalo: 'una tarjeta de regalo', regaloEn: 'a gift card' },

  // CONFIRMADO — anotar la fuente de cada dato en README.md
  telefono: '+506 4082 2834',              // Ficha de Google Business (propietario verificado), revisado 23-sep-2026
  telefonoHref: '+50640822834',
  whatsapp: '50640822834',                 // mismo número de Google; confirmar en la reunión (ver PENDIENTES)
  direccion: 'Contiguo a Sibö Chocolate, Calle Bombacho, Santa Elena',
  direccionEn: 'Next to Sibö Chocolate, Calle Bombacho, Santa Elena',
  canton: 'San Isidro',
  provincia: 'Heredia',
  codigoPostal: '40601',
  lat: 10.0354095,
  lng: -84.0148041,
  instagram: 'https://www.instagram.com/triskelcafejardin/',
  instagramUsuario: 'triskelcafejardin',
  facebook: 'https://www.facebook.com/p/Triskel-CafeJardin-61576923382949/',
  googleMaps: 'https://maps.google.com/?cid=7335522477136709512',
  googlePlaceId: 'ChIJe697DgDpoI8RiIeg49MCzWU',
  google: { rating: 4.7, total: 0, revisado: '23-sep-2026' },   // total no visible sin sesión (ver PENDIENTES)
  pagos: [], pagosEn: [],                  // sin evidencia pública: no se publica ningún método
  accesible: true,                         // atributos de accesibilidad de la ficha de Google
  director: 'Esteban Román y Carolina Marín',   // quiénes cocinan (bandera MOSTRAR_DIRECTOR)

  // dia: 0 = domingo … 6 = sábado. Formato 24 h. Confirmado por Instagram (apertura, mar-2025)
  // y por el estado en vivo de la ficha de Google el día de la revisión.
  horario: [
    { dia: 3, abre: '12:00', cierra: '18:00' },  // miércoles
    { dia: 4, abre: '12:00', cierra: '18:00' },  // jueves
    { dia: 5, abre: '12:00', cierra: '18:00' },  // viernes
    { dia: 6, abre: '09:30', cierra: '18:00' },  // sábado
    { dia: 0, abre: '09:30', cierra: '18:00' }   // domingo
  ],

  // [PENDIENTE] — vacío hasta que exista y esté confirmado
  email: '',
  tiktok: '',
  codigoMedico: '',
  sinpe: '',
  dominio: '',

  promo: { activa: true, texto: 'Este mes: menú especial patrio 🇨🇷', textoEn: 'This month: special Costa Rican Independence menu',
           wa: 'Hola Triskel, quiero saber más sobre el menú especial del mes patrio.' },
  endpoint: '',
  headers: {},

  /* ---------- Catálogo: categorías ---------- */
  categorias: [
    { id: 'brunch', icono: 'i-coffee', nombre: 'Brunch', nombreEn: 'Brunch',
      desc: 'Sábado y domingo de 9:30 a. m. a 1 p. m., con café y jugo de naranja incluidos.',
      descEn: 'Saturday and Sunday from 9:30 a.m. to 1 p.m., with coffee and orange juice included.' },
    { id: 'platos-fuertes', icono: 'i-plate', nombre: 'Platos fuertes', nombreEn: 'Main dishes',
      desc: 'Entradas, cazuelas, sándwiches artesanales y pastas de la casa.',
      descEn: 'Starters, cazuelas, artisan sandwiches and house-made pasta.' },
    { id: 'bebidas', icono: 'i-cocktail', nombre: 'Café y bebidas', nombreEn: 'Coffee & drinks',
      desc: 'Café de especialidad, cocteles y vinos de la casa.',
      descEn: 'Specialty coffee, house cocktails and wine.' },
    { id: 'postres', icono: 'i-sparkle', nombre: 'Postres', nombreEn: 'Desserts',
      desc: 'Repostería de la casa y postres de temporada.',
      descEn: 'House pastry and seasonal desserts.' }
  ],

  /* ---------- Zonas del cotizador ---------- */
  zonas: {
    jardin: ['Mesa en el jardín', 'Garden table']
  },

  /* ---------- Catálogo: platillos ----------
     Precios y descripciones del menú de Triskel indexado por Google (ficha de Google Business,
     imagen "Triskel Menu" y "Triskel Brunch", revisadas el 23-sep-2026) y de fotos propias del
     perfil de Instagram. Los 5 platillos marcados "menú especial de setiembre" son la promoción
     activa de este mes (Instagram, 4-sep-2026): están vigentes, no son de archivo. */
  servicios: [
    // — Brunch: carta fija, ₡7.900 salvo la ensalada de frutas —
    { id: 'traditional-breakfast', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Desayuno tradicional', nombreEn: 'Traditional Breakfast',
      desc: 'Tortilla casera y queso, huevo, gallo pinto, salsa de tomate asado, plátano maduro y aguacate.',
      descEn: 'Homemade tortilla and cheese, egg, gallo pinto, roasted tomato sauce, ripe plantain, and avocado.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'waffles-triskel', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Waffles', nombreEn: 'Waffles',
      desc: 'Tocineta caramelizada, huevo, miel de maple y compota de arándanos.',
      descEn: 'Caramelized bacon, egg, maple, and blueberry compote.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'croissant-brunch', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Croissant', nombreEn: 'Croissant',
      desc: 'Jamón de pollo, queso derretido, huevo y salsa holandesa con arúgula. Se sirve con crema de tomate o ensalada.',
      descEn: 'Chicken ham, melted cheese, egg, hollandaise sauce, and arugula. Served with tomato cream soup or garden salad.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'huevos-rancheros', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Huevos rancheros', nombreEn: 'Huevos Rancheros',
      desc: 'Huevos fritos en salsa de tomate asado, con aguacate, queso Bagaces, cebolla encurtida, natilla y tortillas fritas.',
      descEn: 'Fried eggs in roasted tomato sauce, served with avocado, Bagaces cheese, pickled onion, sour cream, and fried tortillas.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'omelette-triskel', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Omelette', nombreEn: 'Omelette',
      desc: 'Queso, cebolla caramelizada, hongos y albahaca, con pan de la casa y ensalada.',
      descEn: 'Cheese, caramelized onion, mushrooms, and basil, served with house bread and garden salad.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'healthy-toast', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Healthy toast', nombreEn: 'Healthy Toast',
      desc: 'Dos tostadas de pan de la casa con guacamole, arúgula, queso feta, salmón crudo, huevo y tomate rallado con alcaparras.',
      descEn: 'Two slices of house bread toast, served with guacamole, arugula, feta cheese, raw salmon, egg, and grated tomato with capers.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'french-toast', cats: ['brunch'], medico: false, zonas: [], precio: 7900, precioFuente: '',
      foto: '', nombre: 'Tostadas francesas', nombreEn: 'French Toast',
      desc: 'Pan casero, compota de frutos rojos, crema inglesa de chocolate, frutas frescas y praliné de chía y linaza.',
      descEn: 'House-made bread, red berry compote, chocolate crème anglaise, fresh fruits, and chia-flaxseed praline.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'ensalada-frutas', cats: ['brunch'], medico: false, zonas: [], precio: 5500, precioFuente: '',
      foto: '', nombre: 'Ensalada de frutas', nombreEn: 'Fruit Salad',
      desc: 'Frutas de temporada, gelatina casera, leche en polvo y helado de vainilla.',
      descEn: 'Seasonal fruits, homemade gelatin, powdered milk, and vanilla ice cream.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'chilaquiles', cats: ['brunch'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Chilaquiles', nombreEn: 'Chilaquiles', flag: 'chilaquiles',
      desc: 'Se ofrecieron por tiempo limitado dentro del menú de brunch. No aparecen en el menú fijo actual.',
      descEn: 'Offered for a limited time as part of the brunch menu. Not on the current fixed menu.',
      fuente: 'Instagram, 21-nov-2025 ("últimas semanas disponible"); no está en el menú de Google revisado el 23-sep-2026' },

    // — Menú especial de setiembre (vigente, mes patrio) —
    { id: 'tortas-de-yuca', cats: ['brunch'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: 'img/servicios/tortas-de-yuca.jpg', nombre: 'Tortas de yuca (menú especial)', nombreEn: 'Yuca Cakes (special menu)',
      desc: 'Rellena de queso y frijol, acompañada con huevo y ensaladita de repollo con zanahoria. Parte del menú especial del mes patrio.',
      descEn: 'Filled with cheese and beans, served with egg and a little cabbage-and-carrot salad. Part of this month’s Independence Day special menu.',
      fuente: 'Instagram, 4-sep-2026 (menú especial vigente)' },

    // — Platos fuertes: entradas, cazuelas, sándwiches y pastas —
    { id: 'ceviche-vegetariano', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: 'img/servicios/ceviche-vegetariano.jpg', nombre: 'Ceviche Vegetariano (menú especial)', nombreEn: 'Vegetarian Ceviche (special menu)',
      desc: 'Base de palmito, pejibaye, cebolla morada, chile dulce y limón, con un toque de gaseosa y mayonesa de aguacate. Se acompaña con patacones. Parte del menú especial del mes patrio.',
      descEn: 'Heart of palm, pejibaye, red onion, sweet pepper and lime, with a touch of soda and avocado mayonnaise. Served with patacones. Part of this month’s Independence Day special menu.',
      fuente: 'Instagram, 4-sep-2026 (menú especial vigente)' },
    { id: 'pozol-cremoso', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: 'img/servicios/pozol-cremoso.jpg', nombre: 'Pozol Cremoso (menú especial)', nombreEn: 'Creamy Pozol (special menu)',
      desc: 'A base de maíz, con costilla de cerdo frita y escabeche. Parte del menú especial del mes patrio.',
      descEn: 'Corn-based, with fried pork rib and pickled vegetables. Part of this month’s Independence Day special menu.',
      fuente: 'Instagram, 4-sep-2026 (menú especial vigente)' },
    { id: 'sandwich-pollo-triskel', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Sandwich de Pollo Triskel', nombreEn: 'Triskel Chicken Sandwich',
      desc: 'Pechuga de pollo a la plancha, arúgula fresca y una mezcla de quesos derretidos, con mayonesa de campo casera, en pan de masa madre horneado en casa. Se sirve con chips de la casa o ensalada verde.',
      descEn: 'Grilled chicken breast, fresh arugula and a blend of melted cheeses, with house-made country mayonnaise, on house-baked sourdough bread. Served with house chips or a green salad.',
      fuente: 'Instagram, 26-sep-2025 y 22-may-2025' },
    { id: 'sandwich-manzana-queso', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Sandwich de manzana y queso', nombreEn: 'Apple & Cheese Sandwich',
      desc: 'En pan de masa madre artesanal horneado en casa. Se sirve con chips crocantes o ensalada fresca.',
      descEn: 'On house-baked artisan sourdough bread. Served with crispy chips or a fresh salad.',
      fuente: 'Instagram, 22-may-2025' },
    { id: 'sandwich-res', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Sandwich de res', nombreEn: 'Beef Sandwich',
      desc: 'En pan de masa madre artesanal horneado en casa. Se sirve con chips crocantes o ensalada fresca.',
      descEn: 'On house-baked artisan sourdough bread. Served with crispy chips or a fresh salad.',
      fuente: 'Instagram, 22-may-2025' },
    { id: 'cazuela-queso', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Cazuela de queso', nombreEn: 'Cheese cazuela',
      desc: 'Queso fundido en cazuela, uno de los platos de la carta de Triskel.',
      descEn: 'Melted cheese served in a cazuela, one of the dishes on the Triskel menu.',
      fuente: 'Instagram, 29-may-2025' },
    { id: 'pastas-casa', cats: ['platos-fuertes'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Pastas de la casa', nombreEn: 'House pasta',
      desc: 'Pastas de la carta de Triskel, para almorzar en el jardín.',
      descEn: 'Pasta dishes from the Triskel menu, to enjoy for lunch in the garden.',
      fuente: 'Instagram, 29-may-2025' },
    { id: 'infantil-opcion1', cats: ['platos-fuertes'], medico: false, zonas: [], precio: 4500, precioFuente: '',
      foto: '', nombre: 'Menú infantil — opción 1', nombreEn: 'Kids’ Menu — Option 1',
      desc: 'Una proteína a elegir (lomito de res, pollo a la plancha o salmón) con dos guarniciones: arroz blanco, papas fritas, ensalada o puré.',
      descEn: 'One protein of choice (beef tenderloin, grilled chicken, or salmon) with two sides: white rice, French fries, salad, or mashed potatoes.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'infantil-opcion2', cats: ['platos-fuertes'], medico: false, zonas: [], precio: 3800, precioFuente: '',
      foto: '', nombre: 'Menú infantil — opción 2', nombreEn: 'Kids’ Menu — Option 2',
      desc: 'Pasta con salsa de tomate y queso, o pasta con mantequilla y queso.',
      descEn: 'Pasta with tomato sauce and cheese, or pasta with butter and cheese.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },

    // — Café y bebidas —
    { id: 'cafe-especialidad', cats: ['bebidas'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Café de especialidad', nombreEn: 'Specialty coffee',
      desc: 'Espresso ₡1.650 · Americano ₡1.650 · Café goteado costarricense ₡1.700 · Latte ₡2.100 · Capuccino ₡2.400 · Mocca ₡2.450 · Chocolate caliente Sibö ₡2.700.',
      descEn: 'Espresso ₡1,650 · Americano ₡1,650 · Costa Rican drip coffee ₡1,700 · Latte ₡2,100 · Capuccino ₡2,400 · Mocca ₡2,450 · Hot chocolate Sibö ₡2,700.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'gin-tonic', cats: ['bebidas'], medico: false, zonas: [], precio: 4700, precioFuente: '',
      foto: '', nombre: 'Gin Tonic Triskel', nombreEn: 'Triskel Gin & Tonic',
      desc: 'Coctel de la casa, parte de la carta de bebidas.',
      descEn: 'House cocktail, part of the drinks list.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'mimosa', cats: ['bebidas'], medico: false, zonas: [], precio: 3700, precioFuente: '',
      foto: '', nombre: 'Mimosa', nombreEn: 'Mimosa',
      desc: 'Parte de la carta de bebidas de Triskel.', descEn: 'Part of the Triskel drinks list.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'sangria', cats: ['bebidas'], medico: false, zonas: [], precio: 4700, precioFuente: '',
      foto: '', nombre: 'Sangría', nombreEn: 'Sangria',
      desc: 'Parte de la carta de bebidas de Triskel.', descEn: 'Part of the Triskel drinks list.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'mojito', cats: ['bebidas'], medico: false, zonas: [], precio: 4700, precioFuente: '',
      foto: '', nombre: 'Mojito', nombreEn: 'Mojito',
      desc: 'Parte de la carta de bebidas de Triskel.', descEn: 'Part of the Triskel drinks list.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'margarita', cats: ['bebidas'], medico: false, zonas: [], precio: 4700, precioFuente: '',
      foto: '', nombre: 'Margarita', nombreEn: 'Margarita',
      desc: 'Parte de la carta de bebidas de Triskel.', descEn: 'Part of the Triskel drinks list.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'vino-triskel', cats: ['bebidas'], medico: false, zonas: [], precio: 3700, precioFuente: '',
      foto: '', nombre: 'Copa o botella de vino', nombreEn: 'Glass or Bottle of Wine',
      desc: 'Copa ₡3.700 · Botella ₡15.000.', descEn: 'Glass ₡3,700 · Bottle ₡15,000.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'cervezas-jugos', cats: ['bebidas'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Cervezas, jugos y gaseosas', nombreEn: 'Beer, Juices & Sodas',
      desc: 'Imperial o Pilsen ₡1.900 · Bavaria ₡2.100 · Jugos naturales, té helado o fruta de temporada ₡1.600 · Gaseosas ₡1.800.',
      descEn: 'Imperial or Pilsen ₡1,900 · Bavaria ₡2,100 · Natural juices, iced tea, or seasonal fruit ₡1,600 · Sodas ₡1,800.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'leche-de-burra', cats: ['bebidas'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: 'img/servicios/leche-de-burra.jpg', nombre: 'Leche de burra costarricense (menú especial)', nombreEn: 'Costa Rican "Leche de Burra" (special menu)',
      desc: 'Sirope de coco, guaro de caña, leche condensada y leche evaporada. Parte del menú especial del mes patrio.',
      descEn: 'Coconut syrup, sugarcane liquor, condensed milk, and evaporated milk. Part of this month’s Independence Day special menu.',
      fuente: 'Instagram, 4-sep-2026 (menú especial vigente)' },

    // — Postres —
    { id: 'crumble-tibio', cats: ['postres'], medico: false, zonas: [], precio: 4600, precioFuente: '',
      foto: '', nombre: 'Crumble tibio con helado', nombreEn: 'Warm Crumble with Ice Cream',
      desc: 'Crumble estilo alemán relleno de coco y nueces, con helado de vainilla y caramelo.',
      descEn: 'German-style crumble filled with coconut and nuts, served with vanilla ice cream and caramel.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'cheesecake-limon-arandanos', cats: ['postres'], medico: false, zonas: [], precio: 4900, precioFuente: '',
      foto: '', nombre: 'Cheesecake de limón y arándanos', nombreEn: 'Lemon & Blueberry Cheesecake',
      desc: 'Con compota de arándanos y merengue.', descEn: 'Served with blueberry compote and meringue.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'torta-chilena', cats: ['postres'], medico: false, zonas: [], precio: 4550, precioFuente: '',
      foto: '', nombre: 'Torta chilena', nombreEn: 'Torta Chilena',
      desc: 'Capas crocantes rellenas de dulce de leche y frutas de temporada, cubiertas con merengue.',
      descEn: 'Crispy pastry shell filled with dulce de leche, fresh seasonal fruits, and topped with meringue.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'brownie-caramelo', cats: ['postres'], medico: false, zonas: [], precio: 4500, precioFuente: '',
      foto: '', nombre: 'Brownie de caramelo', nombreEn: 'Caramel Brownie',
      desc: 'Brownie clásico, servido con helado.', descEn: 'Classic brownie, served with ice cream.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'pie-manzana-berries', cats: ['postres'], medico: false, zonas: [], precio: 4500, precioFuente: '',
      foto: '', nombre: 'Pie de manzana y berries', nombreEn: 'Apple & Berry Pie',
      desc: 'Manzana casera, frutos rojos y jengibre, servido con helado.',
      descEn: 'Homemade apple, red berry, and ginger pie, served with ice cream.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'croissant-naranja', cats: ['postres'], medico: false, zonas: [], precio: 4700, precioFuente: '',
      foto: '', nombre: 'Croissant de naranja', nombreEn: 'Orange Croissant',
      desc: 'Relleno de crema pastelera de naranja, fresas, naranja confitada y chocolate.',
      descEn: 'Filled with orange pastry cream, strawberries, candied orange, and chocolate.',
      fuente: 'Menú de Triskel (Google), revisado 23-sep-2026' },
    { id: 'tamal-maicena', cats: ['postres'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Tamal de maicena (menú especial)', nombreEn: 'Cornstarch Tamal (special menu)',
      desc: 'Acompañado con helado de coco. Parte del menú especial del mes patrio.',
      descEn: 'Served with coconut ice cream. Part of this month’s Independence Day special menu.',
      fuente: 'Instagram, 4-sep-2026 (menú especial vigente)' },
    { id: 'flan-maiz-morado', cats: ['postres'], medico: false, zonas: [], precio: null, precioFuente: '',
      foto: '', nombre: 'Flan de maíz morado', nombreEn: 'Purple Corn Flan', flag: 'flanMaizMorado',
      desc: 'Con miel de tapa y marañón caramelizado: un homenaje a la tradición guanacasteca con ingredientes costarricenses.',
      descEn: 'With tapa de dulce honey and caramelized cashew: a tribute to Guanacaste tradition made with Costa Rican ingredients.',
      fuente: 'Instagram, 20-jul-2025 (postre de temporada de julio 2025: confirmar si vuelve a repetirse)' }
  ],

  /* ---------- Marcas y tecnologías: sin material para este rubro ---------- */
  tecnologias: [],

  /* ---------- Paquetes: propuestas nuevas, combinan platillos existentes ---------- */
  paquetes: [
    { id: 'brunch-dos', tipo: 'propuesto', confirmado: false, precio: null,
      fuente: 'Propuesta de Axel Sites: perfiles de pareja (San Valentín, feb-2026) × carta actual',
      nombre: 'Brunch para dos', nombreEn: 'Brunch for Two',
      para: 'Parejas que buscan un brunch tranquilo en el jardín.', paraEn: 'Couples looking for a relaxed brunch in the garden.',
      incluye: ['french-toast', 'cafe-especialidad'] },
    { id: 'celebracion-jardin', tipo: 'propuesto', confirmado: false, precio: null,
      fuente: 'Propuesta de Axel Sites: publicación de compromiso (01-feb-2026) y "perfectos para compartir" (10-dic-2025)',
      nombre: 'Celebración en el jardín', nombreEn: 'Garden Celebration',
      para: 'Cumpleaños, compromisos y reuniones pequeñas.', paraEn: 'Birthdays, engagements and small gatherings.',
      incluye: ['cazuela-queso', 'pastas-casa', 'gin-tonic', 'torta-chilena'] }
  ],

  /* ---------- Club Triskel: PROPUESTA sin cuota (typical en restaurantes) ---------- */
  membresias: [
    { id: 'club', precio: 0, destacado: true, cinta: 'Sin costo', cintaEn: 'No cost',
      nombre: 'Socio del jardín', nombreEn: 'Garden Regular',
      lema: 'Para quienes vuelven seguido al jardín', lemaEn: 'For those who keep coming back to the garden',
      incluye: ['Prioridad para reservar mesa en el jardín los fines de semana'],
      incluyeEn: ['Priority for garden table reservations on weekends'],
      beneficios: ['Acceso anticipado al menú de temporada', 'Un detalle en tu cumpleaños', 'Invitación a eventos privados de Triskel'],
      beneficiosEn: ['Early access to the seasonal menu', 'A treat on your birthday', 'Invitations to Triskel private events'] }
  ],

  /* ---------- Tarjeta de regalo: ids de platillos o paquetes existentes ---------- */
  regalo: { opciones: ['brunch-dos', 'celebracion-jardin'] },

  /* ---------- Galería: fotos propias de Instagram (@triskelcafejardin) ----------
     Sin fotos del espacio (jardín, mesas, fachada) todavía: solo platillos. Ver PENDIENTES-CLIENTE.md. */
  galeriaGrupos: {
    brunch: ['Brunch', 'Brunch'],
    'platos-fuertes': ['Platos fuertes', 'Main dishes'],
    bebidas: ['Bebidas', 'Drinks']
  },
  galeria: [
    { src: 'img/galeria/brunch-plato.jpg', cat: 'brunch', titulo: 'Brunch de fin de semana', tituloEn: 'Weekend brunch',
      fuente: 'Instagram, 17-ago-2025' },
    { src: 'img/galeria/ceviche-vegetariano.jpg', cat: 'platos-fuertes', titulo: 'Ceviche Vegetariano', tituloEn: 'Vegetarian Ceviche',
      fuente: 'Instagram, 4-sep-2026' },
    { src: 'img/galeria/pozol-cremoso.jpg', cat: 'platos-fuertes', titulo: 'Pozol Cremoso', tituloEn: 'Creamy Pozol',
      fuente: 'Instagram, 4-sep-2026' },
    { src: 'img/galeria/tortas-de-yuca.jpg', cat: 'brunch', titulo: 'Tortas de yuca', tituloEn: 'Yuca cakes',
      fuente: 'Instagram, 4-sep-2026' },
    { src: 'img/galeria/leche-de-burra.jpg', cat: 'bebidas', titulo: 'Leche de burra costarricense', tituloEn: 'Costa Rican “leche de burra”',
      fuente: 'Instagram, 4-sep-2026' }
  ],

  /* ---------- Cotizador: reservas y eventos privados en el jardín ---------- */
  cotizador: {
    areas: [
      { id: 'brunch', icono: 'i-coffee', nombre: 'Brunch y comidas', nombreEn: 'Brunch & dining',
        zonas: ['jardin'],
        objetivos: [
          { id: 'finde', claves: 'brunch desayuno tostadas huevos jugo cafe waffles', nombre: 'Brunch de fin de semana', nombreEn: 'Weekend brunch',
            servicios: ['french-toast', 'huevos-rancheros', 'waffles-triskel', 'tortas-de-yuca', 'cafe-especialidad'] },
          { id: 'almuerzo', claves: 'almuerzo sandwich pasta cazuela comida ceviche pozol', nombre: 'Almuerzo entre semana', nombreEn: 'Weekday lunch',
            servicios: ['sandwich-pollo-triskel', 'sandwich-manzana-queso', 'sandwich-res', 'cazuela-queso', 'pastas-casa', 'pozol-cremoso', 'ceviche-vegetariano'] },
          { id: 'cafe', claves: 'cafe bebida coctel tarde gin tonic vino', nombre: 'Café o algo de tomar', nombreEn: 'Coffee or a drink',
            servicios: ['cafe-especialidad', 'gin-tonic', 'mimosa', 'sangria', 'vino-triskel', 'leche-de-burra'] }
        ] },
      { id: 'evento', icono: 'i-sparkle', nombre: 'Celebración o evento privado', nombreEn: 'Celebration or private event',
        zonas: ['jardin'],
        objetivos: [
          { id: 'cumple', claves: 'cumpleanos fiesta cumple postre torta', nombre: 'Cumpleaños', nombreEn: 'Birthday',
            servicios: ['cazuela-queso', 'pastas-casa', 'gin-tonic', 'torta-chilena', 'brownie-caramelo'] },
          { id: 'compromiso', claves: 'compromiso aniversario romantico pareja propuesta', nombre: 'Compromiso o aniversario', nombreEn: 'Engagement or anniversary',
            servicios: ['gin-tonic', 'sangria', 'mimosa', 'cheesecake-limon-arandanos', 'leche-de-burra'] },
          { id: 'grupo', claves: 'grupo empresa corporativo equipo reunion', nombre: 'Grupo o empresa', nombreEn: 'Group or company',
            servicios: ['pastas-casa', 'sandwich-pollo-triskel', 'cazuela-queso', 'pozol-cremoso'] }
        ] }
    ],
    presupuestos: [
      { id: 'p1', nombre: 'Hasta ₡10.000 por persona', nombreEn: 'Up to ₡10,000 per person' },
      { id: 'p2', nombre: '₡10.000 a ₡20.000 por persona', nombreEn: '₡10,000 to ₡20,000 per person' },
      { id: 'p3', nombre: '₡20.000 a ₡35.000 por persona', nombreEn: '₡20,000 to ₡35,000 per person' },
      { id: 'p4', nombre: 'Más de ₡35.000 por persona', nombreEn: 'Over ₡35,000 per person' },
      { id: 'p0', nombre: 'Prefiero que me asesoren', nombreEn: 'I’d like advice' }
    ],
    cuando: [
      ['Esta semana', 'This week'], ['Este mes', 'This month'],
      ['En los próximos meses', 'In the coming months'], ['Solo estoy cotizando', 'Just comparing prices']
    ]
  }
};

/* --------------------------------------------------------------------------
   2) IDIOMA — el HTML viene en español; i18n.js cambia a inglés
   -------------------------------------------------------------------------- */
function esEN(){ return document.documentElement.lang === 'en'; }
/* Devuelve el texto en el idioma activo: L('Hola', 'Hi') o L(obj, 'nombre') */
function L(a, b){
  if (a && typeof a === 'object'){ return (esEN() && a[b + 'En']) ? a[b + 'En'] : a[b]; }
  return esEN() && b ? b : a;
}

/* --------------------------------------------------------------------------
   3) UTILIDADES
   -------------------------------------------------------------------------- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  });
}
function colones(n){
  const sep = esEN() ? ',' : '.';
  return '₡' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}
function icono(id, clase){
  return '<svg' + (clase ? ' class="' + clase + '"' : '') + ' aria-hidden="true"><use href="#' + id + '"/></svg>';
}
function servicioPorId(id){
  return NEGOCIO.servicios.filter(function(s){ return s.id === id; })[0] || null;
}
function zonaNombre(id){
  const z = NEGOCIO.zonas[id];
  return z ? (esEN() ? z[1] : z[0]) : id;
}

const MESES = {
  es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre'],
  en: ['January','February','March','April','May','June','July','August','September','October','November','December']
};
const DIAS = {
  es: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
  en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
};
function fechaLarga(d){
  const k = esEN() ? 'en' : 'es';
  return esEN()
    ? DIAS.en[d.getDay()] + ', ' + MESES.en[d.getMonth()] + ' ' + d.getDate()
    : DIAS.es[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[k][d.getMonth()];
}
/* "19:00" -> "7 p. m." / "7 p.m." */
function hora12(hhmm){
  const p = hhmm.split(':'), h = parseInt(p[0], 10), m = p[1];
  const h12 = ((h + 11) % 12) + 1;
  const suf = h < 12 ? (esEN() ? 'a.m.' : 'a. m.') : (esEN() ? 'p.m.' : 'p. m.');
  return h12 + (m !== '00' ? ':' + m : '') + ' ' + suf;
}

/* --------------------------------------------------------------------------
   4) HORARIO — hora de Costa Rica (UTC-6, sin horario de verano)
   -------------------------------------------------------------------------- */
function ahoraCR(){
  const d = new Date();
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 - 6 * 3600000);
}
function estadoHorario(){
  const h = NEGOCIO.horario;
  if (!h || !h.length) return null;
  const now = ahoraCR();
  const min = now.getHours() * 60 + now.getMinutes();
  const aMin = function(s){ const p = s.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
  const hoy = h.filter(function(x){ return x.dia === now.getDay(); })[0];
  if (hoy && min >= aMin(hoy.abre) && min < aMin(hoy.cierra)){
    return { abierto: true, texto: L('Abierto ahora · cierra a las ', 'Open now · closes at ') + hora12(hoy.cierra) };
  }
  if (hoy && min < aMin(hoy.abre)){
    return { abierto: false, texto: L('Cerrado · abre hoy a las ', 'Closed · opens today at ') + hora12(hoy.abre) };
  }
  for (let i = 1; i <= 7; i++){
    const dia = (now.getDay() + i) % 7;
    const sig = h.filter(function(x){ return x.dia === dia; })[0];
    if (sig){
      const cuando = i === 1 ? L('mañana', 'tomorrow') : (esEN() ? 'on ' + DIAS.en[dia] : 'el ' + DIAS.es[dia]);
      return { abierto: false, texto: L('Cerrado · abre ', 'Closed · opens ') + cuando + L(' a las ', ' at ') + hora12(sig.abre) };
    }
  }
  return null;
}

/* --------------------------------------------------------------------------
   5) WHATSAPP — mensajes contextuales, nunca "Hola, quiero información"
   data-wa="mensaje en español"  data-wa-en="message in English"
   -------------------------------------------------------------------------- */
function waLink(mensaje){
  return 'https://wa.me/' + NEGOCIO.whatsapp + '?text=' + encodeURIComponent(mensaje);
}
function initWhatsApp(root){
  (root || document).querySelectorAll('[data-wa]').forEach(function(el){
    const msg = (esEN() && el.dataset.waEn) ? el.dataset.waEn : el.dataset.wa;
    el.setAttribute('href', waLink(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
}

/* --------------------------------------------------------------------------
   6) REGISTRO DE SOLICITUDES — con origen (UTM, gclid, referente)
   Si NEGOCIO.endpoint está vacío devuelve null: nunca finge que se guardó.
   -------------------------------------------------------------------------- */
function origenVisita(){
  const q = new URLSearchParams(location.search);
  const o = { pagina: location.pathname, referente: document.referrer || '' };
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(function(k){
    if (q.get(k)) o[k] = q.get(k);
  });
  try {
    const guardado = JSON.parse(sessionStorage.getItem('sitio_origen') || 'null');
    if (guardado && !o.utm_source) Object.keys(guardado).forEach(function(k){ if (!o[k]) o[k] = guardado[k]; });
    if (o.utm_source || o.gclid || o.fbclid) sessionStorage.setItem('sitio_origen', JSON.stringify(o));
  } catch (e) { /* almacenamiento bloqueado: se usa solo lo de esta visita */ }
  return o;
}
function registrarSolicitud(tipo, datos){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'solicitud_' + tipo, servicio: datos.servicio || '' });
  if (!NEGOCIO.endpoint) return Promise.resolve(null);
  const cuerpo = Object.assign({ tipo: tipo, fecha: new Date().toISOString(), idioma: document.documentElement.lang, origen: origenVisita() }, datos);
  return fetch(NEGOCIO.endpoint, {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, NEGOCIO.headers || {}),
    body: JSON.stringify(cuerpo)
  }).then(function(r){ return r.ok; }).catch(function(){ return false; });
}

/* --------------------------------------------------------------------------
   7) PLACEHOLDERS DE FOTOGRAFÍA
   <img data-ph="Recepción" src="img/recepcion.jpg">
   El marcador se dibuja primero y se retira en cuanto la foto carga bien.
   Con loading="lazy" el navegador puede no intentar la descarga, el evento
   "error" no llega, y el hueco quedaría vacío: por eso este orden.
   -------------------------------------------------------------------------- */
const PH_ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5.5-5.5L7 19"/></svg>';

function initPlaceholders(root){
  (root || document).querySelectorAll('img[data-ph]').forEach(function(img){
    if (img.dataset.phInit) return;
    img.dataset.phInit = '1';
    if (!img.parentNode) return;
    const box = document.createElement('div');
    box.className = 'ph';
    box.innerHTML = PH_ICON + '<b>' + L('Fotografía pendiente', 'Photo pending') + '</b><span>' + esc(img.dataset.ph || '') + '</span>';
    img.parentNode.insertBefore(box, img);
    const cargo = function(){ if (img.naturalWidth > 0){ box.remove(); img.style.display = ''; } };
    if (img.complete) cargo();
    img.addEventListener('load', cargo);
    img.addEventListener('error', function(){ img.style.display = 'none'; });
  });
}

/* --------------------------------------------------------------------------
   8) HEADER / MENÚ / ANIMACIONES
   -------------------------------------------------------------------------- */
function initHeader(){
  const hdr = document.querySelector('.hdr');
  if (hdr){
    const onScroll = function(){ hdr.classList.toggle('is-stuck', window.scrollY > 12); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (!burger || !nav) return;
  const cerrar = function(){
    nav.classList.remove('is-open'); burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', L('Abrir menú', 'Open menu'));
    document.body.style.overflow = '';
  };
  burger.addEventListener('click', function(){
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? L('Cerrar menú', 'Close menu') : L('Abrir menú', 'Open menu'));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open){ const first = nav.querySelector('a'); if (first) first.focus(); }
  });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', cerrar); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('is-open')){ cerrar(); burger.focus(); }
  });
  window.addEventListener('resize', function(){ if (window.innerWidth > 980 && nav.classList.contains('is-open')) cerrar(); });
}

function initReveal(){
  const items = document.querySelectorAll('.rv:not(.in)');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)){ items.forEach(function(el){ el.classList.add('in'); }); return; }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      const d = e.target.dataset.delay || 0;
      setTimeout(function(){ e.target.classList.add('in'); }, d);
      io.unobserve(e.target);
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function(el){ io.observe(el); });
}

/* --------------------------------------------------------------------------
   9) DATOS Y ENLACES DESDE NEGOCIO
   data-neg="telefono"     -> escribe el texto (usa campoEn en inglés si existe)
   data-href="instagram"   -> tel:, mailto:, o URL; dato vacío = se oculta
   data-requiere="email"   -> oculta el bloque completo si el dato está vacío
   -------------------------------------------------------------------------- */
function initDatos(){
  document.querySelectorAll('[data-neg]').forEach(function(el){
    const v = L(NEGOCIO, el.dataset.neg);
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-requiere]').forEach(function(el){
    if (!NEGOCIO[el.dataset.requiere]) el.hidden = true;
  });
  document.querySelectorAll('[data-href]').forEach(function(el){
    const k = el.dataset.href;
    let v = NEGOCIO[k];
    if (k === 'tel') v = NEGOCIO.telefonoHref ? 'tel:' + NEGOCIO.telefonoHref : '';
    else if (k === 'email') v = NEGOCIO.email ? 'mailto:' + NEGOCIO.email : '';
    else if (k === 'resenas') v = NEGOCIO.googlePlaceId ? 'https://search.google.com/local/reviews?placeid=' + NEGOCIO.googlePlaceId : '';
    else if (k === 'escribir-resena') v = NEGOCIO.googlePlaceId ? 'https://search.google.com/local/writereview?placeid=' + NEGOCIO.googlePlaceId : '';
    else if (k === 'waze') v = NEGOCIO.lat ? 'https://waze.com/ul?ll=' + NEGOCIO.lat + ',' + NEGOCIO.lng + '&navigate=yes' : '';
    if (!v){ el.hidden = true; return; }
    el.setAttribute('href', v);
    if (/^https?:/.test(v)){ el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
  });
  document.querySelectorAll('[data-year]').forEach(function(y){ y.textContent = new Date().getFullYear(); });
}

document.addEventListener('DOMContentLoaded', function(){
  origenVisita();
  initDatos();
  initWhatsApp();
  initPlaceholders();
  initHeader();
  initReveal();
});
