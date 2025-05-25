//Логіка сторінки Home
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
  fetchProductById
} from './js/products-api.js';

import {
  renderCategoriesList,
  renderProductsList,
  renderModalProduct
} from './js/render-function.js';

import { refs } from './js/refs.js';

document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetchCategories();
  renderCategoriesList(categories);
  const products = await fetchProducts(1);
  renderProductsList(products);
});

// 3. Реалізуй делегування на списку ul.categories

refs.categoriesList.addEventListener('click', async (event) => {
  const btn = event.target.closest('.categories__btn');
  if (!btn) return;

  const category = btn.textContent.trim();
  const buttons = refs.categoriesList.querySelectorAll('.categories__btn');

  
  buttons.forEach(button => button.classList.remove('categories__btn--active'));
  
  btn.classList.add('categories__btn--active');

  try {
    refs.notFoundMessage.classList.remove('not-found--visible');

    let products = [];

    if (category.toLowerCase() === 'all') {
      products = await fetchProducts(1);
    } else {
      products = await fetchProductsByCategory(category);
    }

    if (products.length === 0) {
      refs.productsList.innerHTML = '';
      refs.notFoundMessage.classList.add('not-found--visible');
    } else {
      renderProductsList(products.slice(0, 12));
    }
  } catch (error) {
    console.error('Помилка при фільтрації категорії:', error);
  }
});

// 4. Реалізуй делегування на списку ul.products

refs.productsList.addEventListener('click', async (e) => {
  const productItem = e.target.closest('.products__item');
  if (!productItem) return;

  const id = productItem.dataset.id;
  try {
    const product = await fetchProductById(id);
    renderModalProduct(product);
    refs.modal.classList.add('modal--is-open');
  } catch (err) {
    console.error('Помилка при відкритті модального вікна:', err);
  }
});

refs.modalCloseBtn.addEventListener('click', () => {
  refs.modal.classList.remove('modal--is-open');
});