/* This code is defining a Mongoose schema for a book and creating a Mongoose model
based on that schema. */
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    author: String,
    summary: String,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

bookSchema.plugin(uniqueValidator, { message: "Book already exists." });

const Book = mongoose.model("Book", bookSchema);

export default Book;
