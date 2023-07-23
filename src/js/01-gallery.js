// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageListArr = galleryItems
  .map((image, index) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" data-index=${index} src="${image.preview}" alt="${image.description}"></a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", imageListArr);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
