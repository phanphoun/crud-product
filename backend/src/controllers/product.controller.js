import Product from "../models/product.model.js";



export const getProducts = async (req, res, next) => {

    try {


        const products = await Product.findAll();


        res.json(products);


    } catch (error) {

        next(error);

    }

};





export const createProduct = async (req, res, next) => {

    try {


        const product =
            await Product.create(req.body);



        res.status(201).json(product);



    } catch (error) {

        next(error);

    }

};






export const updateProduct = async (req, res, next) => {

    try {


        const product =
            await Product.findByPk(req.params.id);



        if (!product) {

            return res.status(404)
                .json({
                    message: "Product not found"
                });

        }



        await product.update(req.body);



        res.json(product);



    } catch (error) {

        next(error);

    }

};







export const deleteProduct = async (req, res, next) => {

    try {


        const product =
            await Product.findByPk(req.params.id);



        if (!product) {

            return res.status(404)
                .json({
                    message: "Product not found"
                });

        }



        await product.destroy();



        res.json({

            message: "Deleted successfully"

        });



    } catch (error) {

        next(error);

    }

};