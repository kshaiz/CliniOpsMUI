const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jsontotable = require('./jsontotable');
const cors = require('cors');

const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const route = express.Router();

const port = process.env.PORT || 5000;
const email = 'randomadi123@outlook.com';
const passwd = '***********';
const defaultEmail = 'aadisrikanth@gmail.com'

app.use('/v1', route);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.office365.com",
    auth: {
        user: email,
        pass: passwd,
    },
});

route.post('/submitData', (req, res) => {
    const { to, subject, data } = req.body;
    const mailData = {
        from: email,
        to: to || defaultEmail,
        subject: subject,
        text: JSON.stringify(data, null, 2),
        html: jsontotable([data]),
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});


route.post('/test', (req, res) => {
    const { to, subject, text } = req.body;
    const mailData = {
        from: 'youremail@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
        // attachments: [
        //     {   // file on disk as an attachment
        //         filename: 'nodemailer.png',
        //         path: 'nodemailer.png'
        //     },
        //     {   // file on disk as an attachment
        //         filename: 'text_file.txt',
        //         path: 'text_file.txt'
        //     }
        // ]
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
