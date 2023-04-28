var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Victorgraeff.sb@gmail.com',
    pass: 'vodzuudjglwhasut'
  }
});

var mailOptions = {
  from: 'Victorgraeff.sb@gmail.com',
  to: 'jfranciscobratti@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Renovação da conta do onli fans'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});