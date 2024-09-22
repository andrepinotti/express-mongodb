import express, { json, request, response } from "express"
import conectDataBase from "./config/dbConnect.js";

const conexao = await conectDataBase();

conexao.on("error", (erro) => {
    console.log("Connection error", erro); 
});

conexao.once("open", () => {
    console.log("Connection database successfully");
})

const app = express();
app.use(express.json());

const authors = [
    {
        id: 1,
        usuario: 'Schopenhauer'
    }, 
    {
        id: 2, 
        usuario: 'Dostoievski'
    }
]

app.get("/", (req, res) => {
    res.status(200).send("API running");
});

app.get('/authors/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    res.status(200).json(authors[index])
});

app.get('/authors', (req, res) => {
    res.status(200).json(authors)
})

app.post('/authors', (req, res) => {
    authors.push(req.body);
    res.status(201).send("Author registered successfully");
});

app.put('/authors/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    authors[index].usuario = req.body.usuario;
    res.status(200).json(authors);
});

app.delete('/authors/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    authors.splice(index, 1);
    res.status(200).send("Author deleted sucessfully");
});


function findAuthors(id){
    return authors.findIndex((author => {
        return author.id == Number(id)
    }))
}

export default app;

