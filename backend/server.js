import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import "./config/db.js";

import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/products",
    productRoutes
);

app.listen(
    process.env.PORT,
    () => {
        console.log(
            `Server running port ${process.env.PORT}`
        );
    }
);
