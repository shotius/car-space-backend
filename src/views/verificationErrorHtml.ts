import { DOMAIN } from './../utils/constants';

export const verificationErrorHtml = (message: string) => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap"
    rel="stylesheet">
  <title>Document</title>
  <style>
    * {
      padding: 0px;
      margin: 0px;
    }

    .wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .t__heading--error {
      color: red;
      font-size: 48px;
      font-family: 'Roboto';
      margin-bottom: 32px;
    }

    .t__paragraph {
      font-family: 'Roboto';
    }
  </style>
</head>

<body class="wrapper">
  <div>
    <h1 class="t__heading--error">${message}</h1>
    <h1 class="t__heading--error">Link was active for 2 hours after you registered</h1>
    <a href="${DOMAIN}" target="_blank" class="t__paragraph">go to home page</a>
  </div>
</body>
</html>`;
