import MailerSend, { Recipient, EmailParams } from "mailersend";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);
const mailersend = new MailerSend({
  api_key: process.env.MAILER_SEND,
});

const templateId = process.env.MAILER_TEMPLATE;

const sendMailer = async (name, email) => {
  const variables = [
    {
      email: email,
      substitutions: [
        {
          var: "name",
          value: name,
        },
      ],
    },
  ];
  const recipients = [new Recipient(email, name)];
  const emailParams = new EmailParams()
    .setFrom("team@qimoda.com")
    .setFromName("Team Qimoda")
    .setRecipients(recipients)
    .setSubject(`We've got your message!`)
    .setTemplateId(templateId)
    .setVariables(variables);
  await mailersend.send(emailParams);
};

const updateAirtable = (body) => {
  base("Customers").create(
    [
      {
        fields: {
          Email: body.email,
          Name: body.name,
          Message: body.message,
        },
      },
    ],
    function (err, records) {
      if (err) {
        throw err;
      }
    }
  );
};

export default async function sendEmail(req, res) {
  try {
    const { body } = req;
    const { name, email, message } = body;
    await sendMailer(name, email);
    updateAirtable(body);

    res.status(200).json({ done: "success" });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}
