/* The below class is a BookService class that provides methods for creating,
retrieving, updating, and deleting books using a BookModel. */
import Book from "../models/BookModel.js";

class BookService {
  createBook = async (bookData) => {
    const book = new Book(bookData);
    return await book.save();
  };

  async getBooks(query, skip, limit, sort) {
    const books = await Book.find(query).skip(skip).limit(limit).sort(sort);
    const total = await Book.countDocuments(query);
    return { books, total };
  }

  getBookById = async (id) => {
    return await Book.findById(id);
  };

  updateBook = async (id, updatedData) => {
    return await Book.findByIdAndUpdate(id, updatedData, { new: true });
  };

  deleteBook = async (id) => {
    return await Book.findByIdAndRemove(id);
  };
}

export default BookService;
