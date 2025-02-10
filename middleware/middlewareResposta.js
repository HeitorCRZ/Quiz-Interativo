const express = require('express');
const MeuTokenJWT = require("../modelo/MeuTokenJWT")

module.exports = class MiddlewareResposta {

    async controle_resposta_autenticacao (request , response , next) {
        const token = request.headers.authorization
        const objToken = new MeuTokenJWT()
        try {
            const tokenValido = await objToken.validarToken(token);  

            if  (tokenValido) {
                next()
                
            }else {
                const objResposta = {
                    status: false,
                    msg: "Token inválido"
                }
                    response.status(200).send(objResposta);
            }
        } catch (error) { 
            console.log("Errro >>>" , error)
            return false
        }
    }
}