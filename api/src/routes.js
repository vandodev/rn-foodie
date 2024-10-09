import { Router } from "express";

const router = Router();

//GET: http://localhost:3001/usuarios/login?email=teste@teste.com&senha=123

router.post("/usuarios/login", (req, res) => {

    //const email = req.body.email;
    //const senha = req.body.senha;
    const { email, senha } = req.body;

    if (email == "teste@teste.com" && senha == "12345") {
        res.status(200).json({
            id_usuario: 123,
            email: "teste@teste.com",
            nome: "Evandro Aparecido de Oliveira",
            insta: "@evandro.com.br"
        });
    } else {
        res.status(401).json({ error: "E-mail ou senha inválida" });
    }

});

// GET = Listar dados
// POST = Inserir os dados no servidor
// PUT = Editar dados no servidor
// DELETE = Excluir dados no servidor

router.post("/usuarios", (req, res) => {

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
});

router.get("/restaurantes", (req, res) => {

    // URI Params: http://localhost:3001/restaurantes/10
    // Query params: http://localhost:3001/restaurantes?busca=Pizza (somente GET)
    const busca = req.query.busca;

    // res.json({message: "nenhum restaurante encontrado" + busca})

    res.json([
        { restaurante: 1, nome: "Burger King" },
        { restaurante: 2, nome: "Mc Donalds" }
    ]);

});

router.get("/categorias", (req, res) => {

    // Query params: http://localhost:3001/categorias

    res.json([
        { id_categoria: 1, categoria: "Burguers" },
        { id_categoria: 2, categoria: "Pizzas" },
        { id_categoria: 3, categoria: "Fritas" }
    ]);

});

export default router;