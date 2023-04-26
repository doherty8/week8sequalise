const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    authorName: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
});

module.exports = Book;