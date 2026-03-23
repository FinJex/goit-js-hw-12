import{a as d,S as p,i as l}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(t){return d.get("https://pixabay.com/api/",{params:{key:"55038104-4ff7c993e1add1fdeb38abc54",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const c=document.querySelector(".gallery"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){c.insertAdjacentHTML("beforeend",t.map(y).join("")),m.refresh()}function y(t){return` <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <ul> 
        <li>
        <p>likes</p>
        <p>${t.likes}</p>
         </li>

         <li>
         <p>views</p>
          <p>${t.views}</p>
         </li>

                  <li>
         <p>comments</p>
          <p>${t.comments}</p>
         </li>

                  <li>
         <p>downloads</p>
          <p>${t.downloads}</p>
         </li>


         </ul>
      </li>`}const u=document.querySelector(".loader");function h(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(n).get("search-text");i.trim()&&(h(),L(),f(i).then(a=>{if(a.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(a),n.reset()}).catch(a=>{l.error({message:`Error: ${a}`,position:"topRight"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
