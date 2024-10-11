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


export default { Favoritos };