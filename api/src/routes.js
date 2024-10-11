import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedidos from "./controllers/controller.pedido.js"

const router = Router();

router.post("/usuarios/login", (req, res) => {

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

    res.json([
        { restaurante: 1, nome: "Burger King" },
        { restaurante: 2, nome: "Mc Donalds" }
    ]);

});

router.get("/categorias", controllerCategoria.Listar);
router.get("/banner", controllerBanner.Listar);
router.get("/empresas/destaques", controllerEmpresa.Destaques);
router.get("/pedido", controllerPedidos.Listar);

export default router;