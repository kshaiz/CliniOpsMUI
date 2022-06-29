const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jsontotable = require('./jsontotable');
const cors = require('cors');
const multer  = require('multer');
const upload = multer();

const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const route = express.Router();

const port = process.env.PORT || 5000;
const email = 'k.shaiz@outlook.com';
const passwd = 'Dcba$321';
const defaultEmail = 'k.shaiz@outlook.com';
const smtp = 'smtp.office365.com';
const smtpPort = 587;

app.use('/v1', route);
app.use(express.static(__dirname + '/build'));
app.use('/cliniopsmui',express.static(__dirname + '/build'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: smtpPort,
    host: smtp,
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


route.post('/applyCareer',upload.single('resume'), (req, res) => {
    console.table(req.body);
    console.log(req.file);
    const { title } = req.body;
    const mailData = {
        from: email,
        to: defaultEmail,
        subject: `Job Application for ${title}`,
        text: JSON.stringify(req.body, null, 2),
        html: jsontotable([req.body]),
        attachments: [
            {
                filename: req.file.originalname,
                content: req.file.buffer
            },
        ]
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
