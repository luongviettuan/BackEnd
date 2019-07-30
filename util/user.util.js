var conn = require('../model/config')

userUtil.getAllUser = ()=>{
    let sql = "SELECT id, name, email FROM User WHERE role_ad = '0'; ";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

userUtil.getUserById = (id)=>{
    let sql = `SELECT id, name, email, type_user, total FROM User WHERE id = '${id}'; `;
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

userUtil.getNameHaveTotalTop = ()=>{
    let sql = "SELECT name, MAX(total) FROM User group by name;";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

userUtil.getNewTypeById=(id)=>{
    let sql = "SELECT name, id, email total WHERE type_user = 'New';";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

userUtil.getFriendlyTypeById=(id)=>{
    let sql = "SELECT name, id, email total WHERE type_user = 'Friendly';";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

userUtil.getVipTypeById=(id)=>{
    let sql = "SELECT name, id, email total WHERE type_user = 'Vip';";
    conn.query(sql, (err, result)=>{
        if(err) throw err;
        return result;
    })
}

module.exports = userUtil;