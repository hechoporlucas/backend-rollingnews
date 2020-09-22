import mongoose, { Schema } from "mongoose";

const usuariosSchema = new Schema({
    nombre: String,
    apellido : String,
    mail : String,
    password : String,
    state : Boolean,
    range : Number
});