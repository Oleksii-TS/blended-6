//Функцію для створення, рендеру або видалення розмітки
import { refs } from './refs';

export function renderCategoriesList(categories) {
  const fullList = ['All', ...categories];

  refs.categoriesList.innerHTML = fullList.map(category => `
    <li class="categories__item">
      <button class="categories__btn" type="button">${category}</button>
    </li>
  `).join('');
}

export function renderProductsList(products) {
  const markup = products.map(product => `
    <li class="products__item" data-id="${product.id}">
      <img class="products__image" src="${product.thumbnail}" alt="${product.title}" />
      <p class="products__title">${product.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${product.brand}</p>
      <p class="products__category">Category: ${product.category}</p>
      <p class="products__price">Price: $${product.price}</p>
    </li>
  `).join('');

  refs.productsList.innerHTML = markup;
}

export function renderModalProduct(product) {
  refs.modalContent.innerHTML = `
    <img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${product.title}</p>
      <ul class="modal-product__tags">
        ${product.tags?.map(tag => `<li>#${tag}</li>`).join('') || ''}
      </ul>
      <p class="modal-product__description">${product.description}</p>
      <p class="modal-product__shipping-information">Shipping: Free Worldwide</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: $${product.price}</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;
}