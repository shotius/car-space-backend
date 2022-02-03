import nodemailer from 'nodemailer';
import logger from 'utils/logger';

export async function sendEmail({
  to,
  text,
  subject = 'Verification',
  from = 'carspace77@gmail.com',
}: {
  to: string;
  text: string;
  subject?: string;
  from?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carspace77@gmail.com',
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Car Space" ${from}`, // sender address
    to,
    subject,
    html: text,
  });

  logger.info('Message sent: %s', info.messageId);
  logger.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
