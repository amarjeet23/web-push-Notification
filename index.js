const express = require("express")
const webPush = require("web-push")
const bodyParser = require("body-parser")
const path = require('path')

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client")));


const publicVapidKey = 'BCa8FUCpjCOaWYPfsGFR8bS16lXOixUaPltu4hwbn0SY5nFvUzY_2A5moQ3cOvmlJApV-bos7HdtEnvHU7x5V78';
const privateVapidKey ='wQZAtN7T9U7uFfnSNdwW3r7LXSjHhez2FM7jg332nYI';
webPush.setVapidDetails('mailto:amarjeet.kumar@shephertz.co.in',publicVapidKey,privateVapidKey);



//subscribe route

app.post('/subscribe',(req,res)=>{
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({title:'push Notification'});

    webPush.sendNotification(subscription,payload).catch(err =>console.log(err));
});

const port  =8000;

app.listen(port ,()=>{
    console.log("server started on port 8000");
})
