var conn = require('../model/config')
var Cookies = require('../middleware/cookies')
userController.login = (req, res, next)=>{
    let error = {
        code : 404,
        messenger: "User not found"
    }
    var data =  req.body
    if(!data.phone || !data.password){
        res.json(error)
        return;
    }
    let sql = `SELECT * FROM User WHERE phone_Number = "${data.phone}" AND password = "${data.password}"`;
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        if(result.length == 0){
            res.json(error)
            return;
        }
        else res.json({move :'localhost:3000/home'})
        return;
    })
}

userController.logout = (req, res, next)=>{
    

}

module.exports = userController;