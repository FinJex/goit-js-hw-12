import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(`.gallery`);
const simple = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
}); 

export function createGallery(images) {
gallery.insertAdjacentHTML(`beforeend`, images.map(itemTemplate).join(''));
simple.refresh();
}
 
function itemTemplate(item) {
return ` <li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
          <img
            class="gallery-image"
            src="${item.webformatURL}"
            alt="${item.tags}"
          />
        </a>

        <ul> 
        <li>
        <p>likes</p>
        <p>${item.likes}</p>
         </li>

         <li>
         <p>views</p>
          <p>${item.views}</p>
         </li>

                  <li>
         <p>comments</p>
          <p>${item.comments}</p>
         </li>

                  <li>
         <p>downloads</p>
          <p>${item.downloads}</p>
         </li>


         </ul>
      </li>`;
}
const loader = document.querySelector(".loader");
const ooButton = document.querySelector(".ooButton");
export function clearGallery() {
gallery.innerHTML = "";
}

export function showLoader() {
loader.classList.remove(`hidden`);
}

export function hideLoader() {
loader.classList.add(`hidden`);
}
export function showLoadMoreButton() {
ooButton.classList.remove(`hidden`);
}
export function hideLoadMoreButton() {
ooButton.classList.add(`hidden`);
}
export function checkBtnStatus(page, totalPages) {
  if (page >= totalPages) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}



