const express = require('express');
const controlUsuario = require("../controle/controlUsuario")

const MiddlewareUsuario = require("../middleware/middlewareUsuario")
module.exports = class RouterUsuario {

    constructor () { 
        this._router = express.Router()
        this._controleUsuario = new controlUsuario()
        this._middleUsuario = new MiddlewareUsuario ()
    }

    criarRotasUsuarios () {
        console.log ("requiestr >>>>>>" )


        this._router.post ('/' ,

            this._middleUsuario.validar_nome,
            this._middleUsuario.validar_email,
            this._middleUsuario.validar_senha,
            this._middleUsuario.validar_usuario,

            this._controleUsuario.controle_usuario_post
        )
        
        this._router.post ('/login' ,
            this._middleUsuario.validar_usuario_login,
            this._controleUsuario.controle_usuario_login
        )
    
        return this._router
    }
}