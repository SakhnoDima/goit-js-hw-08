// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
// console.log(galleryItems);
const refs = {
    galleryBoxElem : document.querySelector(".gallery"),
}

function createGalleryItems (params) {
    return params
    .map( ( { description, original, preview})  => {
return `
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>

`;
})
.join("");
}

const imageGallery = createGalleryItems(galleryItems);
refs.galleryBoxElem.innerHTML = imageGallery;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:	'alt',
    captionPosition:  'bottom',
    captionDelay:	250,
});