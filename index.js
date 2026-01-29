import{a as f,S as m,i}from"./assets/vendor-dgoA7Xew.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="54417407-1c43465e9e8135d46dad72044";function y(a){return f.get(h,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const s=a.map(({largeImageURL:n,webformatURL:r,tags:e,likes:t,views:o,comments:p,downloads:d})=>`
      <li class="photo-card">
        <a href="${n}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item">
            <span class="label">Likes</span>
            <span class="value">${t}</span>
          </p>
          <p class="info-item">
            <span class="label">Views</span>
            <span class="value">${o}</span>
          </p>
          <p class="info-item">
            <span class="label">Comments</span>
            <span class="value">${p}</span>
          </p>
          <p class="info-item">
            <span class="label">Downloads</span>
            <span class="value">${d}</span>
          </p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),L.refresh()}function v(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function O(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(a){a.preventDefault();const s=a.currentTarget.elements["search-text"].value.trim();if(!s){i.error({position:"topRight",message:"Please enter your request in the search field!",closeOnClick:!0});return}v(),S(),y(s).then(n=>{const r=n.hits;if(!r||r.length===0){i.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0});return}b(r)}).catch(()=>{i.error({position:"topRight",message:"Sorry, something went wrong... Try later",closeOnClick:!0})}).finally(()=>{O(),u.reset()})}
//# sourceMappingURL=index.js.map
