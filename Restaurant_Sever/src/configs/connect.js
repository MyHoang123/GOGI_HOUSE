var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '04012002',
    database: 'billnew'
})

conn.connect(function(err, conn) {
    if(err) {
        console.log("fail")}
        else {
            console.log("seccess")
        }
})
module.exports = conn