import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRouter from './routes/pacienteRoutes.js';

const app = express();

dotenv.config();
//Para habilitar el envio de datos al API desde Postaman
app.use(express.json());
conectarDB();

//Cors
const dominiosPermitidos = [process.env.FRONTEND_URL]

const corsOptions ={
    origin: function(origin,callback){
        if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
            //El origen del request esta permitidoS
            callback(null,true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}


app.use(cors(corsOptions));
app.use('/api/veterinarios',veterinarioRoutes);
app.use('/api/pacientes',pacienteRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto :${PORT}`);
})

