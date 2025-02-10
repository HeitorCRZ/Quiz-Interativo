const express = require('express');
const Usuario = require("../modelo/Usuario");
const MeuTokenJWT = require("../modelo/MeuTokenJWT")


module.exports = class ControlUsuario {

    async controle_usuario_post (request , response ) { 
        const nomeUsuario = request.body.nomeUsuario
        const emailUsuario = request.body.emailUsuario
        const senhaUsuario = request.body.senhaUsuario

        const usuario = new Usuario()
        usuario.nomeUsuario = nomeUsuario
        usuario.emailUsuario = emailUsuario
        usuario.senhaUsuario = senhaUsuario


        const usuarioExistente  = await usuario.cadastrar();

        const objResposta = {
            cod: 1,
            status: usuarioExistente,
            msg: usuarioExistente ? 'Usuario criado com sucesso' : 'Erro ao criar conta'
        };
            
        response.status(200).send(objResposta);

    }

    async controle_usuario_login (request , response ) { 
        const objUsuario = request.usuario

        console.log (objUsuario)
        try { 
            const objToken = new MeuTokenJWT ()
            const objClaimsToken = {
                nomeUsuario : objUsuario.nomeUsuario ,
                emailUsuario : objUsuario.emailUsuario
            };

            const novoToken = objToken.gerarToken(objClaimsToken)

            const objResposta = {
                resposta : "Sucesso ao logar" ,
                token : novoToken,
                Usuario : objUsuario
            }
            response.status(200).send(objResposta);

        } catch (error) { 
            console.log("Errro >>>" , error)
            return false
        }
    }

}