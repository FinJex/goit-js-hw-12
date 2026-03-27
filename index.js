import{a as v,S as B,i}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function h(e,r){try{return(await v.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(o){throw console.error(o),o}}const p=document.querySelector(".gallery"),S=new B(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){p.insertAdjacentHTML("beforeend",e.map(q).join("")),S.refresh()}function q(e){return` <li class="gallery-item">
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
      </li>`}const y=document.querySelector(".loader"),g=document.querySelector(".ooButton");function $(){p.innerHTML=""}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function E(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}function b(e,r){e>=r?l():E()}function P(){const r=p.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}const R=document.querySelector(".ooButton"),u=document.querySelector(".form"),M=15;let n,a,c;u.addEventListener("submit",async e=>{if(e.preventDefault(),l(),n=new FormData(u).get("search-text"),a=1,!!n.trim()){$(),L();try{const o=await h(n,a);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits),c=Math.ceil(o.totalHits/M),b(a,c),u.reset()}catch(o){i.error({message:`Error: ${o}`,position:"topRight"})}finally{w()}}});R.addEventListener("click",async e=>{a+=1,l(),L();try{const r=await h(n,a);m(r.hits),P()}catch(r){i.error({message:`Error: ${r}`,position:"topRight"})}finally{w()}if(a>=c){l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b(a,c)});
//# sourceMappingURL=index.js.map
