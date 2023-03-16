// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

registrarEventListeners();
function registrarEventListeners() {
  //Cuando agregas un curso presionando "AGREGAR AL CARRITO"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}
 

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h2').textContent,
        precio: curso.querySelector('.precios span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito en el HTML
function carritoHTML() {

  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach( curso => {
      console.log(curso);
      const row = document.createElement('tr');
      row.innerHTML = `
      <td> <img src="${curso.imagen}" width="75"> </td>
      <td> ${curso.titulo} </td>
      <td> ${curso.precio} </td>
      <td> ${curso.cantidad} </td>
    `;

    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos del tbody
function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = '';

  while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}