const Express = require("express")
const app = Express()
const port = 3000


let nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth :{
        user : 'ajithra.ss.ss@gmail.com',
        pass : 'bkndhcvkvoqzlgfa',
        
    }
});

var mailOptions = {
    from : 'ajithra.ss.ss@gmail.com',
    to : 'favoursigncross@gmail.com,syamkrishna406@gmail.com',
    subject : "NODE MAIL SEND",
    text : "Through Node Mailer Email Send became Easier"
};

transporter.sendMail(mailOptions,function(err, info){
    if (err){
        console.log(err);
    }
    else{
        console.log("Email sent:"+info.response)
    }
});

app.listen(port,()=>{
    console.log(`Project NodeMailer listen at http://localhost:${port}`)
})