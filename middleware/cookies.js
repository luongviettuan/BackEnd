var uniqid = require('uniqid');
module.exports.checkCookie = (req, res, next)=>{
    var cookies = req.cookies.user_cookie
    if(!cookies || cookies == undefined){
        res.cookie('user_cookie', uniqid() , { expires: new Date(Date.now() + 1000*60*60*24*365), httpOnly: true })
    }
    else console.log(cookies);
    next();
}
