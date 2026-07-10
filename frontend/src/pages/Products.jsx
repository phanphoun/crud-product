import {
useEffect,
useState
} from "react";


import ProductForm from "../components/ProductForm";

import ProductList from "../components/ProductList";


import {

getProducts,

createProduct,

updateProduct,

deleteProduct

} from "../api/productApi";



export default function Products(){


const [products,setProducts]=useState([]);

const [selected,setSelected]=useState(null);



const loadProducts=async()=>{


const data =
await getProducts();


setProducts(data);


};



useEffect(()=>{

loadProducts();

},[]);






const saveProduct=async(data)=>{


if(selected){

await updateProduct(
selected.id,
data
);


}else{


await createProduct(data);


}


setSelected(null);


loadProducts();


};





const removeProduct=async(id)=>{


await deleteProduct(id);


loadProducts();


};





return (

<div className="
container
mx-auto
p-10
">


<h1 className="
text-4xl
font-bold
mb-8
">

Product Management

</h1>



<ProductForm

onSubmit={saveProduct}

selectedProduct={selected}

clearSelected={()=>setSelected(null)}

/>




<ProductList

products={products}

onDelete={removeProduct}

onEdit={setSelected}

/>



</div>

);


}