const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HpBgALBrSuFftfEJwzsOO3ftu5YUSF0nHmQAlbt4LMWljr6vWQ6FKOhDa6JIRSanmChTSGmGrQ5LJOZvhY3bqoy00qCjAmgXD');
const { v4: uuidv4 } = require('uuid');
const {
  sendEmailToAdminForBuy,
  sendEmailToUserForBuy,
  sendEmailToAdminForSell,
  sendEmailToUserForSell,
  sendEmailToAdminForHighRate,
} = require('../email/nodemailer');
const Admin = require('../models/AdminModel');
const Url = require('../models/UrlModel');

const buyCrypto = async function (req, res) {
  const {name, email, phone, walletId, token, currency, pay} = req.body;
  const idempotencyKey = uuidv4();
  return stripe.customers.create({
    email,
    source:token.id,
    name,
    phone
  }).then((customer)=>{
    stripe.charges.create({
      amount: parseInt(pay),
      currency:'usd',
      customer:customer.id,
      receipt_email: email,
      description:`Currency Bought: ${currency}, Wallet ID: ${walletId}`

    },{idempotencyKey})
  }).then(result=>{
    sendEmailToAdminForBuy(email, phone, name, walletId, currency);
    sendEmailToUserForBuy(email, name, currency, pay, walletId)
    res.json(result);
     
  }).catch(err=>res.json({result:false, err:err}))


};

const sellCrypto = async function (req, res) {
  const { name, email, phone, bankAccount, currency, pay } = req.body;
  const { data } = req.files.file;

  try {
    await sendEmailToAdminForSell(email, phone, name, bankAccount, data);
    await sendEmailToUserForSell(email, name, currency, pay, bankAccount);
    const admin = new Admin({
      name,
      email,
      phone,
      bankAccount,
    });
    await admin.save();
    res.send(true);
  } catch (err) {
    console.log(err);
    res.send(false);
  }
};

const uploadUrl = async function (req, res) {
  const { url } = req.body;

  await Url.deleteMany({});
  const newUrl = new Url({ url });
  try {
    await newUrl.save();
    res.send('Url Added');
  } catch (err) {
    res.send('Please Try Again Later!');
  }
};

const getUrl = async function (req, res) {
  const url = await Url.find({});
  res.send(url);
};

const highRateEmail = async function (req, res) {
  const { name, phone, email, walletId, currency, pay } = req.body;

  try {
    await sendEmailToAdminForHighRate(
      email,
      name,
      phone,
      walletId,
      currency,
      pay
    );
    res.send(true);
  } catch (err) {
    console.log(err);
    res.send(false);
  }
};

module.exports = { buyCrypto, sellCrypto, uploadUrl, getUrl, highRateEmail };
