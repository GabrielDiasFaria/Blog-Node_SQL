module.exports = function(application){
    
    application.get('/noticia', function(req, res){
        
        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiaDAO(connection);
        
        noticiaModel.getNoticia(function(err, result){
            res.render("noticias/noticia", {noticia: result.recordset});
        });
        
        /* connection.connect().then(pool => {
            return pool.request().query('SELECT * FROM noticias WHERE id_noticia = 1');
        }).then(result =>{
            res.render("noticias/noticia", {noticia: result.recordset});
        }).catch(err => {
            console.log(err);
        }); */
    
    });
};