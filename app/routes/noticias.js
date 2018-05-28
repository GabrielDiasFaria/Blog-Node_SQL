module.exports = function(application){
    
    application.get('/noticias', function(req, res){
        
        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiaDAO(connection);
        
        noticiaModel.getNoticias(function(err, result){
            res.render("noticias/noticias", {noticias: result.recordset});
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
    
    });
};