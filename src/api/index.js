import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3003/api',
})

export const insertProduct = payload => api.post(`/product`,payload);
export const getAllProducts = () => api.get(`/products`);
export const getProductById = id => api.get(`/product/${id}`);
export const getProductsByCategory = categoryId => api.get(`/product/${categoryId}`);
export const updateProductById = (id, payload) => api.put(`/product/${id}`,payload);
export const deleteProductById = (id, payload) => api.delete(`/product/${id}`,payload);
export const getAllCategories = () => api.get(`/categories`);



const apis = {
    insertProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    updateProductById,
    deleteProductById,
    getAllCategories
}

export default apis;