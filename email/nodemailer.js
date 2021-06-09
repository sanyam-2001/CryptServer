const nodemailer = require('nodemailer')


exports.sendEmailToAdminForBuy = async function (email, phone, name, walletId, currency) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});
  const msg = {
    from: 'Crypto Cham <payments@programmechameleon.com>',
    to: 'payments@programmechameleon.com',
    subject: 'Hey, Admin! Send Crypto To the User!',
    html: `<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                        User Has Requested to Buy Crypto
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
                      Dear Admin,<br><br>
                      User Name : ${name}<br><br>
                      User Email : ${email}<br><br>
                      User Phone Number : ${phone}<br><br>
                      User Wallet Id : ${walletId}<br><br>
                      Crypto: ${currency}
                    </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
              <div class="mktEditable" id="cta_try">
                <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                      
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
                          
                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                          Get started with Buy Crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>
                          
                          </td>
                        </tr>
                            </table>
                        </td>	
                    <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
                          
                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                          Get Started with sell crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>
                          
                          </td>
                        </tr>
                            </table>
                        </td>	
                    </tr>
                </table>
              </div>
              </td>
            </tr>											
            <tr>
              <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                      <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                        <tr>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </body>`,
  };

  const result = await transport.sendMail(msg)
};
exports.sendEmailToUserForBuy = async function (
  email,
  name,
  currency,
  pay,
  walletId
) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});

  const msg = {
    to: email,
    from: 'Crypto Cham <payments@programmechameleon.com>',
    subject: 'Congratulations, User! You have Bought Crypto Successfully!!',
    html: 
    `
    <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">

  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                        Thank You ${name} for Buying Crypto!
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
                      Thank you for purchasing your ${currency} to the value of $${pay}.<br><br>
We will send your crypto to your address ${walletId} as soon as we have received the funds. Please note that we will not be held responsible for deposits to incorrectly provided addresses.
<br><br>
                    </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
              <div class="mktEditable" id="cta_try">
                <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">

                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                          Get started with Buy Crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                          Get Started with sell crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    </tr>
                </table>
              </div>
              </td>
            </tr>											
            <tr>
              <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                      <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                        <tr>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>

                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </body>
    `,
  };

  const result = await transport.sendMail(msg)
};
exports.sendEmailToUserForSell = async function (email, name, currency, pay, bankAccount) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});
  const msg = {
    to: email,
    from: 'Crypto Cham <payments@programmechameleon.com>',
    subject: 'Congratulations! You have Sold Successfully!',
    html: 
    `
    <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">

    <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
        <tr>
          <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
            <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
              <tr>
                <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                  <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
                </td>
              </tr>
              <tr>
                <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                  <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                        <div class="mktEditable" id="main_title">
                          Thank You ${name} for Selling Crypto!
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                        <hr size="1" color="#eeeff0">
                      </td>
                    </tr>
                    <tr>
                      <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                      <div class="mktEditable" id="main_text">
                        Hello ${name}<br> Thank you for selling your crypto ${currency}  to the value of ${pay}. We will initiate payment (minus 3.9% fee) to ${bankAccount},  once confirmation has been provided of the deposit.<br><br>
                      </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
                <div class="mktEditable" id="cta_try">
                  <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                      <tr>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
  
                              <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                                <tr>
                            <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
  
                            <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                            Get started with Buy Crypto<br><br>
                                                                       <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>
  
                            </td>
                          </tr>
                              </table>
                          </td>	
                      <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                          <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                              <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                                <tr>
                            <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
  
                            <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                            Get Started with sell crypto<br><br>
                                                                       <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>
  
                            </td>
                          </tr>
                              </table>
                          </td>	
                      </tr>
                  </table>
                </div>
                </td>
              </tr>											
              <tr>
                <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                  <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                        <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                          <tr>
                      <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                      <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                      <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                      <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      </body>
    `,
  };

  const result = await transport.sendMail(msg)

};
exports.sendEmailToAdminForSell = async function (
  email,
  phone,
  name,
  bankAccount,
  imgsrc
) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});
  const msg = {
    to: 'payments@programmechameleon.com',
    from: 'Crypto Cham <payments@programmechameleon.com>',
    subject: 'Hey Admin, User wants to sell Crypto Currency!',
    html: `<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                        Selling Request Come from the User
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
                      Dear Admin,<br><br>
                      User Name : ${name}<br><br>
                      User Email : ${email}<br><br>
                      User Phone Number : ${phone}<br><br>
                      User Bank Account Number : ${bankAccount}
                    </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
              <div class="mktEditable" id="cta_try">
                <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">

                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                          Get started with Buy Crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                          Get Started with sell crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    </tr>
                </table>
              </div>
              </td>
            </tr>											
            <tr>
              <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                      <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                        <tr>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </body>`,
    attachments: [
      {
        filename: 'Payment.png',
        type: 'image/png',
        content: new Buffer.from(imgsrc).toString('base64'),
        contentId: 'myimageid',
        disposition: 'attachment',
      },
    ],
  };
  const result = await transport.sendMail(msg)

};
exports.sendEmailToAdminForHighRate = async function (
  email,
  name,
  phone,
  walletId,
  currency,
  pay
) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});
  const msg = {
    to: 'payments@programmechameleon.com',
    from: 'Crypto Cham <payments@programmechameleon.com>',
    subject:
      'Hey, Admin! User Wants to buy Crypto worth more than 15K. Please Contact..',
    html: `<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                        Buying Request Come from the User
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
                      Dear Admin,<br><br>
                      User Name : ${name}<br><br>
                      User Email : ${email}<br><br>
                      User Phone Number : ${phone}<br><br>
                      User Wallet ID : ${walletId}
                      User Currency : ${currency}
                      User Pay : ${pay}
                    </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
              <div class="mktEditable" id="cta_try">
                <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">

                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                          Get started with Buy Crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                          Get Started with sell crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    </tr>
                </table>
              </div>
              </td>
            </tr>											
            <tr>
              <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                      <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                        <tr>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </body>`,
  };
  const result = await transport.sendMail(msg)

};
exports.sendEmailToAdminForContactForm = async function (
  email,
  name,
  message
) {
  const transport = nodemailer.createTransport({
    host: 'smtp.livemail.co.uk',
    port: 587,
    auth: {
        user: 'payments@programmechameleon.com',
        pass: 'Seanus2018!'
    }
});
  const msg = {
    to: 'payments@programmechameleon.com',
    from: 'Crypto Cham <payments@programmechameleon.com>',
    subject:
      'Hey Admin, User Wants To Contact You!',
    html: `<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://bitcoin-6474f.web.app"><img class="top-image" src="https://bitcoin-6474f.web.app/images/logo.jpeg" style="line-height: 1;width: 600px;" alt="Tenable Network Security"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                        User wants To Contact You!
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
                      Dear Admin,<br><br>
                      User Name : ${name}<br><br>
                      User Email : ${email}<br><br>
                      Message: ${message}
                    </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
              <div class="mktEditable" id="cta_try">
                <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                    <tr>
                      <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">

                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Crypto</span><br>
                          Get started with Buy Crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/buy">Buy</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                        <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                              <tr>
                          <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">

                          <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Sell Crypto</span><br>
                          Get Started with sell crypto<br><br>
                                                                     <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://bitcoin-6474f.web.app/sell">Sell</a>

                          </td>
                        </tr>
                            </table>
                        </td>	
                    </tr>
                </table>
              </div>
              </td>
            </tr>											
            <tr>
              <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                      <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                        <tr>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://twitter.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/Tenable.Inc"><img src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/tenablesecurity"><img src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"></a></td>
                    <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.linkedin.com/company/tenable-network-security"><img src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"></a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </body>`,
  };
  const result = await transport.sendMail(msg)

};
