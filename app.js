const express = require('express');
const path = require('path');
const app = express();
const portaServico = 80;
const RouterUsuario = require("./router/RouterUsuario");
const RouterResposta = require("./router/RouterResposta");
const RouterQuestao = require("./router/RouterQuestao");

app.use(express.json());
app.use(express.static('js'));
app.use('/html', express.static(path.join(__dirname, 'view/html')));
app.use('/css', express.static(path.join(__dirname, 'view/css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/html/paginaInicial.html'));
});

const roteadorUsuario = new RouterUsuario();
const roteadorResposta = new RouterResposta();
const roteadorQuestao = new RouterQuestao();

app.use('/respostas', roteadorResposta.criarRotasResposta());
app.use('/usuarios', roteadorUsuario.criarRotasUsuarios());
app.use('/questao', roteadorQuestao.criarRotasQuestao());

app.listen(portaServico, () => {
    console.log("Api rodando na porta " + portaServico);
});
