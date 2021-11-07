import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((element) => 
`<a class="gallery__item" href="${element.original}">
<img class="gallery__image" src="${element.preview}" alt="${element.description}"  />
</a>
`)
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 }); 