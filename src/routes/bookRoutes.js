import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get('/');

routes.get("/books", BookController.listBooks);

routes.get("/books/:id", BookController.listBooksById);

routes.post("/books/:id", BookController.registerBook);

routes.put("/books/:id", BookController.updateBook);

routes.delete("/books/:id", BookController.deleteBook);

export default routes;