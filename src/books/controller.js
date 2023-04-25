const Book = require("./model");

// 1 - Add a book to the database
const addBook = async (req, res) => {
    try {
        const book = await Book.create({
          title: req.body.title,
          authorName: req.body.authorName,
          genre: req.body.genre,
          AuthorId: req.body.AuthorId,
          GenreId: req.body.GenreId,
        });
        res.status(201).json({message: "success", book: book });
    } catch (error) {
        console.log(error);
    }
};

// 2 - Get all books stored in the database
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

// 3 - Find book by title
const getBookByTitle = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: {
        title: req.body.title,
      }
    });

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

// 4 - Update an entry in the database using the book title
const updateBook = async (req, res) => {
    try {
      const updateBook = await Book.update(
        {
          title: req.body.newTitle,
          author: req.body.newAuthor,
          genre: req.body.newGenre,
        },
        {
          where: {
            title: req.body.title,
          },
        }
      );
      res.status(201).json({ message: "success", updateResult: updateBook });
    } catch (error) {
      console.log(error);
    }
  };

  // FAO Michael - I know we discussed the above method and you advised it was inefficient, I attmepted the below but couldn't get it to function
  // const updateBook = await Book.update(
  //   { [req.body.field]: req.body.value },
  //   {
  //     where: {title: req.params.title,}},
  //     { new: true}
  // );


// 5 - Delete a book from the database by title
const deleteBook = async (req, res) => {
    try {
        const {title} = req.body;
        const book = await Book.destroy({
            where: {
                title: title,
            },
        });
        res.status(201).json({message: "success", result: book });
    } catch (error) {
        console.log(error); 
    }
};

// 6 - Delete all entries from the database
const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({
  truncate: true
  });
  res.status(201).json({message: "success", result: Book });
  } catch (error) {
    console.log(error); 
  }
};

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    getBookByTitle,
    deleteAllBooks
};