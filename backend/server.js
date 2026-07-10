import app from "./src/app.js";

import sequelize from "./src/config/database.js";

import "./src/models/product.model.js";


import { env } from "./src/config/env.js";



sequelize.sync()

    .then(() => {


        app.listen(
            env.port,
            () => {

                console.log(
                    `Server running ${env.port}`
                );

            });


    });