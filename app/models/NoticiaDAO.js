function NoticiasDAO(connection, callback){
    this._connection = connection;
}

// RETORNA NOTÍCIAS
NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias', callback);
    });
}

// RETORNA NOTÍCIA
NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
    });
}

// RETORNA NOTÍCIA
NoticiasDAO.prototype.postNoticia = function (noticia, callback){
    this._connection.connect().then(pool => {
        console.log(noticia); 
        return pool.request().query("insert into noticias values ('"+noticia.titulo+"','"+noticia.noticia+"', getdate(), '"+noticia.resumo+"', '"+noticia.autor+"', '"+noticia.data_noticia+"')", callback);
    });
}

module.exports = function(){
    return NoticiasDAO;
}

//module.exports.getNoticias = getNoticias;
//module.exports.getNoticia  = getNoticia;
//module.exports.postNoticia = postNoticia;