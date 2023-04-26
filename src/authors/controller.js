const Author = require("./model");
const Book = require("../books/model");

// 7 - Add an author to the database
const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName,
        });
        res.status(201).json({message: "success", author: author });
    } catch (error) {
        console.log(error);
    }
};

// 8 Get a single author by author name and retrieve associated books
const getAuthorAndBooks = async (req, res) => {
  try {
    console.log(req.params);

    const author = await Author.findOne({
      where: { authorname: req.params.authorname },
      include: Book,
    });
        res.status(200).json({ message: "success", author: author });
  } catch (error) {
    console.log(error);
  }
};
    
module.exports = {
    addAuthor,
    getAuthorAndBooks
};