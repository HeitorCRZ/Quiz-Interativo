const express = require('express');
const controlResposta = require("../controle/controlResposta");

module.exports = class RouterResposta {
    constructor() { 
        this._router = express.Router();
        this._controleResposta = new controlResposta();
    }

    criarRotasResposta() {
        this._router.post('/', this._controleResposta.controle_resposta_post); // Alterado para ':email'
        this._router.post('/buscar', this._controleResposta.controle_buscarHistorico);
        return this._router;
    }
}