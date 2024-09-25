import book from "../models/Book.js"

class BookController {

    static async listBooks (req, res) {
        const listBooks = await book.find({});
        res.status(200).json(listBooks)
    }

}

export default BookController; 