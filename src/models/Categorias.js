import mongoose, { Schema } from "mongoose";

const categoriaSchema = new Schema({
    agregarCategoria: String,
    descripcionCategoria : String
}, {timestamps: true});

const categoria = mongoose.model('categoria', categoriaSchema);

export default categoria;