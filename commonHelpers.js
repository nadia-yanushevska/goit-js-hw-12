import{i as $,a as y,S as q}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const B="/goit-js-hw-12/assets/error-743e7f10.svg";function j(e){return{message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",iconUrl:B,backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"}}function c(e){console.log(e),$.show(j(e))}y.defaults.baseURL="https://pixabay.com";const w=15,d={key:"42730262-d44e8a42848c88033a006d73c",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w};function H(e="",s=1){return d.q=e,d.page=+s||1,y.get("/api/",{params:d})}const I=new q(".gallery a",{captionsData:"alt",captionDelay:250});function O(e,s){e.insertAdjacentHTML("beforeend",P(s)),I.refresh()}function P(e){return e.map(R).join(`

`)}function R(e){const{webformatURL:s,largeImageURL:r,previewHeight:n,previewWidth:t,likes:o,views:a,comments:v,downloads:S,tags:E}=e;return`<li class="gallery-item">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${s}"
                        alt="${E}"
                        width="${t}"
                        height="${n}"
                    />
                </a>
                <ul class="desc-list">
                        <li class="desc-li">
                            <h3 class="bold">Likes</h3>
                            <p>${o}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Views</h3>
                            <p>${a}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Comments</h3>
                            <p>${v}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Downloads</h3>
                            <p>${S}</p>
                        </li>
                    </ul>
            </li>`}function T(e){return e.split(" ").filter(r=>r).join("+")}function m(e){e.classList.remove("is-hidden")}function f(e){e.classList.add("is-hidden")}const x="Sorry, there are no images matching your&nbsp;search query. Please, try again!",C=`"We're sorry, but you've reached the end of search results."`;let i,p,l=1;const g=document.querySelector(".gallery"),M=document.querySelector("[js-form]"),u=document.querySelector("[js-load-btn]"),h=document.querySelector("[js-loader]");M.addEventListener("submit",U);u.addEventListener("click",A);document.addEventListener("wheel",L);function U(e){e.preventDefault(),m(h),g.innerHTML="",i=T(e.target.elements["search-name"].value),p!==i?l=1:l++,b(i,l),p=i,e.target.reset()}async function A(){m(h),await b(i,++l),L({deltaY:10})}async function b(e,s=1){f(u);try{const n=(await H(e,s)).data,t=[...n.hits],o=n.totalHits;t.length===0?c(x):(O(g,t),o>s*w?m(u):c(C))}catch(r){c(r)}finally{f(h)}}function L(e){const s=e.deltaY>0?2:-2,r=g.querySelector(".gallery-item"),n=Number.parseInt(r.getBoundingClientRect().height),t={top:s*n,behavior:"smooth"};setTimeout(()=>{window.scrollBy(t)},1)}
//# sourceMappingURL=commonHelpers.js.map
