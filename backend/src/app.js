import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";


import productRoutes from "./routes/product.routes.js";


import { env } from "./config/env.js";


import errorMiddleware from "./middleware/error.middleware.js";

import notFound from "./middleware/notFound.middleware.js";



const app = express();



app.use(helmet());


app.use(cors({

    origin: [

        env.frontendUrl,

        "http://localhost:5173"

    ],

    credentials: true

}));


app.use(express.json());


app.use(morgan("combined"));



app.use(
    "/api/products",
    productRoutes
);



app.use(notFound);


app.use(errorMiddleware);



export default app;