import nodemailer from 'nodemailer';
export class SendEmail{
    transporter = nodemailer.createTransport({
        host: `smtp-relay.brevo.com`,
        port: `465`,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SENDINBLUE_USER, // your SMTP username
            pass: process.env.SENDINBLUE_PASS // your SMTP password
        }
    });
    sendNotification(toUser, Subject, Content, res){
        const mailOptions = {
            from: process.env.SENDINBLUE_USER,
            to: toUser,
            subject: Subject,
            text: Content
          };

          this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
              return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
          });
    }
}