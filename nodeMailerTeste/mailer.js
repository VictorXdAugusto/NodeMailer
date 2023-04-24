const nodemailer = require('nodemailer');
const handlebars = require('handlebars');


const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dbdc0259de854d",
      pass: "f1203b3ef4d6d4"
    }
  });

transporter.use('compile', nodemailerHandlebars({
    viewEngine: 'handlebars',
    viewPath: './mail',
    extName: '.html'
}));

