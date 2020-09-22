import mongoose, { Schema } from "mongoose";

const usuariosSchema = new Schema({
    nombre: String,
    apellido : String,
    correo : String,
    password : String,
    state : Boolean,
    range : Number
}, {timestamps: true});

const Usuario = mongoose.model('usuario', usuariosSchema);

export default Usuario;