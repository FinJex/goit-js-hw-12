import{a as w,S as b,i as c}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();async function f(e,o){try{const r=await w.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return{images:r.data.hits,totalHits:r.data.totalHits}}catch(r){return console.log(r),{images:[],totalHits:0}}}const m=document.querySelector(".gallery"),v=new b(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){m.insertAdjacentHTML("beforeend",e.map(S).join("")),v.refresh()}function S(e){return` <li class="gallery-item">
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
      </li>`}const y=document.querySelector(".loader"),h=document.querySelector(".ooButton");function q(){m.innerHTML=""}function B(){y.classList.remove("hidden")}function $(){y.classList.add("hidden")}function P(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}function L(e,o){e>=o?l():P()}function R(){window.scrollBy({top:400,behavior:"smooth"})}const E=document.querySelector(".ooButton"),p=document.querySelector(".form"),M=15;let n,s,u;p.addEventListener("submit",async e=>{if(e.preventDefault(),l(),n=new FormData(p).get("search-text"),s=1,!!n.trim()){q(),B();try{const{images:r,totalHits:i}=await f(n,s);if(r.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r),u=Math.ceil(i/M),L(s,u),p.reset()}catch(r){c.error({message:`Error: ${r}`,position:"topRight"})}finally{$()}}});E.addEventListener("click",async e=>{s+=1,l();try{const{images:o}=await f(n,s);g(o),R()}catch(o){c.error({message:`Error: ${o}`,position:"topRight"})}if(s>=u){l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}L(s,u)});
//# sourceMappingURL=index.js.map
