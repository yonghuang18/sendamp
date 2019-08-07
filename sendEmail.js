const nodemailer = require('nodemailer');

async function sendEmail(sender, option) {
    let transporter;
    if (sender.host) {
        transporter = nodemailer.createTransport({
            host: sender.host,
            port: 587,
            secure: true,
            auth: {
                user: sender.user,
                pass: sender.password
            }
        });
    } else {
        transporter = nodemailer.createTransport({
            service: sender.service,
            auth: {
                user: sender.user,
                pass: sender.password
            }
        });
    }

    const info = await transporter.sendMail(option);
    return Promise.resolve(info);
}

module.exports = sendEmail;