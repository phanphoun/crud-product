import api from "./axios";


export const getProducts = () =>
    api.get("/products").then(res => res.data);


export const createProduct = (data) =>
    api.post("/products", data).then(res => res.data);


export const updateProduct = (id, data) =>
    api.put(`/products/${id}`, data).then(res => res.data);


export const deleteProduct = (id) =>
    api.delete(`/products/${id}`).then(res => res.data);
