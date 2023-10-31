/* The BookController class is responsible for handling requests related to books,
including creating, retrieving, updating, and deleting books. */
import BookService from "../services/bookService.js";
import BookDTO from "../dto/BookDTO.js";

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  createBook = async (req, res) => {
    try {
      const bookDTO = new BookDTO(
        req.body.title,
        req.body.author,
        req.body.summary
      );
      const errors = bookDTO.validate(req);
      if (errors?.length > 0) {
        return res.status(400).json({ errors: errors.array() });
      }

      const book = await this.bookService.createBook(req.body);
      res.json(book);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };

  getBooks = async (req, res) => {
    console.log(req.query, "req.query");
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      order = "asc",
    } = req.query;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const sort = { [sortBy]: order === "desc" ? -1 : 1 };

    const query = {
      title: { $regex: search, $options: "i" },
      isDeleted: false,
    };

    const books = await this.bookService.getBooks(query, skip, limit, sort);

    res.json(books);
  };

  getBookById = async (req, res) => {
    const book = await this.bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  };

  updateBook = async (req, res) => {
    const book = await this.bookService.updateBook(req.params.id, req.body);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  };

  deleteBook = async (req, res) => {
    const book = await this.bookService.deleteBook(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  };
}

export default BookController;
