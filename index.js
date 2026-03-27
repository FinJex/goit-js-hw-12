import{a as v,S,i}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function f(e,o){try{return(await v.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}catch(r){throw console.error(r),r}}const h=document.querySelector(".gallery"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){h.insertAdjacentHTML("beforeend",e.map($).join("")),q.refresh()}function $(e){return` <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>

        <ul> 
        <li>
        <p>likes</p>
        <p>${e.likes}</p>
         </li>

         <li>
         <p>views</p>
          <p>${e.views}</p>
         </li>

                  <li>
         <p>comments</p>
          <p>${e.comments}</p>
         </li>

                  <li>
         <p>downloads</p>
          <p>${e.downloads}</p>
         </li>


         </ul>
      </li>`}const g=document.querySelector(".loader"),m=document.querySelector(".ooButton");function B(){h.innerHTML=""}function L(){g.classList.remove("hidden")}function w(){g.classList.add("hidden")}function R(){m.classList.remove("hidden")}function c(){m.classList.add("hidden")}function b(e,o){e>=o?c():R()}const E=document.querySelector(".ooButton"),u=document.querySelector(".form"),P=document.querySelector(".gallery"),M=15;let n,a,l;u.addEventListener("submit",async e=>{if(e.preventDefault(),c(),n=new FormData(u).get("search-text"),a=1,!!n.trim()){B(),L();try{const r=await f(n,a);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),l=Math.ceil(r.totalHits/M),l===1&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),b(a,l),u.reset()}catch(r){i.error({message:`Error: ${r}`,position:"topRight"})}finally{w()}}});E.addEventListener("click",async()=>{if(n){a+=1,c(),L();try{const e=await f(n,a);y(e.hits);const o=P.lastElementChild;if(o){const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}a>=l?(c(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b(a,l)}catch(e){a-=1,i.error({message:`Error: ${e}`,position:"topRight"})}finally{w()}}});
//# sourceMappingURL=index.js.map
