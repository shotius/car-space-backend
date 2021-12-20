import nodemailer from 'nodemailer';

export async function sendEmail({
  to,
  email,
  subject = 'Verification',
}: {
  to: string;
  email: string;
  subject?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carspace77@gmail.com',
      pass: 'Car-Space77!',
    },
  });

  console.log('emal', email)

  let info = await transporter.sendMail({
    from: '"Car Space" carspace77@gmail.com', // sender address
    to,
    subject,
    html: email,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
