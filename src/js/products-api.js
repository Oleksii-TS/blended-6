// список категорій
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
    const response = await axios.get('/products/category-list');
    return response.data;
}

export const fetchProducts = async (page = 1, limit = 12) => {
  const skip = (page - 1) * limit;
  const response = await axios.get(`/products`, {
    params: { limit, skip }
  });
  return response.data.products;
};

export const fetchProductsByCategory = async (category) => {
  const response = await axios.get(`/products/category/${category}`);
  return response.data.products;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};