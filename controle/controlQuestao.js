const express = require('express');
const Questao = require("../modelo/Questao");
const MeuTokenJWT = require("../modelo/MeuTokenJWT")

module.exports = class ControlQuestao {


    async controle_get_questao (request , response)  {
        const botaoValor = request.params.posicao
        const idCursoRef = request.params.idCursoRef

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Botao_Valor = botaoValor

        const questaoExiste  = await questao.getQuestao();

        const objResposta = {
            cod: 1,
            status: questaoExiste,
            msg: questaoExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : questaoExiste
        };
            
        response.status(200).send(objResposta);

    }



    async controle_get_Resposta (request , response)  {
        const idCursoRef = request.params.idCursoRef
        const botaoValor = request.params.posicao

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Botao_Valor = botaoValor
        
        const respostaExiste  = await questao.getRespostas();

        const objResposta = {
            cod: 1,
            status: respostaExiste,
            msg: respostaExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : respostaExiste
        };
            
        response.status(200).send(objResposta);

    }



    async controle_get_valor_resposta (request , response)  {
        const idCursoRef = request.params.idCursoRef
        const resposta = request.params.resposta
        const botaoValor = request.params.posicao

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Resposta_Usuario = resposta
        questao.Botao_Valor = botaoValor

      
        const respostaExiste  = await questao.getValorResposta();

        const objResposta = {
            cod: 1,
            status: respostaExiste,
            msg: respostaExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : respostaExiste
        };
            
        response.status(200).send(objResposta);

    }



    async controle_get_Cursos (request , response)  {
        const Pontos_Informatica = request.body.Pontos_Informatica
        const Pontos_Eletronica = request.body.Pontos_Eletronica
        const Pontos_Publicidade = request.body.Pontos_Publicidade
        const Pontos_Administracao = request.body.Pontos_Administracao
        const Pontos_Quimica = request.body.Pontos_Quimica
        const Pontos_Analises = request.body.Pontos_Analises_Clinicas
   
        const questao = new Questao()
        questao.Pontos_Informatica = Pontos_Informatica
        questao.Pontos_Eletronica = Pontos_Eletronica
        questao.Pontos_Publicidade = Pontos_Publicidade
        questao.Pontos_Administracao = Pontos_Administracao
        questao.Pontos_Quimica = Pontos_Quimica
        questao.Pontos_Analises = Pontos_Analises

        const questaoExiste  = await questao.getCalcularCurso();

        const objResposta = {
            cod: 1,
            status: questaoExiste,
            msg: questaoExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : questaoExiste
        };
            
        response.status(200).send(objResposta);

    }

}