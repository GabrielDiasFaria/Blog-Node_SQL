var mssql = require('mssql');

var connMSSQL = function(){
    return connection = new mssql.ConnectionPool({
        user: 'sap',
        //password: 'sap@2008',
        //server: 'rgtvtsql',
        password: '1qaz@WSX3edc',
        server: 'mssql03.redehost.com.br',
        port: '5003',
        database: 'Intranet',
        options: {
            trustedConnection: true
        }
    });
}

module.exports = function () {
    return connMSSQL;
}

// 395527