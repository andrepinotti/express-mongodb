import express, { json, request, response } from "express"
import conectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectDataBase();

conexao.on("error", (erro) => {
    console.log("Connection error", erro); 
});

conexao.once("open", () => {
    console.log("Connection database successfully");
})

const app = express();
routes(app);

app.delete('/books/:id', (req, res) => {
    const index = findAuthors(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book deleted sucessfully");
});


export default app;

