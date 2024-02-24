
const carritoCountSpan = document.getElementById('carrito-count');

//variable para contar productos
let carritoCount = 0;

//agregar al carrito
function addToCart() {
    carritoCount++;
    updateCartCount();
}

//actualizar carrito
function updateCartCount() {
    carritoCountSpan.textContent = carritoCount;
}


