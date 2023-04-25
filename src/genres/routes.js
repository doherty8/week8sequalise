const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllBooks } = require("./controller");

// 9 - Stretch goal - Add a genre to the database
genreRouter.post("/genres/addgenre", addGenre);

// 10 - Stretch goal - Get a single genre by genre name and retrieve associated books
genreRouter.get("/genres/getbooksbygenre/:genrename", getAllBooks);


module.exports = genreRouter;