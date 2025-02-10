const mysql = require('mysql2');

class Banco {
    static HOST = 'localhost';
    static USER = 'root';
    static PWD = '@123456';
    static DB = 'feira_tecnica';
    static PORT = 3306;
    static CONEXAO = null;

    static conectar() {
        if (Banco.CONEXAO === null) {

            Banco.CONEXAO = mysql.createConnection({
                host: Banco.HOST,
                user: Banco.USER,
                password: Banco.PWD,
                database: Banco.DB,
                port: Banco.PORT
            });

            // Verifica se ocorreu algum erro na conexão
            Banco.CONEXAO.connect((err) => {
                if (err) {
                    const objResposta = {
                        cod: 1,
                        msg: "Erro ao conectar no banco",
                        erro: err.message
                    };
                    console.error(JSON.stringify(objResposta));
                    process.exit(1); // Encerra o script em caso de erro
                }
            });
        }
    }

    // Método público para obter a conexão com o banco de dados
    static getConexao() {
        if (Banco.CONEXAO === null) {
            // Se não houver, estabelece uma nova conexão
            Banco.conectar();

        }
        // Retorna a conexão
        return Banco.CONEXAO;
    }
}

module.exports = Banco;