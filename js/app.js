const mostrarParte2Button = document.getElementById("mostrarParte2");
const parte1 = document.querySelector("#primeraCompra1");
const parte2 = document.querySelector("#primera-compra-parte2");

mostrarParte2Button.addEventListener("click", () => {
    parte1.classList.add("mostrar-parte-2");
    parte2.style.transform = "translateX(0%)";
    parte2.style.opacity = "1";
});