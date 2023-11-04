var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport");
export async function SendEmail(name,
    email,
    EmailText,
    EmailSubject) {
    let transporter = nodemailer.createTransport(smtpTransport({
        host: 'mail.amitjs.com',
        port: 465,
        secure: true,
        auth: {
            user: "test@amitjs.com",
            pass: 'ykf$4A0my,%P'
        },tls: {
            rejectUnauthorized: false
        },
    })
    
    
    );

    let mailOptions = {
        from: email,
        to: `amitbd599@gmail.com`,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)
}