
import repositoryUsuario from "../repositories/repository.usuario.js";

async function Favoritos(id_usuario) {

    const favoritos = await repositoryUsuario.Favoritos(id_usuario);

    return favoritos;
}

export default { Favoritos };