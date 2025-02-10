const Banco = require("./Banco")

module.exports = class Usuario {

    constructor() { 
        this._idUSuario = null
        this._nomeUsuario = ""
        this._emailUsuario = ""
        this._senhaUsuario = ""
    }

    async cadastrar () {

        const conexao = Banco.getConexao()
        const sql = "insert into usuarios (nomeUsuario , emailUsuario , senhaUsuario) values ( ?,?, md5(?) )"
        try { 
            const [result] = await conexao.promise().execute(sql , [this._nomeUsuario, this._emailUsuario, this._senhaUsuario])
            this._idUSuario = result.insertId;
            return result.affectedRows > 0;

        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }
    }

    async verificarUsuario () {
        const conexao = Banco.getConexao()
        console.log (this._emailUsuario)
        console.log (this._senhaUsuario)

        const sql = "select count(*) AS qtd, nomeUsuario from usuarios where emailUsuario = ? and senhaUsuario = md5(?) group by  nomeUsuario"
        try {
            const [result] = await conexao.promise().execute(sql , [ this._emailUsuario , this._senhaUsuario])

            for (let tupla of result) {
                if (tupla.qtd === 1) {
                    this.nomeUsuario = tupla.nomeUsuario;
                    return true;
                }
            }
        }catch (error) { 
            console.log("Errro >>>" , error)
            return false
        }
    }
    async verificarEmail () {
        const conexao = Banco.getConexao()
        const sql = "select count(*) AS qtd from usuarios where emailUsuario = ? "
        try {
            const [result] = await conexao.promise().execute(sql , [ this._emailUsuario])
            return result[0].qtd > 0;
            
        }catch (error) { 
            console.log("Errro >>>" , error)
            return false
        }
    }



    set nomeUsuario (nomeUsuario) {
        this._nomeUsuario = nomeUsuario
    }
    get nomeUsuario () {
        return this._nomeUsuario 
    }
    set emailUsuario (emailUsuario) {
        this._emailUsuario = emailUsuario
    }
    get emailUsuario () {
        return this._emailUsuario 
    }
    set senhaUsuario (senhaUsuario) {
        this._senhaUsuario = senhaUsuario
    }
    get senhaUsuario () {
        return this._senhaUsuario 
    }


}