import { Router } from "express";
import noticiasController from "../controllers/noticias.controllers";

const {
  crearNoticia,
  getNoticias,
  eliminarNoticia,
  modificarNoticia,
} = noticiasController;

const router = Router();

router.route("/").get(getNoticias).post(crearNoticia);

router.route("/:id").delete(eliminarNoticia).put(modificarNoticia);

export default router;
