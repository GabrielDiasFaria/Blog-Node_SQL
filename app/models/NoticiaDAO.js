function NoticiasDAO(connection, callback){
    this._connection = connection;
}

// RETORNA NOTÍCIAS
NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias', callback);
    });
}

// RETORNA NOTÍCIAS
NoticiasDAO.prototype.getTopFive = function(callback){
    this._connection.connect().then(pool => {
        return pool.request().query('SELECT TOP 5 * FROM noticias ORDER BY data_criacao DESC', callback);
    });
}

// RETORNA NOTÍCIA
NoticiasDAO.prototype.getNoticia = function(query, callback){
    this._connection.connect().then(pool => {
        return pool.request().query('SELECT * FROM noticias WHERE id_noticia = ' + query.id_noticia, callback);
    });
}

// RETORNA NOTÍCIA
NoticiasDAO.prototype.postNoticia = function (noticia, callback){
    this._connection.connect().then(pool => {
        console.log(noticia); 
        return pool.request().query("INSERT INTO noticias VALUES ('"+noticia.titulo+"','"+noticia.noticia+"', getdate(), '"+noticia.resumo+"', '"+noticia.autor+"', '"+noticia.data_noticia+"')", callback);
    });
}

module.exports = function(){
    return NoticiasDAO;
}

//module.exports.getNoticias = getNoticias;
//module.exports.getNoticia  = getNoticia;
//module.exports.postNoticia = postNoticia;