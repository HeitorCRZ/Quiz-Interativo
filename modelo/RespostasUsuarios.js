const Banco = require("./Banco");

module.exports = class RespostaUsuario  {

    constructor() {
        this._Respostas_idUsuario = null;
        this._Pontos_Informatica = null;
        this._Pontos_Eletronica = null;
        this._Pontos_Publicidade = null;
        this._Pontos_Administracao = null;
        this._Pontos_Quimica = null;
        this._Pontos_Analises = null;
    }

    async cadastrarResposta() { 
        const conexao = Banco.getConexao();
        
        if (this._Pontos_Informatica == null || 
            this._Pontos_Eletronica == null || 
            this._Pontos_Publicidade == null || 
            this._Pontos_Administracao == null || 
            this._Pontos_Quimica == null || 
            this._Pontos_Analises == null) {
            console.log("Erro: Todos os pontos devem ser preenchidos.");
            return false;
        }

        const sql = `
            INSERT INTO respostas_usuarios 
            (Respostas_idUsuario, Data_Teste, Pontos_Informatica, Pontos_Eletronica, Pontos_Publicidade, Pontos_Administracao, Pontos_Quimica, Pontos_Analises) 
            VALUES (?, NOW(), ?, ?, ?, ?, ?, ?)
        `;
        
        try { 
            const [result] = await conexao.promise().execute(sql, [
                this._Respostas_idUsuario, 
                this._Pontos_Informatica, 
                this._Pontos_Eletronica, 
                this._Pontos_Publicidade, 
                this._Pontos_Administracao, 
                this._Pontos_Quimica, 
                this._Pontos_Analises
            ]);

            this._idUsuario = result.insertId;
            return result.affectedRows > 0;

        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }

    async buscarRespostas() { 
        const conexao = Banco.getConexao();
        const sql = `
            SELECT 
                Pontos_Informatica,
                Pontos_Eletronica,
                Pontos_Publicidade,
                Pontos_Administracao,
                Pontos_Quimica,
                Pontos_Analises,
                Data_Teste
            FROM respostas_usuarios 
            WHERE Respostas_idUsuario = ? 
            ORDER BY Data_Teste DESC
            LIMIT 1;
        `;
        
        try { 
            const [result] = await conexao.promise().execute(sql, [this._Respostas_idUsuario]);
            return result.length > 0 ? result[0] : null;

        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }

    get Respostas_idUsuario() {
        return this._Respostas_idUsuario;
    }

    set Respostas_idUsuario(value) {
        this._Respostas_idUsuario = value;
    }


    get Pontos_Informatica() {
        return this._Pontos_Informatica;
    }

    set Pontos_Informatica(value) {
        this._Pontos_Informatica = value;
    }

    get Pontos_Eletronica() {
        return this._Pontos_Eletronica;
    }

    set Pontos_Eletronica(value) {
        this._Pontos_Eletronica = value;
    }

    get Pontos_Publicidade() {
        return this._Pontos_Publicidade;
    }

    set Pontos_Publicidade(value) {
        this._Pontos_Publicidade = value;
    }

    get Pontos_Administracao() {
        return this._Pontos_Administracao;
    }

    set Pontos_Administracao(value) {
        this._Pontos_Administracao = value;
    }

    get Pontos_Quimica() {
        return this._Pontos_Quimica;
    }

    set Pontos_Quimica(value) {
        this._Pontos_Quimica = value;
    }

    get Pontos_Analises() {
        return this._Pontos_Analises;
    }

    set Pontos_Analises(value) {
        this._Pontos_Analises = value;
    }
}
