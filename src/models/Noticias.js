import mongoose, { Schema } from "mongoose";

const noticiasSchema = new Schema(
  {
    tituloNoticia: {
      type: String,
      required: true,
      unique: true,
    },
    descripcionBreve: String,
    descripcionDetallada: String,
    imagenPrincipal: String,
    categoria: String,
    autor: String,
    fecha: String,
    principalPortada: String,
    principalCategoria: String,
  },
  { timestamps: true }
);

const Noticia = mongoose.model("noticia", noticiasSchema);

export default Noticia;
