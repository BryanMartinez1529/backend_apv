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
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ['*']);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//Cors
// const dominiosPermitidos = [process.env.FRONTEND_URL,'*']

// const corsOptions ={
//     origin: function(origin,callback){
//         if (dominiosPermitidos.indexOf(origin) !== -1 ) {
//             //El origen del request esta permitidoS
//             callback(null,true);
//         }else{
//             callback(new Error('No permitido por CORS'))
//         }
//     }
// }


//app.use(cors());
app.use('/api/veterinarios',veterinarioRoutes);
app.use('/api/pacientes',pacienteRouter);
app.use('/prueba',(req,res)=>{
    res.json({msg: 'Si funcciona'})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto :${PORT}`);
})

