import"./assets/styles-BK7AYJoX.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";r.defaults.baseURL="https://dummyjson.com";async function d(){return(await r.get("/products/category-list")).data}const n=async(t=1,s=12)=>{const e=(t-1)*s;return(await r.get("/products",{params:{limit:s,skip:e}})).data.products},l=async t=>(await r.get(`/products/category/${t}`)).data.products,u=async t=>(await r.get(`/products/${t}`)).data,o={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),notFoundMessage:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function p(t){const s=["All",...t];o.categoriesList.innerHTML=s.map(e=>`
    <li class="categories__item">
      <button class="categories__btn" type="button">${e}</button>
    </li>
  `).join("")}function i(t){const s=t.map(e=>`
    <li class="products__item" data-id="${e.id}">
      <img class="products__image" src="${e.thumbnail}" alt="${e.title}" />
      <p class="products__title">${e.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
      <p class="products__category">Category: ${e.category}</p>
      <p class="products__price">Price: $${e.price}</p>
    </li>
  `).join("");o.productsList.innerHTML=s}function m(t){var s;o.modalContent.innerHTML=`
    <img class="modal-product__img" src="${t.thumbnail}" alt="${t.title}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${t.title}</p>
      <ul class="modal-product__tags">
        ${((s=t.tags)==null?void 0:s.map(e=>`<li>#${e}</li>`).join(""))||""}
      </ul>
      <p class="modal-product__description">${t.description}</p>
      <p class="modal-product__shipping-information">Shipping: Free Worldwide</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: $${t.price}</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `}document.addEventListener("DOMContentLoaded",async()=>{const t=await d();p(t);const s=await n(1);i(s)});o.categoriesList.addEventListener("click",async t=>{const s=t.target.closest(".categories__btn");if(!s)return;const e=s.textContent.trim();o.categoriesList.querySelectorAll(".categories__btn").forEach(a=>a.classList.remove("categories__btn--active")),s.classList.add("categories__btn--active");try{o.notFoundMessage.classList.remove("not-found--visible");let a=[];e.toLowerCase()==="all"?a=await n(1):a=await l(e),a.length===0?(o.productsList.innerHTML="",o.notFoundMessage.classList.add("not-found--visible")):i(a.slice(0,12))}catch(a){console.error("Помилка при фільтрації категорії:",a)}});o.productsList.addEventListener("click",async t=>{const s=t.target.closest(".products__item");if(!s)return;const e=s.dataset.id;try{const c=await u(e);m(c),o.modal.classList.add("modal--is-open")}catch(c){console.error("Помилка при відкритті модального вікна:",c)}});o.modalCloseBtn.addEventListener("click",()=>{o.modal.classList.remove("modal--is-open")});
//# sourceMappingURL=index.js.map
