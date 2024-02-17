import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    let li= `
    <li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </li>
    `;
    gallery.innerHTML += li; 
});

gallery.addEventListener('click', imageClick)

function imageClick(e){
    if (e.target.tagName === "IMG"){
        let originalImg = e.target.getAttribute("data-source");
        const instance = basicLightbox.create(`<img src="${originalImg}" width ="800" height ="600"/>`);
        instance.show();

        const escapeListener = function(event) {
            if (event.key === "Escape") {
                instance.close();
            }
        };

        document.addEventListener('keydown', escapeListener);

        // Remove the keyboard listener when the lightbox is closed
        instance.events.on('close', function() {
            document.removeEventListener('keydown', escapeListener);
        });
    }
}