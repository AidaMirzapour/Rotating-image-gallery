let imageConteinerEl = document.querySelector(".container");
let previewEl = document.querySelector("#preview");
let nextEl = document.querySelector("#next");

let x = 0;
let timer;
previewEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageConteinerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}
updateGallery();
