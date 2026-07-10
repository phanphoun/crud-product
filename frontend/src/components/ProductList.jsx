export default function ProductList({

    products,

    onDelete,

    onEdit

}) {


    return (

        <div className="mt-8">


            <h2 className="
text-2xl
font-bold
mb-5
">

                Products

            </h2>



            <div className="
grid
md:grid-cols-3
gap-5
">


                {

                    products.map(product => (


                        <div

                            key={product.id}

                            className="
border
rounded-lg
p-5
shadow
"

                        >


                            <h3 className="
font-bold
text-lg
">

                                {product.name}

                            </h3>



                            <p>

                                Price:
                                ${product.price}

                            </p>



                            <p className="text-gray-600">

                                {product.description}

                            </p>




                            <div className="
flex
gap-3
mt-4
">


                                <button

                                    onClick={() => onEdit(product)}

                                    className="
bg-yellow-500
text-white
px-3
py-1
rounded
"

                                >

                                    Edit

                                </button>




                                <button

                                    onClick={() => onDelete(product.id)}

                                    className="
bg-red-600
text-white
px-3
py-1
rounded
"

                                >

                                    Delete

                                </button>


                            </div>



                        </div>


                    ))

                }



            </div>



        </div>


    );


}