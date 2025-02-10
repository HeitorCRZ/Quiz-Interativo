const express = require('express');
const Usuario = require("../modelo/Usuario")
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

module.exports = class middlewareUsuario {

    validar_nome (request , response , next ) { 

        const nomeUsuario = request.body.nomeUsuario
        console.log ("nomeUsuario >>" +nomeUsuario)
        if (!isNaN (nomeUsuario)) {
            const objResposta = {
                status: false,
                msg: "O nome nao pode ser somente numeros!"
            }
         }else if ( nomeUsuario.length  <= 2 ) {
            const objResposta = {
                status: false,
                msg: "O nome esta muito curto!"
            }
                response.status(200).send(objResposta);
                
        }else{
            next();
        }
        
    }

    validar_email (request , response , next ) { 
        const emailUsuario = request.body.emailUsuario
        

        if ( emailUsuario.length <= 4 ) {
            const objResposta = {
                status: false,
                msg: "O email esta muito curto!"
            }
                response.status(200).send(objResposta);
        } else  if (!regex.test(emailUsuario)) {
                const objResposta = {
                    status: false,
                    msg: "Insira um e-mail válido!"
                }
                response.status(200).send(objResposta);
        
        } else {
            next();
        }
        
    }
    
    validar_senha (request , response , next ) { 
        const senhaUsuario = request.body.senhaUsuario
        
        if ( senhaUsuario.length <= 4 ) {
            const objResposta = {
                status: false,
                msg: "A senha esta muito curta!"
            }
                response.status(200).send(objResposta);
        }else {
            next();
        }
        
    }

    async validar_usuario ( request , response , next ) {
        const emailUsuario = request.body.emailUsuario
        const objUsuario = new Usuario()
        objUsuario.emailUsuario = emailUsuario

        const usuarioExiste = await objUsuario.verificarEmail();
        
        if (usuarioExiste == true) {
            const objResposta = {
                codigo: 1,
                status: false,
                msg: "Não é possível cadastrar um usuario com o mesmo email ja existente"
            }
        response.status(200).send(objResposta);

        }else { 
            next();
        }
    }
    async validar_usuario_login ( request , response , next ) {

        const emailUsuario = request.body.emailUsuario
        const senhaUsuario = request.body.senhaUsuario

        const objUsuario = new Usuario()
        objUsuario.emailUsuario = emailUsuario
        objUsuario.senhaUsuario = senhaUsuario

        const usuarioExiste = await objUsuario.verificarUsuario();

        if (usuarioExiste == true) {
            request.usuario = objUsuario;  
            next();

        }else { 
            const objResposta = {
                status: false,
                msg: "Não é possível entrar devido as informações inválidas"
            }        
            response.status(200).send(objResposta);

        }
    }
    

}