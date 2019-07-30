var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json())
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var cookies = require('./middleware/cookies');
app.use(cookies.checkCookieUser)


var userRouter = require('./router/user.router')
app.use('/user', userRouter)

app.get('/', (req, res, next)=>{
    res.send('this is home')
})

app.listen(port, ()=>{
    console.log('Server lisning on 3000');
})