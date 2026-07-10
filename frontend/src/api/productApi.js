import axios from "axios";


const API = `${import.meta.env.VITE_API_URL}/products`;



export const getProducts = () => {
    return axios.get(API);
};



export const getProduct = (id) => {
    return axios.get(`${API}/${id}`);
};



export const createProduct = (data) => {
    return axios.post(API, data);
};



export const updateProduct = (id, data) => {
    return axios.put(`${API}/${id}`, data);
};



export const deleteProduct = (id) => {
    return axios.delete(`${API}/${id}`);
};