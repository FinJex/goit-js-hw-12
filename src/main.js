import * as api from "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";
import { clearGallery } from "./js/render-functions.js";
import { showLoader } from "./js/render-functions.js";
import { hideLoader } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const query = data.get(`search-text`);
    if (!query.trim()) return;
    clearGallery();
    showLoader();
     api.getImagesByQuery(query)
    .then(images =>  { 
                if (images.length === 0) {
    iziToast.error({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight"
    }); return;
  }; 
  render.createGallery(images);
      form.reset();
    })
  .catch(err => {
    iziToast.error({
      message: `Error: ${err}`,
      position: "topRight"
    });
  })
  .finally(() => {
    hideLoader(); 
  });
  });



