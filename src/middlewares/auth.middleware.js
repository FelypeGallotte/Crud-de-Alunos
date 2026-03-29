function authMiddleware(req, res, next){
    const chaveEnviada = req.headers['x-api-key'];

    const chaveCorreta = process.env.API_KEY;

    if (!chaveCorreta) {
        return res.status(500).json({ mensagem: "Erro de configuração no servidor." });
    }

    if (chaveEnviada && chaveEnviada === chaveCorreta){
        return next();
    }
    
    return res.status(401).json({
        mensagem: "Acesso negado: Chave de API inválida ou ausente."
    });
}

module.exports = {authMiddleware};