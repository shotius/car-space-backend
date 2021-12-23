import nodemailer from 'nodemailer';
import logger from 'utils/logger';

export async function sendEmail({
  to,
  text,
  subject = 'Verification',
}: {
  to: string;
  text: string;
  subject?: string;
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carspace77@gmail.com',
      pass: 'Car-Space77!',
    },
  });

  let info = await transporter.sendMail({
    from: '"Car Space" carspace77@gmail.com', // sender address
    to,
    subject,
    html: text,
  });

  logger.info('Message sent: %s', info.messageId);
  logger.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
