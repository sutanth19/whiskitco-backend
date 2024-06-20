import express from 'express'
import { SendEmail } from './Email/SendEmail.js';
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  // Placeholder for email sending logic
  const sendEmail = new SendEmail;
  await sendEmail.sendNotification(to, subject, text, res);

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});