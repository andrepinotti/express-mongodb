import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora:  { type: String },
    preco: { type: Number },
    paginas: { type: Number }
},{ versionKey: false });

//O primeiro parâmetro se refere a coleção que criamos no mongodb
const book = mongoose.model("books", bookSchema);

export default book;