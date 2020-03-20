const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'admin@saugatsigdel.com.np',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'admin@saugatsigdel.com.np',
        subject: 'Thanks for Cancellation',
        text: `Why you cancel, ${name}. Let me know how you get along with the app.`
    });
};

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
};