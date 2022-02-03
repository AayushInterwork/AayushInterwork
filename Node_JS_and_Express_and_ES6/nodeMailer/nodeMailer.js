// NodeMailer used to send Emails 
var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    service:"outlook",
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true, 
    auth:{
        // user:"aayushjoshi129@gmail.com",
        // pass:"zhprfemubwlfqjvm"
        user:"aayush@interwork.biz",
        pass:"Faridabad@121"
    }
})


// Send out Mails
var mailOptions = {
    from:"aayush@interwork.biz",
    to:"aayushj331@gmail.com",
    subject:"Test Mail from mongoDB Express Project",
    text:"Welcome to the Joshi Project of mongoDB and Express"
}

transport.sendMail(mailOptions,(err,info)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("Email Successfully Sent "+info.response);
    }
})