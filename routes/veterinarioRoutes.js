import express from 'express';
import { registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken,nuevoPassword,actualizarPerfil,actualizarPassword} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/',registrar);

//area public
router.get('/confirmar/:token',confirmar);
router.post('/login',autenticar);
router.get('/perfil',checkAuth,perfil);
router.post('/olvide-password',olvidePassword);
//para poder tener una ruta para los dos metodos post y get
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);
//area privada
router.get('/perfil',checkAuth,perfil);
router.put('/perfil/:id',checkAuth,actualizarPerfil)
router.put('/actualizar-password',checkAuth,actualizarPassword)

export default router;