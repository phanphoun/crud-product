import { useState } from "react";


function ProductForm({ onCreate }) {


    const [form, setForm] = useState({
        name: "",
        price: "",
        description: ""
    });



    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        await onCreate(form);


        setForm({
            name: "",
            price: "",
            description: ""
        });

    };



    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md p-5 rounded-lg space-y-4"
        >

            <h2 className="text-xl font-bold">
                Add Product
            </h2>


            <input

                type="text"

                name="name"

                placeholder="Product name"

                value={form.name}

                onChange={handleChange}

                className="w-full border p-2 rounded"

                required

            />



            <input

                type="number"

                name="price"

                placeholder="Price"

                value={form.price}

                onChange={handleChange}

                className="w-full border p-2 rounded"

                required

            />



            <textarea

                name="description"

                placeholder="Description"

                value={form.description}

                onChange={handleChange}

                className="w-full border p-2 rounded"

            />



            <button

                type="submit"

                className="bg-blue-600 text-white px-5 py-2 rounded"

            >

                Save Product

            </button>


        </form>

    );

}


export default ProductForm;