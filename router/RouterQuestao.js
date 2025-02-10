const express = require('express');
const ControleQuestao= require("../controle/controlQuestao")

module.exports = class RouterQuiz {

    constructor () { 
        this._router = express.Router( )
        this._ControlQuestao=  new ControleQuestao()
    }


    /*

    o controle questao pode ser 2 em 1 !!!!
    */
    criarRotasQuestao  () {


        this._router.get ('/:posicao/:idCursoRef' ,
            this._ControlQuestao.controle_get_questao
        )

        this._router.get ('/respostas/:posicao/:idCursoRef' ,

            this._ControlQuestao.controle_get_Resposta
        )

        this._router.post ('/perguntas/curso' ,

            this._ControlQuestao.controle_get_Cursos
        )

        this._router.get ('/respostas/:posicao/:idCursoRef/:resposta' ,
            this._ControlQuestao.controle_get_valor_resposta
        )

        return this._router
    }
}