const nodemailer = require('nodemailer');

async function main(){
    let testAccount = await nodemailer.createTestAccount();
    console.log(testAccount)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.pass // generated ethereal password  
        },
    });
    // Configure Email
    let info = await transporter.sendMail({ 
        from: 'zuhakk@gmail.com', // sender address 
        to: 'zuhakk@gmail.com', // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body


});
console.log(info)
}

main().catch(err=>console.log(err));