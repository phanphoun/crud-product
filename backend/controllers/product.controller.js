import db from "../config/db.js";

// GET ALL PRODUCTS
export const getProducts = (req, res) => {

    db.query(
        "SELECT * FROM products ORDER BY id DESC",
        (err, result) => {

            if (err)
                return res.status(500).json(err);


            res.json(result);

        }
    );

};



// GET SINGLE PRODUCT

export const getProduct = (req, res) => {

    const id = req.params.id;


    db.query(
        "SELECT * FROM products WHERE id=?",
        [id],
        (err, result) => {


            if (err)
                return res.status(500).json(err);


            res.json(result[0]);

        }
    );

};




// CREATE PRODUCT

export const createProduct = (req, res) => {

    const { name, price, description } = req.body;


    db.query(

        "INSERT INTO products(name,price,description) VALUES(?,?,?)",

        [name, price, description],

        (err, result) => {


            if (err)
                return res.status(500).json(err);


            res.json({
                message: "Product created",
                id: result.insertId
            });

        }

    );

};




// UPDATE PRODUCT

export const updateProduct = (req, res) => {

    const id = req.params.id;
    const {
        name,
        price,
        description
    } = req.body;



    db.query(

        "UPDATE products SET name=?,price=?,description=? WHERE id=?",

        [
            name,
            price,
            description,
            id
        ],

        (err) => {


            if (err)
                return res.status(500).json(err);


            res.json({
                message: "Product updated"
            });


        }

    );

};



// DELETE PRODUCT

export const deleteProduct = (req, res) => {

    const id = req.params.id;


    db.query(

        "DELETE FROM products WHERE id=?",

        [id],

        (err) => {


            if (err)
                return res.status(500).json(err);



            res.json({
                message: "Product deleted"
            });

        }

    );

};
