import { useEffect, useState } from "react";

import ProductForm from "./components/ProductForm";

import ProductList from "./components/ProductList";


import {
    getProducts,
    createProduct,
    deleteProduct
} from "./api/productApi";



function App() {


    const [products, setProducts] = useState([]);



    const loadProducts = async () => {

        const res = await getProducts();

        setProducts(res.data);

    };



    useEffect(() => {

        loadProducts();

    }, []);




    const handleCreate = async (data) => {

        await createProduct(data);

        loadProducts();

    };




    const handleDelete = async (id) => {

        await deleteProduct(id);

        loadProducts();

    };




    return (

        <div className="container mx-auto p-10">


            <h1 className="text-4xl font-bold mb-8">

                Product Management

            </h1>



            <ProductForm

                onCreate={handleCreate}

            />



            <ProductList

                products={products}

                onDelete={handleDelete}

            />


        </div>

    );

}


export default App;