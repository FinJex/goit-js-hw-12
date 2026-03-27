import * as api from "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";
import { clearGallery } from "./js/render-functions.js";
import { showLoader } from "./js/render-functions.js";
import { hideLoader } from "./js/render-functions.js";
import { showLoadMoreButton } from "./js/render-functions.js";
import { hideLoadMoreButton } from "./js/render-functions.js";
import { checkBtnStatus } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getBoundingClientRect } from "./js/render-functions.js"
const btnLoadMore = document.querySelector(`.ooButton`);
const form = document.querySelector(`.form`);
const PER_PAGE = 15;
let query;
let page;
let totalPages;
form.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    hideLoadMoreButton();
    const data = new FormData(form);
    query = data.get(`search-text`);
    page=1;
    if (!query.trim()) return;
    clearGallery();
    showLoader();
try{
     const { images, totalHits } = await api.getImagesByQuery(query, page);
    if (images.length === 0) {
    iziToast.error({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight"
    }); 
    return;
  }
  render.createGallery(images);
  totalPages = Math.ceil(totalHits / PER_PAGE);
  checkBtnStatus(page, totalPages);
      form.reset();
} catch(error){
      iziToast.error({
      message: `Error: ${error}`,
      position: "topRight"
    });
} finally{
    hideLoader(); 
  };
  });



btnLoadMore.addEventListener(`click`, async (e) => {
  page+=1;
  hideLoadMoreButton();
  try{
const {images} = await api.getImagesByQuery(query, page);
render.createGallery(images);

getBoundingClientRect();
  }catch(error){
      iziToast.error({
      message: `Error: ${error}`,
      position: "topRight"
    });
  }
  if (page >= totalPages) {
    render.hideLoadMoreButton();

    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: "topRight",
    });

    return;
  }
checkBtnStatus(page, totalPages);
});


