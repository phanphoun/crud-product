function ProductList({ products, onDelete }) {


    return (

        <div className="mt-8">


            <h2 className="text-xl font-bold mb-4">
                Product List
            </h2>



            <div className="grid md:grid-cols-3 gap-5">


                {
                    products.map(product => (


                        <div

                            key={product.id}

                            className="border rounded-lg p-5 shadow"

                        >


                            <h3 className="text-lg font-bold">

                                {product.name}

                            </h3>



                            <p className="text-gray-600">

                                Price: ${product.price}

                            </p>



                            <p className="my-2">

                                {product.description}

                            </p>



                            <button

                                onClick={() => onDelete(product.id)}

                                className="bg-red-500 text-white px-4 py-2 rounded"

                            >

                                Delete

                            </button>


                        </div>


                    ))
                }


            </div>


        </div>

    );

}


export default ProductList;