const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, deleteBook, updateBook, getBookByTitle, deleteAllBooks } = require("./controller");

// 1 - Add a book to the database
bookRouter.post("/books/addbook", addBook);

// 2 - Get all books stored in the database
bookRouter.get("/books/getallbooks", getAllBooks);

// 3 - Find book by title
bookRouter.get("/books/getbookbytitle", getBookByTitle);

// 4 - Update an entry in the database
bookRouter.put("/books/updatebook", updateBook);

// 5 - Delete a book from the database by title
bookRouter.delete("/books/deletebook", deleteBook);

// 6 - Delete all entries from the database
bookRouter.delete("/books/deleteallbooks", deleteAllBooks);

module.exports = bookRouter;