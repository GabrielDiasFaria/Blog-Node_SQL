module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiaDAO(connection);

    noticiaModel.getNoticias(function (err, result) {
        res.render("noticias/noticias", { noticias: result.recordset });
    });

    /*
    connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias');
    }).then(result =>{
        //res.send(result.recordset);
        res.render("noticias/noticias", {noticias: result.recordset});
        //console.log(result.recordset);
    }).catch(err => {
        console.log(err);
    });
    */
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiaDAO(connection);
    var query = req.query;

    noticiaModel.getNoticia(query, function (err, result) {
        res.render("noticias/noticia", { noticia: result.recordset });
    });

    /* connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias WHERE id_noticia = 1');
    }).then(result =>{
        res.render("noticias/noticia", {noticia: result.recordset});
    }).catch(err => {
        console.log(err);
    }); */
}