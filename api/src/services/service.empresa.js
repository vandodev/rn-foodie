import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques() {

    const empresas = await repositoryEmpresa.Destaques();

    return empresas;
}

export default { Destaques };