import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controller/product.controller.js";

const router = express.Router();


router.get('/', getProducts);

router.post("/", createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;