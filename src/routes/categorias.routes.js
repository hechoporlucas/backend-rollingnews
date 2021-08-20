import { Router } from "express";
import categoriaCtrl from "../controllers/categorias.controllers";

const {
  crearCategoria,
  getCategoria,
  eliminarCategoria,
} = categoriaCtrl;

const router = Router();

router.route("/").get(getCategoria).post(crearCategoria);

router.route("/:id").delete(eliminarCategoria);

export default router;
