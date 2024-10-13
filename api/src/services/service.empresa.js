import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques(id_usuario) {

    const empresas = await repositoryEmpresa.Destaques(id_usuario);

    return empresas;
}

async function Listar(id_usuario, busca) {

    const empresas = await repositoryEmpresa.Listar(id_usuario, busca);

    return empresas;
}

export default { Destaques, Listar };