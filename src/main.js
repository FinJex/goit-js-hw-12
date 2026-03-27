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
const btnLoadMore = document.querySelector(`.ooButton`);
const form = document.querySelector(`.form`);
const gallery = document.querySelector(".gallery");
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
     const data = await api.getImagesByQuery(query, page);
    if (data.hits.length === 0) {
    iziToast.error({
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight"
    }); 
    return;
  }
  render.createGallery(data.hits);
  totalPages = Math.ceil(data.totalHits / PER_PAGE);
  if (totalPages === 1) {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: "topRight",
  });
}
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



btnLoadMore.addEventListener(`click`, async () => {
  if (!query) return;

  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await api.getImagesByQuery(query, page);

    render.createGallery(data.hits);


    const elem = gallery.lastElementChild;

    if (elem) {
      const height = elem.getBoundingClientRect().height;

      window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
    }


    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      checkBtnStatus(page, totalPages);
    }

  } catch (error) {
    page -= 1; 

    iziToast.error({
      message: `Error: ${error}`,
      position: "topRight",
    });

  } finally {
    hideLoader(); 
  }
});