import mongoose, { Schema } from "mongoose";

const noticiasSchema = new Schema({
  tituloNoticia: {
    type: String,
    required: true,
    unique: true,
  },
  descripcionBreve: { type: String, required: true },
  descripcionDetallada: { type: String, required: true },
  imagenPrincipal: { type: String, required: true },
  categoria: { type: String, required: true },
  autor: { type: String, required: true },
  fecha: { type: String, required: true },
  principalPortada: { type: Boolean, required: true },
  principalCategoria: { type: Boolean, required: true }
});
