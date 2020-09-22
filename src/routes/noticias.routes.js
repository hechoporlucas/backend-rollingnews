import {Router} from 'express';
import noticiasController from '../controllers/noticias.controllers';

const {getPrueba, crearNoticia} = noticiasController

const router = Router();

router.route('/').get(getPrueba).post(crearNoticia);

export default router;