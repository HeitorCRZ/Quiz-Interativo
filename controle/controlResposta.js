const express = require('express');
const RespostaUsuario = require("../modelo/RespostasUsuarios");

module.exports = class ControlResposta {
    async controle_resposta_post(request, response) {
        try {
            // Captura os dados diretamente do corpo da requisição
            const Respostas_idUsuario = request.body.Respostas_idUsuario;
            console.log("Email ....>>>",Respostas_idUsuario);
            console.log("body ....>>>",Respostas_idUsuario);

            // Captura os pontos diretamente do request.body
            const Pontos_Informatica = request.body.Pontos_Informatica;
            const Pontos_Eletronica = request.body.Pontos_Eletronica;
            const Pontos_Publicidade = request.body.Pontos_Publicidade;
            const Pontos_Administracao = request.body.Pontos_Administracao;
            const Pontos_Quimica = request.body.Pontos_Quimica;
            const Pontos_Analises = request.body.Pontos_Analises_Clinicas;

            // Criação de um novo objeto de RespostaUsuario
            const respUsuario = new RespostaUsuario();
            respUsuario.Respostas_idUsuario = Respostas_idUsuario;
            respUsuario.Pontos_Informatica = Pontos_Informatica;
            respUsuario.Pontos_Eletronica = Pontos_Eletronica;
            respUsuario.Pontos_Publicidade = Pontos_Publicidade;
            respUsuario.Pontos_Administracao = Pontos_Administracao;
            respUsuario.Pontos_Quimica = Pontos_Quimica;
            respUsuario.Pontos_Analises = Pontos_Analises;

            // Salva a resposta no banco de dados
            const cadastrarResposta = await respUsuario.cadastrarResposta();

            if (!cadastrarResposta) {
                // Caso não consiga salvar, lança um erro
                throw new Error('Erro ao salvar a resposta no banco de dados.');
            }

            // Resposta de sucesso
            const objResposta = {
                cod: 1,
                status: cadastrarResposta,
                msg: 'Resposta salva com sucesso'
            };

            response.status(200).json(objResposta); // Envia a resposta como JSON

        } catch (error) {
            // Loga e retorna o erro com mensagem de erro genérica
            console.error("Erro >>>", error);
            response.status(500).json({ message: 'Erro interno do servidor', error: error.message });
        }
    }

    async controle_buscarHistorico(request, response) {
        try {
            const Respostas_idUsuario = request.body.Respostas_idUsuario; // Captura o ID do usuário
            
            const respUsuario = new RespostaUsuario();
            respUsuario.Respostas_idUsuario = Respostas_idUsuario; // Atribui o email ao objeto respUsuario
            
            const exibirRespostas = await respUsuario.buscarRespostas(); // Busca as respostas do usuário
            
            if (!exibirRespostas) {
                throw new Error('Nenhum histórico encontrado para o usuário.');
            }

            // Resposta de sucesso com o histórico de respostas
            const objResposta = {
                status: true,
                dados: exibirRespostas
            };

            response.status(200).json(objResposta); // Envia a resposta como JSON

        } catch (error) {
            // Loga e retorna o erro com mensagem de erro genérica
            console.error("Erro >>>", error);
            response.status(500).json({ message: 'Erro interno do servidor', error: error.message });
        }
    }
}
