import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques(id_usuario) {

    const empresas = await repositoryEmpresa.Destaques(id_usuario);

    return empresas;
}

export default { Destaques};