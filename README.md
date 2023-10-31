
# Book Management API

A RESTful API for managing books, built using Node.js and MongoDB.

## API Endpoints and Usage

### Create a New Book

**Endpoint:** `POST /books`

**Usage:**
- Add a new book to the database.
- Provide a JSON object with `title`, `author`, and `summary` in the request body.

Example:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A classic novel about the American Dream."
}
```

### View a List of All Books

**Endpoint:** `GET /books`

**Usage:**
- Retrieve a list of all books in the database.

### View Details of a Specific Book by its ID

**Endpoint:** `GET /books/:id`

**Usage:**
- Get details of a specific book by providing its ID as a parameter.

### Update a Book's Details

**Endpoint:** `PUT /books/:id`

**Usage:**
- Update the details of a specific book by providing its ID as a parameter and the updated information in the request body.

Example:
```json
{
  "title": "New Title",
  "author": "New Author",
  "summary": "Updated summary."
}
```

### Delete a Book

**Endpoint:** `DELETE /books/:id`

**Usage:**
- Delete a book by providing its ID as a parameter.

## Setting Up and Running Locally

Follow these steps to set up and run the application locally:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/sachinjat2802/books
   ```

2. Navigate to the project directory.
   ```bash
   cd books
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```

4. Create a MongoDB database either locally or on a cloud service and obtain the connection string.

5. Create a `.env` file in the project root and add your MongoDB connection string as follows:
   ```
   MONGODB_URI=your-connection-string
   Port = your port number
   ```

6. Start the application.
   ```bash
   npm start
   ```

7. The API will be accessible at `http://localhost:port`.

## Decisions and Assumptions

- We use Express.js as the framework for building the API.
- MongoDB is used as the database, and the connection string is provided in the `.env` file.
- No user authentication or authorization is implemented in this version of the API, assuming it's for demonstration purposes.

---

This README provides information on how to use the API, set it up locally, and outlines some of the development decisions and assumptions. Make sure to replace placeholders with your specific project details and customize it further as needed.