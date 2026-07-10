import express from "express";

import * as controller from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", controller.getProducts);

router.get("/:id", controller.getProduct);

router.post("/", controller.createProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

export default router;
