import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get('/');
routes.get("/books", BookController.listBooks);
