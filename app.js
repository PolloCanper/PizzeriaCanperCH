const productos = [
// PRINCIPAL
  {
    nombre: "Pizza Pepperoni",
    precio: 185,
    imagen: "./jpg/pizza-pepperoni.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza hawaiana",
    precio: 198,
    imagen: "./jpg/pz_hawa.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza tres carnes",
    precio: 235,
    imagen: "./jpg/pz_3_car.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Flamin Hot",
    precio: 285,
    imagen: "./jpg/pz_flm_hot.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Especial",
    precio: 285,
    imagen: "./jpg/pz_especial.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Suprema",
    precio: 285,
    imagen: "./jpg/pz_supre.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza con Boneless",
    precio: 285,
    imagen: "./jpg/pz_boneless.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Italiana",
    precio: 225,
    imagen: "./jpg/pz_ital.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Doble Sabor",
    precio: 215,
    imagen: "./jpg/pz_2ble_sabor.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Cuatro Estaciones",
    precio: 225,
    imagen: "./jpg/pz_4.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Vegana",
    precio: 195,
    imagen: "./jpg/pz_veg.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Duo Champiñon",
    precio: 225,
    imagen: "./jpg/pz_duo_champ.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Carne Asada",
    precio: 280,
    imagen: "./jpg/pz_car_asada.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza Duo Suprema",
    precio: 245,
    imagen: "./jpg/pz_duo_supr.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni con Jalapeño",
    precio: 200,
    imagen: "./jpg/pz_pep_jal.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni-Hawaiana",
    precio: 210,
    imagen: "./jpg/pep_hawai.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni Salchicha Italiana",
    precio: 215,
    imagen: "./jpg/pep_salch_it.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni Tres Carnes",
    precio: 220,
    imagen: "./jpg/pep_3_carn.jpg",
    categoria: "principal"
  },
  {
    nombre: "Pizza de Queso",
    precio: 170,
    imagen: "./jpg/pz_queso.jpg",
    categoria: "principal"
  },
// ENTRADA
  {
    nombre: "Alitas Picositas",
    precio: 150,
    imagen: "./jpg/ali_picosi.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Boneless",
    precio: 140,
    imagen: "./jpg/boneles.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Aros de Cebolla",
    precio: 85,
    imagen: "./jpg/aro_cebolla.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Dedos de Queso",
    precio: 130,
    imagen: "./jpg/dedos_queso.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Papas con Queso y Tocino",
    precio: 115,
    imagen: "./jpg/pps_c_queso.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Papas con Boneless",
    precio: 185,
    imagen: "./jpg/papas_c_bon.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Orden - Pan de Ajo",
    precio: 180,
    imagen: "./jpg/pan_ajo.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Hamburguesa con Papas",
    precio: 125,
    imagen: "./jpg/hamb_c_queso.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Ensalada con Pollo",
    precio: 140,
    imagen: "./jpg/ens_pollo.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Tiras de Pollo",
    precio: 150,
    imagen: "./jpg/tiras_d_pollo.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Camper Box",
    precio: 395,
    imagen: "./jpg/camp_box.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Mega Box",
    precio: 480,
    imagen: "./jpg/M_camp_box.jpg",
    categoria: "entrada"
  },
  {
    nombre: "Pasta Alfredo",
    precio: 85,
    imagen: "./jpg/pasta_alf.jpg",
    categoria: "entrada"
  },
// BEBIDAS

  {
    nombre: "Agua Natural",
    precio: 50,
    imagen: "./jpg/bebida2.jpg",
    categoria: "bebida"
  },
  {
    nombre: "Coca-Cola",
    precio: 35,
    imagen: "./jpg/bebida3.jpg",
    categoria: "bebida"
  },
  {
    nombre: "Coca-Cola 2L",
    precio: 55,
    imagen: "./jpg/coca2l.png",
    categoria: "bebida"
  },
  {
    nombre: "Jumex",
    precio: 25,
    imagen: "./jpg/jumex_du.png",
    categoria: "bebida"
  },
  {
    nombre: "Power",
    precio: 35,
    imagen: "./jpg/power.png",
    categoria: "bebida"
  },
  {
    nombre: "Tea",
    precio: 35,
    imagen: "./jpg/fuestea.png",
    categoria: "bebida"
  },
  {
    nombre: "Frape capuchino",
    precio: 50,
    imagen: "./jpg/fra_chin.png",
    categoria: "bebida"
  },
  {
    nombre: "Frape de vainilla",
    precio: 50,
    imagen: "./jpg/fra_nilla.png",
    categoria: "bebida"
  },
  {
    nombre: "Dr.Pepper",
    precio: 20,
    imagen: "./jpg/dpep.png",
    categoria: "bebida"
  },
  {
    nombre: "Jugos Vida",
    precio: 20,
    imagen: "./jpg/jumex_vi.png",
    categoria: "bebida"
  },
    {
    nombre: "Malteada",
    precio: 75,
    imagen: "./jpg/helado.png",
    categoria: "bebida"
  },
];

