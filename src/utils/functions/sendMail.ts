import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN,
} from 'utils/config';
import { ApiError } from 'utils/functions/ApiError';
import logger from 'utils/logger';

// const oAuth2Client = ServerGlobal.getInstance.oAuthClient;
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

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
  const accessTokenResponse = await oAuth2Client.getAccessToken();
  const accessToken = accessTokenResponse.token;


  if (!accessToken) {
    throw new ApiError(500, 'could not get access token');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carspace77@gmail.com',
      type: 'OAuth2',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
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
