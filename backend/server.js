const express=require("express");
const cors=require("cors");

require("dotenv").config();

require("./config/db");


const productRoutes=require("./routes/product.routes");


const app=express();


app.use(cors());

app.use(express.json());



app.use(
    "/api/products",
    productRoutes
);



app.listen(
    process.env.PORT,
    ()=>{
        console.log(
            `Server running port ${process.env.PORT}`
        );
    }
);