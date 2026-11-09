/* ============================================================================
   ANUARIO ESCOLAR · AQUÍ SE EDITA TODO
   ============================================================================

   RESEÑA RÁPIDA (léela una vez y listo)
   -------------------------------------
   1. Este es el ÚNICO archivo que necesitas tocar para poner los datos.
   2. Guarda con Ctrl + S y recarga el navegador con F5 para ver los cambios.
   3. Cada texto va entre comillas:   nombre: 'Laura Pérez',
      - Si el texto lleva un apóstrofe (') usa comillas dobles: "D'Angelo"
      - No borres las comas (,) del final de cada línea.
   4. Para dejar algo vacío escribe dos comillas:  frase: '',

   CÓMO AGREGAR UN ESTUDIANTE
   --------------------------
   Más abajo, en la lista  estudiantes: [ ... ],  cada estudiante es un bloque
   entre llaves { ... }.  El PRIMER bloque sale en la página 4, el segundo en la 5,
   y así sucesivamente.  Copia y pega esta plantilla por cada estudiante:

      {
        nombre: 'Nombre Apellido',
        foto: 'img/fotos/nombre.jpg',
        firma: 'img/firmas/nombre.png',
        frase: 'Su frase favorita',
        recuerdo: 'Su recuerdo favorito',
        aspiraciones: ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta'],
        agradecimientos: 'A quién quiere agradecer',
      },

   FOTOS Y FIRMAS
   --------------
   - Guarda las imágenes dentro de la carpeta img (fotos en img/fotos,
     firmas en img/firmas, escudo en img/logo.png).
   - En  foto:  y  firma:  escribe la ruta exacta del archivo, con mayúsculas,
     minúsculas y extensión (.jpg, .png).
   - Si NO escribes foto/firma, el anuario busca solas estas rutas:
         img/fotos/foto-1.jpg   img/firmas/firma-1.png   (1 = primer estudiante)
         img/fotos/foto-2.jpg   img/firmas/firma-2.png   ... y así.
   - Si el archivo no existe, se ve el marco vacío (no se daña nada).
   - Para la firma usa un PNG con fondo transparente; se ve más elegante.

   CUÁNTAS PÁGINAS TIENE
   ---------------------
   Por defecto 32 páginas (26 de estudiantes). Si tienes más de 26 estudiantes,
   las páginas crecen solas. Si tienes menos, quedan páginas con la plantilla vacía.
   Cambia  paginasEstudiantes  si quieres otro mínimo (debe ser un número par).

   COLORES
   -------
   Están en css/base.css, al principio, en la sección  :root { ... }
   ============================================================================ */

const DATOS = {

  /* ---------- GENERAL ---------- */
  colegio:      'Eugenio Ferro Falla',
  logo:         'img/logo.png',            // escudo del colegio
  generacion:   'Generación 2026',
  curso:        'GRADO 1101',
  promocion:    'Prom 2026',
  paginasEstudiantes: 26,                  // mínimo de páginas de estudiantes (número par)

  /* ---------- PORTADA ---------- */
  portada: {
    linea1: 'ANUARIO',
    linea2: 'ESCOLAR',
  },

  /* ---------- BIENVENIDA (página 3) ---------- */
  bienvenida: {
    titulo:    '¡Bienvenidos!',
    subtitulo: 'Un recuerdo para siempre',
    mensaje:
      'Este anuario guarda a cada uno de nosotros: nuestros rostros, nuestras frases y los sueños que nos trajeron hasta aquí.\n' +
      'Que estas páginas nos recuerden quiénes fuimos, y que el mañana nos encuentre siempre juntos.',
  },

  /* ---------- ESTUDIANTES ---------- */
  estudiantes: [

    {
      nombre: 'Laura liney alarcon',
      foto: 'img/carnets/laura alarcon.jpg',
      firma: 'img/firmas/laura alarcon.png',
      frase: 'El que persevera alcanza ',
      recuerdo: 'Haber encontrado una persona realmente leal en mi vida',
      aspiraciones: [
        'enfermera',
        'doctora',
        'ingeniera',
      ],
      agradecimientos: 'Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.',
    },

    {
      nombre: 'Narly lizeth amaya',
      foto: 'img/carnets/2.jpeg',
      firma: 'img/firmas/2.png',
      frase: 'No entendí nada',
      recuerdo: 'Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa',
      aspiraciones: ['Seguir estudiando', 'terminar hasta sacar el tecnólogo', 'trabajar para conseguir mis cosas',],
      agradecimientos: 'A mis padres y a todos los docentes que me acompañaron ',
    },
    {
      nombre: 'Otro Nombre Apellido (ejemplo)',
      foto: 'img/fotos/foto-2.jpg',
      firma: 'img/firmas/firma-2.png',
      frase: 'Con esfuerzo todo se puede.',
      recuerdo: 'La graduación de décimo.',
      aspiraciones: ['', '', '', '', ''],
      agradecimientos: '',
    },
    {
      nombre: 'Otro Nombre Apellido (ejemplo)',
      foto: 'img/fotos/foto-2.jpg',
      firma: 'img/firmas/firma-2.png',
      frase: 'Con esfuerzo todo se puede.',
      recuerdo: 'La graduación de décimo.',
      aspiraciones: ['', '', '', '', ''],
      agradecimientos: '',
    },
    {
      nombre: 'Otro Nombre Apellido (ejemplo)',
      foto: 'img/fotos/foto-2.jpg',
      firma: 'img/firmas/firma-2.png',
      frase: 'Con esfuerzo todo se puede.',
      recuerdo: 'La graduación de décimo.',
      aspiraciones: ['', '', '', '', ''],
      agradecimientos: '',
    },
    

    /* ↓↓↓ Pega aquí abajo la plantilla de cada nuevo estudiante ↓↓↓ */

  ],

  /* ---------- MOMENTOS QUE BRILLAN (6 fotos del salón) ---------- */
  momentosTitulo: 'Momentos que brillan',
  momentos: [
    { foto: 'img/momentos/momento-1.jpg', texto: '' },
    { foto: 'img/momentos/momento-2.jpg', texto: '' },
    { foto: 'img/momentos/momento-3.jpg', texto: '' },
    { foto: 'img/momentos/momento-4.jpg', texto: '' },
    { foto: 'img/momentos/momento-5.jpg', texto: '' },
    { foto: 'img/momentos/momento-6.jpg', texto: '' },
  ],

  /* ---------- ÚLTIMA PÁGINA: FRASE Y AGRADECIMIENTOS ---------- */
  despedida: {
    titulo: 'Hasta siempre, 1101',
    frase: [
      'Un día cerraremos esta puerta por última vez, pero las risas del salón, los abrazos del recreo y los sueños que susurramos juntos seguirán viviendo en estas paredes… y en nuestro corazón.',
      'Hoy nos despedimos del colegio, no de todo lo que fuimos aquí.',
    ],
    fraseFinal: 'Gracias por tanto, 1101. Los vamos a extrañar siempre.',
    agradecimientosTitulo: 'Agradecimientos',
    agradecimientos: [
      'A nuestras familias, por creer en nosotros incluso cuando dudábamos.',
      'A nuestros profesores y directivos, por enseñarnos mucho más que materias.',
      'A cada compañero, por convertir este camino en una aventura.',
      'A la Institución Educativa Eugenio Ferro Falla, nuestro segundo hogar.',
    ],
  },

  /* ---------- CONTRAPORTADA ---------- */
  contraportada: {
    titulo: ['Gracias por ser parte', 'de esta historia'],
    pie:    'Hecho con cariño por los estudiantes de 1101',
  },
};