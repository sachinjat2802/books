/* This code is a JavaScript module that sets up routes for a book API using the
Express framework. */
import express from "express";
import BookController from "../controllers/bookController.js";
import BookDTO from "../dto/BookDTO.js";

const router = express.Router();
const bookController = new BookController();
router.get("/", bookController.getBooks);
router.post("/", BookDTO.validateBookCreation(), bookController.createBook);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;
