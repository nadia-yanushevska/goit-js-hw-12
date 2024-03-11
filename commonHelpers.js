import{i as p,S as h}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="/goit-js-hw-12/assets/error-743e7f10.svg";function g(e){return{message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",iconUrl:m,backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"}}function l(e,s){p.show(g(e))}function y(e=""){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"42730262-d44e8a42848c88033a006d73c",q:`"${encodeURI(e)}"`,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${o}`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const w=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(e,s){e.innerHTML=b(s),w.refresh()}function b(e){return e.map($).join(`

`)}function $(e){const{webformatURL:s,largeImageURL:o,previewHeight:n,previewWidth:t,likes:r,views:i,comments:u,downloads:d,tags:f}=e;return`<li class="gallery-item">
                <a class="gallery-link" href="${o}">
                    <img
                        class="gallery-image"
                        src="${s}"
                        alt="${f}"
                        width="${t}"
                        height="${n}"
                    />
                </a>
                <ul class="desc-list">
                        <li class="desc-li">
                            <h3 class="bold">Likes</h3>
                            <p>${r}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Views</h3>
                            <p>${i}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Comments</h3>
                            <p>${u}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Downloads</h3>
                            <p>${d}</p>
                        </li>
                    </ul>
            </li>`}const S='<span class="loader"></span>';function v(e){e.innerHTML=S}function c(e){e.innerHTML=""}function O(e){return e.split(" ").filter(o=>o).join("+")}const R="Sorry, there are no images matching your&nbsp;search query. Please, try again!",a=document.querySelector(".gallery"),T=document.querySelector("[js-form]");T.addEventListener("submit",U);function U(e){e.preventDefault(),v(a);const s=O(e.target.elements["search-name"].value);I(s),e.target.reset()}function I(e){y(e).then(s=>{const o=[...s.hits];o.length===0?(c(a),l(R)):L(a,o)}).catch(s=>{c(a),l(s)})}
//# sourceMappingURL=commonHelpers.js.map
