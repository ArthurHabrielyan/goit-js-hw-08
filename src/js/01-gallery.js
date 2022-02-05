// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>
`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
