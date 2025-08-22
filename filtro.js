//observaciones 
// lista de productos (zapatos)?

//  debe permitir filtrarlos por color, tipo o nombre usando un input y un botón
//  no funciona el boton
//  no muestra los productos en la pagina 


// Tenemos definidos los productos en un div en html, en js en un []

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//llamas elementos con DOM
//se cambia getElementsByName por getElementsById
const listaProductos = document.getElementById("lista-de-productos")
//const $i = document.querySelector('.input');
//en html es una etiquet input pero no esta bien definido este DOM
const $i = document.querySelector('input[type="text"]');
// Se manda llamar al boton desde html, esta definida abajo no al inicio
const botonDeFiltro = document.querySelector("button");

// Función para mostrar productos, no estaba definida solo tenia condicional for
function mostrarProductos(lista) {
  listaProductos.innerHTML = ""; 
for (let i = 0; i < lista.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = lista[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', lista[i].img);
    imagen.setAttribute('alt', lista[i].nombre); // no venia, solo estaba el de img

    d.appendChild(ti);
    d.appendChild(imagen);

    listaProductos.appendChild(d);
  }
}


// antes: displayProductos(productos) (no existía esa función, solo el for de la funcion)
// ahora: mostrarProductos(productos)
mostrarProductos(productos);

// Evento del botón
botonDeFiltro.onclick = function() {
 
  listaProductos.innerHTML = ""; 

  const texto = ($i.value || "").toLowerCase().trim(); // antes no tenía toLowerCase ni trim
  const productosFiltrados = filtrado(productos, texto);

  mostrarProductos(productosFiltrados);
};

// Función de filtrado
const filtrado = (productos = [], texto) => {
  if (!texto) return productos.slice(); 

  return productos.filter(item => {
    const tipo = (item.tipo || "").toLowerCase();   
    const color = (item.color || "").toLowerCase(); 
    const nombre = (item.nombre || "").toLowerCase(); 
    return tipo.includes(texto) || color.includes(texto) || nombre.includes(texto);
  });
};