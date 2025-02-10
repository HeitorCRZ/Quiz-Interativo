const jwt = require('jsonwebtoken');

module.exports  = class MeuTokenJWT  { 
    constructor() {
        this._key = "K7k6ezDzv7t0DEatig07fdRF2Oe4Y46UG9h35vYgJVk"; // Chave secreta
        this._alg = 'HS256'; // Algoritmo de criptografia
        this._type = 'JWT';
        this._iss = 'http://localhost'; // Emissor do token
        this._aud = 'http://localhost'; // Destinatário do token
        this._sub = "feira_tecnica"; // Assunto do token
        this._duracaoToken = 3600 * 24 * 3000; // Duração do token (30 dias)
    }


    gerarToken(parametroClaims) {
        const headers = {
            alg: this._alg,
            typ: this._type
        };
        const payload = {
            iss: this._iss, // Emissor do token
            aud: this._aud, // Destinatário do token
            sub: this._sub, // Assunto do token
            iat: Math.floor(Date.now() / 1000), // Momento de criação (em segundos)
            exp: Math.floor(Date.now() / 1000) + this._duracaoToken, // Expiração (em segundos)
            nbf: Math.floor(Date.now() / 1000), // Não é válido antes do tempo especificado
            jti: require('crypto').randomBytes(16).toString('hex'), // Identificador único (jti)
            nome: parametroClaims.nomeUsuario, // Claims públicas
            email: parametroClaims.emailUsuario,
        };

        const token = jwt.sign(payload, this._key, { algorithm: this._alg, header: headers });

        return token;
    }



    validarToken(stringToken) {
        if (!stringToken || stringToken.trim() === "") {
            return false;
        }
        const token = stringToken.replace("Bearer ", "").trim();
        try {
            const decoded = jwt.verify(token, this._key, { algorithms: [this._alg] });
            this.payload = decoded;
            return true;
        } catch (err) {
            // Lidar com diferentes tipos de erro
            if (err instanceof jwt.TokenExpiredError) {
                console.error("Token expirado");
            } else if (err instanceof jwt.JsonWebTokenError) {
                console.error("Token inválido");
            } else {
                console.error("Erro geral", err);
            }
            return false;
        }
    }

    getPayload() {
        return this.payload;
    }
    setPayload(payload) {
        this.payload = payload;
    }
    getAlg() {
        return this._alg;
    }
    setAlg(alg) {
        this._alg = alg;
    }
        

}