var conn = require('../model/config')
userUtil.getAllUser = ()=>{
    let sql = "SELECT name, phone_Number, email FROM User WHERE role_ad = '0'; ";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        if(result.length == 0){
            return ""
        }
    })
}

module.exports = userUtil;