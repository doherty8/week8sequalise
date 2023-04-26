const Genre = require("./model");
const Book = require("../books/model");


// 9 - Stretch goal - Add a genre to the database
const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({
            genreName: req.body.genreName,
        });
        res.status(201).json({message: "success", genre: genre });
    } catch (error) {
        console.log(error);
    }
};

const getAllBooks = async (req, res) => {
    try {
      console.log(req.params);
  
      const genre = await Genre.findOne({
        where: { genrename: req.params.genrename },
        include: Book,
      });
          res.status(200).json({ message: "success", genre: genre });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
    addGenre,
    getAllBooks
};