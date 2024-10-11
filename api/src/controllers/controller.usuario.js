import serviceUsuario from "../services/service.usuario.js";

async function Favoritos(req, res) {
    try {
        const id_usuario = 1; // Pegar do token JWT
        const favoritos = await serviceUsuario.Favoritos(id_usuario);

        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Login(req, res) {

    //const email = req.body.email;
    //const senha = req.body.senha;
    const { email, senha } = req.body;

    if (email == "teste@teste.com" && senha == "12345") {
        res.status(200).json({
            id_usuario: 123,
            email: "teste@teste.com",
            nome: "Evandro Oliveira",
            insta: "@evandro.com.br"
        });
    } else {
        res.status(401).json({ error: "E-mail ou senha inválida" });
    }

}

async function Inserir(req, res) {

    const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;

    res.status(201).json({
        id_usuario: 123,
        nome,
        email,
        senha,
        endereco,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        insta: "@devpoint.com.br"
    });
}

export default { Favoritos, Login, Inserir };