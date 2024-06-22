import nodemailer from 'nodemailer';

const emailRegistro = async(datos)=>{
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
        subject:'Comprueba tu cuenta en APV',
        text:'Comprueba tu cuenta en APV',
        html: `<p>Hola ${nombre},compruba tu cuenta en APV.</p>
                <p>Tu cuenta ya esta lista,solo debes comprobarla en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>

                <p>Si tu no creaste esta cuenta,puedes ignorar este mensaje</p>

        `,
    })

    console.log("mensaje enviado :%s",info.messageId);
};

export default emailRegistro;