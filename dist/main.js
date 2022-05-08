(()=>{"use strict";class e{constructor(e){this._root=e,this.prepareTemplate()}get root(){return this._root}get template(){return this._template}prepareTemplate(){this._template=document.createElement("div")}initTemplate(){if(this._template)return this._template.innerHTML=""}render(e){e&&(this._root=e),this.initTemplate();const{root:t,template:s}=this;t&&t.append(s)}}class t extends e{constructor(e={},t){super(t),this._data=e}initTemplate(){if(!this._template)return;this._template.classList.add("card");let e=`<div class="card__photo"><img class="lazy" data-src="${this._data.photo}" alt="${this._data.name}"/>\n\t\t\t<div class="card__info">\n\t\t`;for(let t in this._data)"photo"!==t&&"movies"!==t&&(e+=`<p class="card__${t}">${t}: <span>${this._data[t]}</span></p>`);e+="</div></div>",this._data.movies&&(e+='<div class="card__movies"><p>Movies:</p><ul class="card__movies-list">',this._data.movies.forEach((t=>{e+=`<li data-film-name="${t}" class="card__movie-item">${t}</li>`})),e+="</ul></div>"),this._template.innerHTML=e;const t=window.innerHeight,s=()=>{const e=window.scrollY*t,s=document.getElementsByClassName("lazy");Array.from(s).forEach((t=>{e>t.offsetTop&&(t.setAttribute("src",t.getAttribute("data-src")),t.classList.remove("lazy"))}))};s(),setTimeout((()=>{window.addEventListener("scroll",s)}),3e3)}}class s extends e{constructor(e,t=[]){super(e),this.createCardsObjectsList(t)}createCardsObjectsList(e){this._cards=e.map((e=>new t(e)))}get cards(){return this._cards}initTemplate(){this._template&&(this._template.classList.add("cards-list"),this.cards.forEach((e=>e.render(this._template))))}}const o=document.querySelector(".heroes"),a=document.querySelector(".switcher");("dbHeroes.json",fetch("dbHeroes.json").then((e=>e.json())).catch((e=>console.log("ОШИБКА "+e)))).then((e=>{const t=new s(o,e);((e,t)=>{if(t){const s=new Set;t.forEach((e=>{e.movies&&e.movies.forEach((e=>{s.add(e)}))}));const o=document.createElement("nav");o.classList.add("switcher");let a='<ul class="filter__list">\n\t\t\t\t\t<li data-film="all" class="filter__link">Filter\n\t\t\t\t\t<ul class="switcher__list">\n\t\t\t\t\t<li data-film="all">All films</li>';for(let e of s)a+=`<li class="switcher__link" data-film="${e}">${e}</li>`;a+="</li></ul></ul>",o.innerHTML=a,e.append(o);const i=document.createElement("div");i.classList.add("selected__movie"),e.append(i)}})(a,e),t.render(),(()=>{const e=document.querySelectorAll(".card"),t=document.querySelector(".switcher"),s=document.querySelector(".selected__movie");e&&t&&t.addEventListener("click",(t=>{if("LI"!==t.target.tagName)return;const o=t.target.dataset.film;e.forEach((e=>{e.style.display="flex",s.textContent="",e.querySelector(`.card__movies-list li[data-film-name="${o}"]`)||"all"===o||(e.style.display="none",s.textContent="#"+o)}))}))})()})),(()=>{const e=document.querySelector(".scroll");window.addEventListener("scroll",(function(){const t=window.pageYOffset,s=document.documentElement.clientHeight;t>s&&e.classList.add("scroll-show"),t<s&&e.classList.remove("scroll-show")})),e.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))}))})(),document.querySelector(".scroll").innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"\n                    class="bi bi-arrow-up" viewBox="0 0 16 16">\n                    <path fill-rule="evenodd"\n                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />\n                </svg>',(()=>{const e=document.querySelector("audio"),t=document.querySelector(".music"),s=document.querySelector(".pause"),o=document.querySelector(".text");o.innerHTML='Stepan Pennsbroke "A man without love"',e.autoplay=!0,e.play()&&(o.innerHTML='Stepan Pennsbroke "A man without love"'),t.addEventListener("click",(()=>{e.play(),o.style.display="inline-block"})),s.addEventListener("click",(()=>{e.pause(),o.style.display="none"})),e.src="/dist/audio/stephen-pennsbroke-a-man-without-love-wake-up-alarm_108059729.mp3",t.innerHTML='<svg id=\'play\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"/></svg>',s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z"/></svg>'})()})();