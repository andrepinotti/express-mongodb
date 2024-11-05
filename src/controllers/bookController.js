import book from "../models/Book.js"

class BookController {

    static async listBooks (req, res) {
        try{
            const listBooks = await book.find({});
            res.status(200).json(listBooks)
        } catch(error){
            res.status(500).json({ message: `${error.message} falha na requisição` })
        }

    }

    static async listBooksById (req, res) {
        try{
            const id = req.params.id; 
            const listBooksFind = await book.findById(id);
            res.status(200).json(listBooksFind)
        } catch(error){
            res.status(500).json({ message: `${error.message} falha na requisição do livro` })
        }

    }

    static async registerBook (req, res) {

        try{
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Registered with sucessfully", livro: newBook });
        }
        catch(error){
            res.status(500).json({ message: `${error.message} registered fail`});
        }

    }

    static async updateBook (req, res) {
        try{
            const id = req.params.id; 
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "updated books" })
        } catch(error){
            res.status(500).json({ message: `${error.message} falha na requisição do livro` })
        }
    }

    static async deleteBook (req, res){
        try{
            const id = req.params.id;
            await book.findByIdAndDelete (id, req.body);
            res.status(200).json({ message: "Book deleted sucessfully" });
        } catch(error){
            res.status(500).json({ message: `${error.message} delete fail` });
        }
    }


}



export default BookController; 