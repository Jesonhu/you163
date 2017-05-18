/**
 * 连接到mysql数据库
 */
const mysqls = require('mysql');

module.exports = (sql, val, callback) => {

    const config = mysqls.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: '3306',
        database: 'mynode'
    });

    config.connect();

    /* 静态操作mysql数据库
        config.query(`SELECT * FROM banner`, (err, data) => {
            console.log(data);
        });
    */

    /* 动态操作 */
    config.query(sql, val, callback);

    config.end();
}

