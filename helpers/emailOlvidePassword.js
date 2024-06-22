import nodemailer from 'nodemailer';

const emailOlvidePassword = async(datos)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const{email,nombre,token}= datos;
    //Enviar email
    const info = await transporter.sendMail({
        from: "APV -Administrado de Pacientes de Veterinaria",
        to: email,
        subject:'Restablece tu password',
        text:'Restablece tu password',
        html: `<p>Hola ${nombre},has solicistado reestablecer tu password.</p>
                <p>Sigue  el siguiente enlace para generar tu password:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Cuenta</a>

                <p>Si tu no creaste esta cuenta,puedes ignorar este mensaje</p>

        `,
    })

    console.log("mensaje enviado :%s",info.messageId);
};

export default emailOlvidePassword;