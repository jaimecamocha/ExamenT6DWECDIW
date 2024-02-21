// JAIME FERNÁNDEZ CALVO
//

// selectores
const listasUl = document.querySelectorAll(".imgGaleria");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// creación de los "list items" donde colocaremos las imágenes
function crearElementoLi(imagenSrc) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = imagenSrc;
  img.addEventListener("click", () => {
    abrirLightbox(
      imagenSrc.replace("/peque/", "/grande/").replace(".jpg", ".png")
    ); //reemplazo de las imágenes pequeñas por las grandes al hacer click en ellas
  });
  li.appendChild(img);
  return li;
}

// lightbox que hace que cuando se hace click en una imagen se abra la de mayor tamaño
function abrirLightbox(imagenSrc) {
  lightboxImg.src = imagenSrc;
  lightbox.style.display = "block";
  document.body.style.overflow = "hidden";
}

// evento para cerrar la lightbox
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("close")) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// inserción de las imágenes en los "list items" anteriores
for (let i = 1; i <= 6; i++) {
  const imagenSrc = `assets/imgs/peque/${i}.jpg`;
  const li = crearElementoLi(imagenSrc);

  listasUl[i - 1].appendChild(li);
}
