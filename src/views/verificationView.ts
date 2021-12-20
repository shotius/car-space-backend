import { capitalizeEach } from './../utils/functions/capitalizeEach';
interface Props {
  hash: string;
  fullName: string;
}

export const verificationView = ({ hash, fullName }: Props) => `
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap"
    rel="stylesheet">
  <title>Document</title>
  <style>
      * {
      margin: 0px;
      padding: 0px
    }

    .wrapper {
      display: flex;
      background-color: #F4F4F5;
      padding: 48px;
    }

    .wrapper__content {
      margin: 0 auto; 
      width: 100%;
      max-width: 520px;
      background-color: white;
      border-radius: 8px;
      padding: 32px;
    }

    .t__header {
      text-align: center;
      margin-bottom: 16px;
      font-family: 'Roboto', sans-serif;
    }

    .t__paragraph--greeting {
      font-size: 20px;
      color: #FB5607;
      margin-bottom: 12px;
      font-family: 'Roboto', sans-serif;
    }

    .t__paragraph {
      font-size: 16px;
      opacity: 0.8;
      font-family: 'Roboto', sans-serif;
      line-height: 24px;
    }

    .btn {
      display: inline-block;
      color: white;
      border-radius: 8px;
      background-color: #FB5607;
      padding: 12px 16px;
      margin: 8px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
    }

    a,
    a:visited,
    a:hover,
    a:active {
      color: white;
    }

    .btn:hover {
      opacity: 0.8;
    }

    .btn:active {
      opacity: .9;
    }

    .btn__verify {
      text-decoration: none;
      margin: 0 auto
    }

    .wrapper__verfy {
      width: 100%;
      padding: 24px 0px;
      display: flex;
    }

    .-op-low {
      opacity: 0.5;
    }

    .-text-center {
      text-align: center;
    }
  </style>
</head>

  <body>
    <div class="wrapper">
      <div class="wrapper__content">
        <h1 class="t__header">Car Space</h1>
        <p class="t__paragraph--greeting">Hello ${capitalizeEach(
          fullName
        )}, </p>
        <p class="t__paragraph">Verify your account to complete the registration, link is valid for 2 hours</p>
        <div class="wrapper__verfy">
          <a style={{color: '#fff'}} href="http://localhost:3001/api/user-verification/${hash}" class="btn btn__verify">
            Verify Account
          </a>
        </div>
        <div class="footer">
          <p class="t__paragraph ">Best regards, </p>
          <p class="t__paragraph -op-low -py-m">Car Space</p>
        </div>
      </div>
  </body>
</html>
`;
