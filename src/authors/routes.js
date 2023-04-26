const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthorAndBooks  } = require("./controller");

// 7 - Add an author to the database
authorRouter.post("/authors/addauthor", addAuthor);

// 8 Get a single author by author name and retrieve associated books
authorRouter.get("/authors/getauthorandbooks/:authorname", getAuthorAndBooks);


module.exports = authorRouter;