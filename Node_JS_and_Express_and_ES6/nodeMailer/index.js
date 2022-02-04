// NodeMailer used to send Emails 
var express = require("express")
var app = express();
var { engine } = require('express-handlebars')
var {transporter} = require("./mailerConfig")


// Send out Mails
var mailOptions = {
    from: "aayushjoshi129@gmail.com",
    to: "aayushj331@gmail.com",
    subject: "Test Mail from mongoDB Express Project",
    // text:"Welcome to the Joshi Project of mongoDB and Express",
    html: ({ path: `./views/index.handlebars` })
}

// app.set("view engine","hbs");


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        userName: "Aayush"
    });
});

// app.get("/",(req,res)=>{
//     // res.send("Hello ")
//     res.render("index.handlebars",{
//         userName:"Aayush"
//     })
// });

app.get("/send", (req, res) => {
    res.send("You are Sending Email While Loading this Page \nSending......")
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Email Successfully Sent " + info.response);
        }
    })
})


app.listen(4000);