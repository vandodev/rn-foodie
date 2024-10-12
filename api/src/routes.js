import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

router.get("/categorias", jwt.ValidateJWT, controllerCategoria.Listar);
router.get("/banners", jwt.ValidateJWT, controllerBanner.Listar);
router.get("/empresas/destaques", jwt.ValidateJWT, controllerEmpresa.Destaques);


// Pedidos
router.get("/pedidos", jwt.ValidateJWT, controllerPedido.Listar);
router.get("/pedidos/:id_pedido", jwt.ValidateJWT, controllerPedido.ListarId);


// Usuarios 
router.get("/usuarios/favoritos", jwt.ValidateJWT, controllerUsuario.Favoritos);
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);

export default router;