function crearCard(producto) {
  return `
    <div class="card">
      <img src="${producto.imagen}">
      <div class="card-name">
        ${producto.nombre}
        <p class="precio">$${producto.precio}<span>.00</span></p>
        <button class="btn-agregar"
          data-nombre="${producto.nombre}"
          data-precio="${producto.precio}">
          Agregar a carrito
        </button>
      </div>
    </div>
  `;
}

function renderMenu() {
  const principal = document.getElementById("menu-principal");
  const entradas = document.getElementById("menu-entradas");
  const bebida = document.getElementById("menu-bebidas");

  console.log("principal:", principal);
  console.log("entrada:", entradas);
  console.log("bebida:", bebida);

  productos.forEach(prod => {
    if (prod.categoria === "principal") {
      principal.innerHTML += crearCard(prod);
    } else if (prod.categoria === "entrada") {
      entradas.innerHTML += crearCard(prod);
    } else if (prod.categoria === "bebida") {
      bebida.innerHTML += crearCard(prod);
    }
  });
}

renderMenu();

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-agregar")) {
    console.log("CLICK", e.target.dataset);
    agregarAlCarrito(
      e.target.dataset.nombre,
      Number(e.target.dataset.precio)
    );
  }
});

// ---------------------------------




// ----------------------------------
document.querySelectorAll('.cards').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block'
            ? 'none'
            : 'block';
    });
});

document.getElementById("search").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const nombre = card.innerText.toLowerCase();
    card.style.display = nombre.includes(texto) ? "block" : "none";
  });
});


const toggle = document.querySelector('.toggle-options');
const options = document.querySelector('.options');

toggle.addEventListener('click', ()=>{
  const abierto = options.style.display === 'block';
  options.style.display = abierto ? 'none' : 'block';
  toggle.textContent = abierto ? '+' : '−';
});

let productoSeleccionado = {
    nombre: null,
    precio: null
}

function seleccionarRefresco(img, nombre, precio){
  document.getElementById('img-refresco').src = img;
  document.getElementById('nombre-refresco').innerText = nombre;
  document.getElementById('precio-refresco').innerText = `$${precio}.00`;

  // Guardamos el producto activo
  productoSeleccionado.nombre = nombre;
  productoSeleccionado.precio = precio;

}

function agregarSeleccionAlCarrito(){
  agregarAlCarrito(
    productoSeleccionado.nombre,
    productoSeleccionado.precio
  );
}

function mostrarAdvertencia(texto){
  const mensaje = document.getElementById("mensaje-error");

  mensaje.innerText = texto;
  mensaje.classList.add("mostrar");

  setTimeout(() => {
    mensaje.classList.remove("mostrar");
  }, 2000); // visible 2 segundos
}
