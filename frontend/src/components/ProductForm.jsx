import { useState } from "react";


export default function ProductForm({
    onSubmit,
    selectedProduct,
    clearSelected
}) {


    const [form, setForm] = useState({

        name: selectedProduct?.name || "",

        price: selectedProduct?.price || "",

        description: selectedProduct?.description || ""

    });



    const changeHandler = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };




    const submitHandler = (e) => {

        e.preventDefault();


        onSubmit(form);



        setForm({

            name: "",
            price: "",
            description: ""

        });


        if (clearSelected)
            clearSelected();

    };





    return (

        <form

            onSubmit={submitHandler}

            className="
bg-white
p-6
rounded-lg
shadow
space-y-4
"

        >


            <h2 className="text-xl font-bold">

                {
                    selectedProduct
                        ?
                        "Update Product"
                        :
                        "Create Product"
                }

            </h2>



            <input

                name="name"

                value={form.name}

                onChange={changeHandler}

                placeholder="Product name"

                className="
w-full
border
p-3
rounded
"

            />



            <input

                name="price"

                type="number"

                value={form.price}

                onChange={changeHandler}

                placeholder="Price"

                className="
w-full
border
p-3
rounded
"

            />



            <textarea

                name="description"

                value={form.description}

                onChange={changeHandler}

                placeholder="Description"

                className="
w-full
border
p-3
rounded
"

            />



            <button

                className="
bg-blue-600
text-white
px-5
py-2
rounded
"

            >

                {
                    selectedProduct
                        ?
                        "Update"
                        :
                        "Save"
                }

            </button>



        </form>


    );


}