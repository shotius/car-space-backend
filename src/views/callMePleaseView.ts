import { IMessageBody } from '../../shared_with_front/types/types-shared';

export const getCallMePleaseView = ({
  message,
  name,
  phone,
  link,
}: IMessageBody) => `
    <p>${message}</p>

    <p style={{padding: 0}}><b> from:  ${name} </b></p>
    <p style={{padding: 0}}><b> phone: ${phone}  </b></p>
    <p style={{padding: 0}}><b> car link: ${link}  </b></p>
`;
