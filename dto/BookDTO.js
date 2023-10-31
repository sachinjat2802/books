/* The below class is a BookDTO (Data Transfer Object) that represents a book and
provides validation for book creation. */
import { body, validationResult } from "express-validator";

class BookDTO {
  constructor(title, author, summary) {
    this.title = title;
    this.author = author;
    this.summary = summary;
  }

  static validateBookCreation() {
    return [
      body("title").notEmpty().withMessage("Title is required"),
      body("author").notEmpty().withMessage("Author is required"),
      body("summary").notEmpty().withMessage("Summary is required"),
    ];
  }

  validate(req) {
    const errors = validationResult(req);
    console.log(errors.errors.length > 0, "errors");
    if (errors.errors.length > 0) {
      return errors;
    }
    return null;
  }
}

export default BookDTO;
