import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", protect, admin, createProduct);
router.put("/update/:id", protect, admin, updateProduct);
router.delete("/delete/:id", protect, admin, deleteProduct);

export default router;
