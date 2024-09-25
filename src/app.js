import express, { json, request, response } from "express"
import conectDataBase from "./config/dbConnect.js";
import book from "./models/Book.js";

const conexao = await conectDataBase();

conexao.on("error", (erro) => {
    console.log("Connection error", erro); 
});

conexao.once("open", () => {
    console.log("Connection database successfully");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API running");
});

app.get('/books/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    res.status(200).json(books[index])
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send("Book registered successfully");
});

app.put('/books/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    books[index].usuario = req.body.usuario;
    res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book deleted sucessfully");
});


export default app;

