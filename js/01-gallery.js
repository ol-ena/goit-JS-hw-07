
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((element) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
    />
    </a>
    </div>`)
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", selectImg);
function selectImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
    const selectedImg = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`)
  instance.show()
  }
