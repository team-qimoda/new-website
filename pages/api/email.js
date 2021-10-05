import MailerSend, { Recipient, EmailParams } from "mailersend";

const mailersend = new MailerSend({
  api_key: process.env.MAILER_SEND,
});

export default async function sendEmail(req, res) {
  try {
    const { body } = req;
    const { name, email, message } = body;
    const recipients = [new Recipient("team.qimoda@gmail.com", "Recipient")];

    const emailParams = new EmailParams()
      .setFrom("team@qimoda.com")
      .setFromName("Website")
      .setRecipients(recipients)
      .setSubject("New customer")
      .setHtml(
        <div>
          New customer alert!
          <div>Name: ${name}</div>
          <div>Email: ${email}</div>
          <div>Message: ${message}</div>
        </div>
      )
      .setText(`New customer: ${name}, Email: ${email}`);

    mailersend.send(emailParams);
    res.status(200).json({ done: "success" });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}
