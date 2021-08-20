import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import './database';
import noticiaRouter from './routes/noticias.routes';
import usuarioRouter from './routes/usuarios.routes';
import categoriaRouter from './routes/categorias.routes';

const app = express(); //instancia de express

app.set("port", process.env.MONGODB_URI || 4000); //creamos una variable para el puerto

app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("estamos escuchando el puerto " + app.get("port"));
});

//middlewares...
app.use(morgan("dev"));
app.use(cors()); //para recibir solicitudes remotas (get, put, post, etc).
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para entender json tmb el de arriba.
app.use(express.static(path.join(__dirname, "../public"))); //es para decir q nuestra carpeta public es estatica (y para acceder tmb);

//Ruta..
app.use('/api/rn', noticiaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/categoria', categoriaRouter);
