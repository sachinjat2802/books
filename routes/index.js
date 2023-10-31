/* This code is creating a router in a JavaScript application using the Express
framework. */
import express from "express";
import bookRouter from "./bookRouter.js";

const router = express.Router();

router.use("/books", bookRouter);

export default router;
