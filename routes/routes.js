const express = require('express');
const router = express.Router();
const { sendEmailToAdminForContactForm } = require("../email/nodemailer.js")
const {
  buyCrypto,
  sellCrypto,
  uploadUrl,
  getUrl,
  highRateEmail,
} = require('../controllers/action');
const testimonialModel = require('../models/testimonials');

router.post('/buy', buyCrypto);

router.post('/sell', sellCrypto);

router.post('/url', uploadUrl);

router.post('/highrateemail', highRateEmail);

router.get('/getUrl', getUrl);

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendEmailToAdminForContactForm(name, email, message);
    res.json({ mailSent: true })
  } catch (e) {
    res.json({ mailSent: false, error: e })
  }

});

router.post('/newTestimonial', (req, res)=>{
  const newModel = new testimonialModel(req.body);
  newModel.save((err, obj)=>{
    if(err){
      res.status(500);
      return console.error(err)
    }
    else{
      res.json({success:true})
    }
  })
});

router.get('/allTestimonials', (req, res)=>{
  testimonialModel.find({}, (err, arr)=>{
    if(err)return console.error(err);
    else{
      res.json(arr);
    }
  })
})

router.get('/deleteTestimonials/:id', (req, res)=>{
  testimonialModel.findByIdAndDelete(req.params.id, (err, obj)=>{
    if(err){return console.error(err)}
    else res.json({success:true})
  })
})
module.exports = router;
