import { Router } from "express";
import usuariosCtrl from "../controllers/usuarios.controllers";

const {
  getUsuarios,
  crearUsuario,
  eliminarUsuario,
  modificarUsuario,
} = usuariosCtrl;

const router = Router();

router.route('/').get(getUsuarios).post(crearUsuario);

router.route('/:id').put(modificarUsuario).delete(eliminarUsuario);

export default router;
