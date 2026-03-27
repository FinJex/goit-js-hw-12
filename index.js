import{a as v,S,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function f(e,o){try{return(await v.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}catch(r){throw console.error(r),r}}const h=document.querySelector(".gallery"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){h.insertAdjacentHTML("beforeend",e.map(B).join("")),q.refresh()}function B(e){return` <li class="gallery-item">
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
      </li>`}const m=document.querySelector(".loader"),g=document.querySelector(".ooButton");function $(){h.innerHTML=""}function L(){m.classList.remove("hidden")}function w(){m.classList.add("hidden")}function R(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}function b(e,o){e>=o?c():R()}const E=document.querySelector(".ooButton"),p=document.querySelector(".form"),P=document.querySelector(".gallery"),M=15;let i,a,l;p.addEventListener("submit",async e=>{if(e.preventDefault(),c(),i=new FormData(p).get("search-text"),a=1,!!i.trim()){$(),L();try{const r=await f(i,a);if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),l=Math.ceil(r.totalHits/M),l===1&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),b(a,l),p.reset()}catch(r){n.error({message:`Error: ${r}`,position:"topRight"})}finally{w()}}});E.addEventListener("click",async e=>{if(i){a+=1,c(),L();try{let r=function(){const t=P.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})};const o=await f(i,a);if(y(o.hits),a>=l){c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}r()}catch(o){n.error({message:`Error: ${o}`,position:"topRight"})}finally{w()}b(a,l)}});
//# sourceMappingURL=index.js.map
