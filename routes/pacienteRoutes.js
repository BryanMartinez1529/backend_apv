import express from 'express';
import { agregarPaciente,obtenerPacientes,obtenerPaciente,actualizarPaciente,eliminarPaciente} from '../controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(checkAuth,obtenerPacientes).post(checkAuth,agregarPaciente);

router.route('/:id').get(checkAuth,obtenerPaciente).put(checkAuth,actualizarPaciente).delete(checkAuth,eliminarPaciente);

export default router;