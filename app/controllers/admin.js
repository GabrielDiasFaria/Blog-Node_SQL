module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;
    //res.send(noticia);

    req.assert('titulo', 'Título Obrigatório').notEmpty();
    req.assert('noticia', 'Noticia Obrigatória').notEmpty();
    req.assert('resumo', 'Resumo Obrigatório').notEmpty();
    req.assert('autor', 'Autor Obrigatório').notEmpty();
    req.assert('data_noticia', 'Data Obrigatória').notEmpty();//.isDate({format: 'YYYY-MM-DD'});    

    var lv_erros = req.validationErrors();

    if (lv_erros) {
        res.render("admin/form_add_noticia", { validacao: lv_erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiaDAO(connection);

    noticiaModel.postNoticia(noticia, function (err, result) {
        if (err) {
            console.log(err.originalError.info.message);
        } else {
            res.redirect("/noticias");
        }
        //res.render("noticias/noticias", {noticias: result.recordset});
    });
}